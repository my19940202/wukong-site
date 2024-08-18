'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {data} from './config';

export default function Worldview() {
    const pathname = usePathname();
    const langName = pathname.split('/')[1];

    return <div className="max-w-[1280px] mx-auto py-2">
        <div class="breadcrumbs text-sm">
            <ul>
                <li><a>Home</a></li>
                <li><a>worldview</a></li>
            </ul>
        </div>
        <div className="flex flex-row flex-wrap justify-items-start" >
            {
                data[langName].map(item => {
                    return (
                        <Link href={`/${langName}/blog?title=${item.query}`} class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                            <figure>
                                <Image
                                    width={400}
                                    height={200}
                                    src={item.img}
                                />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>
    </div>;
}
