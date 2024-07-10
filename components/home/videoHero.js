'use client';
import Image from 'next/image';
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
        <div>
            <button class="btn">
                <Image
					width={200}
					height={200}
					src={'/worldview.svg'}
					className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
					alt='logo'
				></Image>
                世界观
            </button>
        </div>
    );
}
