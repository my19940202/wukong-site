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
                className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
                style={{ perspective: '800px' }}
            >
                <h1 className='font-bold text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] text-center bg-clip-text text-transparent !leading-[1.25em] mb-5'>
                    {locale.h1}
                </h1>
                <h2 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5 md:mb-10'>{locale.h2}</h2>
            </section>
            <section
                className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
            >
                <video autoPlay loop muted src="https://www.heishenhua.com/video/b1/gamesci_2024_PV07_preview.mp4">
                </video>
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
        </>
    );
}
