import React from 'react';

// https://tagmanager.google.com/?utm_campaign=SuiteHeader&utm_source=UniversalPicker&utm_medium=getStarted#/container/accounts/6245201629/containers/192925405/workspaces/2
const google_analyse_header = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NZX6W46L');
`;

export default function CustomHead() {
    return (
        <>
            <script dangerouslySetInnerHTML={{__html: google_analyse_header}} />
        </>
    );
}
