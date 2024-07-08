'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function Hero({ locale, CTALocale }) {
    const [tilt, setTilt] = useState(45);
    const [duration, setDuration] = useState(0.8);

    useEffect(() => {
        const handleScroll = () => {
            const maxTilt = 45; // 最大倾斜角度
            const scrollY = window.scrollY;
            const tiltValue = Math.max(maxTilt - scrollY / 8, 0); // 根据滚动值调整
            setTilt(tiltValue);
            setDuration(0.3);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <h1>the big video</h1>

            <div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
                <div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
                <div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
                <div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
                <div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
            </div>
        </>
    );
}
