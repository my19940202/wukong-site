'use client';

import React from 'react';
// https://tagmanager.google.com/?utm_campaign=SuiteHeader&utm_source=UniversalPicker&utm_medium=getStarted#/container/accounts/6245201629/containers/192925405/workspaces/2
// https://tagmanager.google.com/#/container/accounts/6245201629/containers/192925405/workspaces/4
// google anayse不大好用
const google_analyse_header = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NZX6W46L');
`;
// https://tongji.baidu.com/main/setting/10000626700/home/site/getjs?siteId=20900245
const baidu_analyse_header = `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?562bdf4e2cd89d6a4119950ac78c1338";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
`;

export default function CustomHead() {
    return (
        <>
            <script dangerouslySetInnerHTML={{__html: google_analyse_header}} />
            <script dangerouslySetInnerHTML={{__html: baidu_analyse_header}} />
        </>
    );
}
