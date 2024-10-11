import Script from 'next/script';
import React, { FC } from 'react';

interface Props {
    accountId: string;
}

const LeadfeederTracker: FC<Props> = ({ accountId }) => {
    return (
        <>
            <Script
                id="leadfeeder-tracker"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(function(l,e,a,d,f,e,r){l['LeadfeederObject']=f;l[f]=l[f]||function(){
                    (l[f].q=l[f].q||[]).push(arguments)},l[f].l=1*new Date();e=d.createElement(a),
                    r=d.getElementsByTagName(a)[0];e.async=1;e.src='https://lftracker.leadfeeder.com/lftracker_v1_e00.js';
                    r.parentNode.insertBefore(e,r)})(window,document,'script',0,'lf');
                    lf('init', {accountId: '${accountId}'});
                    `,
                }}
            />
        </>
    );
}

export default LeadfeederTracker;
