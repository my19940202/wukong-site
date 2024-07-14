'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';

import { useEffect, useState } from 'react';
export default function Hero({ locale, CTALocale }) {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-08-20') - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
      };
      const pathname = location.pathname;
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <>
            <section
                className='relative z-10 flex flex-col items-start md:items-center py-5 overflow-hidden'
            >
                <h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
                    {locale.h1}
                </h1>
                <h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>{locale.h2}</h2>
                <h3 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>
                {locale.h3}</h3>
                <div className='flex justify-center items-center'>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-6xl">
                            <span style={{"--value": timeLeft.days}}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-6xl">
                            <span style={{"--value": timeLeft.hours}}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-6xl">
                            <span style={{"--value": timeLeft.minutes}}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-6xl">
                            <span style={{"--value": timeLeft.seconds}}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </section>
            <section
                className='relative z-10 flex flex-row justify-around overflow-hidden w-1/2 mx-auto'
            >
                <a class="btn btn-outline rounded-md" href={pathname + '/worldview'}>
                    <Image
                        width={20}
                        height={20}
                        src={'/icon/worldview.svg'}
                        className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10 dark:bg-white dark:rounded-md'
                        alt='logo'
                    ></Image>
                    世界观
                </a>
                <a class="btn btn-outline rounded-md" href={pathname + '/character'}>
                    <Image
                        width={20}
                        height={20}
                        src={'/icon/charcters.svg'}
                        className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10 dark:bg-white dark:rounded-md'
                        alt='logo'
                    ></Image>
                    角色
                </a>
                <a class="btn btn-outline rounded-md" href={pathname + '/source'}>
                    <Image
                        width={20}
                        height={20}
                        src={'/icon/source.svg'}
                        className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10 dark:bg-white dark:rounded-md'
                        alt='logo'
                    ></Image>
                    资源
                </a>
            </section>
            <section
                className='relative z-10 flex flex-col items-start md:items-center py-5 overflow-hidden hidden'
            >
                <video autoPlay loop muted src="/video/video_preview.mp4">
                </video>
            </section>
        </>
    );
}
