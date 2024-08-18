'use client';

// 博客页面先简单渲染一个布局
import * as blog_data from './config';
import Image from 'next/image';
import React from 'react';
// https://nextjs.org/docs/app/api-reference/functions/use-search-params
import { usePathname, useSearchParams } from 'next/navigation';

const DynamicTagComponent = ({ type, children, ...rest}) => {
    return React.createElement(type, rest, children);
};

export default function Blog() {
    const pathname = usePathname();
    const langName = pathname.split('/')[1];
    const params = useSearchParams();
    const title = params.get('title');
    const article = blog_data[title];

    return <div className="max-w-[1280px] mx-auto py-2">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <Image
                src={article.poster.url}
                width={article.poster.w}
                height={article.poster.h}
                alt="Blog Image"
                className="w-full object-cover"
            />
            <div className="p-6">
                {
                    article[`list_${langName}`].map((item, idx) => {
                        const {classname, attr, ...rest} = item;
                        return (
                            <DynamicTagComponent key={idx} className={classname} type={attr} {...rest}>
                                {item.content}
                            </DynamicTagComponent>
                        );
                    })
                }
            </div>
        </div>
    </div>;
}
