'use client';
import { useEffect, useState } from 'react';
import {WALLPAPER_IMAGE_LIST, SCREENSHOT_IMAGE_LIST, CONCEPT_IMAGE_LIST} from './constants.js';

export default function Source() {
    const [imgIdx, setImgIdx] = useState('');
    const [imgType, setTmgType] = useState('wallpaper');
    const [imgList, setImgList] = useState(WALLPAPER_IMAGE_LIST);
    const mapSet = {
        wallpaper: WALLPAPER_IMAGE_LIST,
        screenshot: SCREENSHOT_IMAGE_LIST,
        concept: CONCEPT_IMAGE_LIST
    }
    
    const handleModal = (type = 'open', idx = 1) => {
        const modal = document.getElementById('img_modal');
        if (type === 'close') {
            modal.close();
        }
        else {
            setImgIdx(idx);
            modal.showModal();
        }
    }
    const handleBtnClick = (type) => {
        setTmgType(type);
        setImgList(mapSet[type]);
    }
    const defClassName = 'btn btn-outline m-3 btn-ghost';

    return (
        <div className="max-w-[1280px] mx-auto py-2">
            <div class="breadcrumbs text-sm">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>source</a></li>
                </ul>
            </div>
            <div>
                <button
                    onClick={e => handleBtnClick('wallpaper')}
                    className={`${defClassName} ${imgType === 'wallpaper' && 'btn-active'}`}>
                        Wallper
                </button>
                <button
                    onClick={e => handleBtnClick('screenshot')}
                    className={`${defClassName} ${imgType === 'screenshot' && 'btn-active'}`}>
                        Srcreenshot
                </button>
                <button
                    onClick={e => handleBtnClick('concept')}
                    className={`${defClassName} ${imgType === 'concept' && 'btn-active'}`}>
                    Concept
                </button>
            </div>
            <dialog id="img_modal" class="modal">
                <div class="w-11/12 max-h-screen py-0 px-0 overflow-scroll">
                    <figure>
                        <img src={imgList[imgIdx]} alt="Shoes" className="w-full h-full object-cover rounded-lg" />
                    </figure>
                    <button
                        onClick={e => handleModal('close')}
                        class="btn btn-md btn-circle btn-ghost absolute right-2 top-2 bg-white">
                        ✕
                    </button>
                    <button
                        onClick={e => imgIdx > 1 && setImgIdx(imgIdx - 1)}
                        class="btn btn-md btn-circle btn-ghost absolute left-2 top-1/2 bg-white">
                        &lt;
                    </button>
                    <button
                        onClick={e => imgIdx < imgList.length - 1 && setImgIdx(imgIdx + 1)}
                        class="btn btn-md btn-circle btn-ghost absolute right-2 top-1/2 bg-white">
                        &gt;
                    </button>
                </div>
            </dialog>

            <div className="flex flex-row flex-wrap justify-items-start" >
                {
                    imgList.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={e => handleModal('open', idx)}
                            className="card card-compact bg-base-100 w-96 shadow-xl m-2 cursor-pointer justify-center">
                            <figure>
                                <img src={item} alt="Shoes" />
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
