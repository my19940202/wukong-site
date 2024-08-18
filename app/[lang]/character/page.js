'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {data} from './config';

export default function Character() {
    const pathname = usePathname();
    const langName = pathname.split('/')[1];

    return <div className="max-w-[1280px] mx-auto py-2">
        <div class="breadcrumbs text-sm">
            <ul>
                <li><a>Home</a></li>
                <li><a>character</a></li>
            </ul>
        </div>
        <div className="flex flex-row flex-wrap justify-items-start" >
            {
                data.map(item => {
                    return (
                        <div class="card card-compact bg-base-100 w-70 shadow-xl m-2">
                            <figure>
                                <Image
                                    width={300}
                                    height={200}
                                    src={item.img}
                                    alt='logo'
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">{item[`name_${langName}`]}</h2>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>;
}
