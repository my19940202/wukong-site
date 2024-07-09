'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { IoDocumentText } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function VideoHero({ locale, CTALocale }) {
    const [tilt, setTilt] = useState(45);
    const [duration, setDuration] = useState(0.8);

    useEffect(() => {
        // const handleScroll = () => {
        // };

        // window.addEventListener('scroll', handleScroll);

        return () => {
            // window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <h1>the big video XXXX</h1>
        </>
    );
}
