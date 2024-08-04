'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            <Link href={`/${langName}/blog?journey_to_west_worldview`} class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                <figure>
                    <Image
                        width={400}
                        height={200}
                        src={'/blog/old_monkey.jpg'}
                        alt='logo'
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">西游记-游戏世界观设定</h2>
                    <p>西游记界观设定:妖精鬼怪神佛仙魔</p>
                </div>
            </Link>
            <Link href={`/${langName}/blog?why_monster_wants_to_be_human`} class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                <figure>
                    <Image
                        width={400}
                        height={200}
                        src={'/blog/spider_sprit.jpg'}
                        alt='logo'
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">为什么中国妖怪想要变成人</h2>
                    <p>怪物们修炼的目的不一定是变强，还有可能是变成人</p>
                </div>
            </Link>
            {/* <div class="card card-compact bg-base-100 w-96 shadow-xl m-2">
                <figure>
                    <Image
                        width={400}
                        height={200}
                        src={'/blog/young_monkey.jpg'}
                        alt='logo'
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">为什么中国妖怪想要变成人</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> */}
        </div>
    </div>;
}
