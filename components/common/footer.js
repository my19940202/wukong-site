'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function Footer() {
     const pathname = usePathname();
     const [langName, setLangName] = useState(defaultLocale);
     const [linkList, setLinkList] = useState([]);

     useEffect(() => {
          const fetchLinksList = async () => {
               if (pathname === '/') {
                    setLangName(defaultLocale);
               } else {
                    setLangName(pathname.split('/')[1]);
               }
               setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
          };
          fetchLinksList();
     }, [pathname, langName]);

     return (
          <footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
               <div className='max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
                    <div className='flex flex-col items-center md:items-start'>
                         <div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
                              {linkList.map((link, index) => {
                                   return (
                                        <a
                                             key={index}
                                             title={link.name}
                                             href={`/${langName}${link.url}`}
                                        >
                                             {link.name}
                                        </a>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </footer>
     );
}
