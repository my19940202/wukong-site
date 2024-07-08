import { defaultLocale, getDictionary } from '@/lib/i18n';

import Hero from '@/components/home/videoHero';
import Feature from '@/components/home/feature';

export default async function Home({ params }) {

    const langName = params.lang || defaultLocale;
    const dict = await getDictionary(langName); // 获取内容

    return (
        <div className='max-w-[1280px] mx-auto'>
            <Hero
                locale={dict.Feature}
                langName={langName}
            />
            <Feature
                locale={dict.Feature}
                langName={langName}
            />
        </div>
    );
}
