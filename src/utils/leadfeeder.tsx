import Script from 'next/script';
import React, { FC, useEffect } from 'react';

interface Props {
  accountId: string;
}

const LeadfeederTracker: FC<Props> = ({ accountId }) => {

  useEffect(() => {
    // Wait for the script to be loaded and available before initializing
    const checkLeadfeeder = () => {
      if (typeof window !== 'undefined' && (window as any).lf) {
        // Initialize Leadfeeder after the script has loaded
        (window as any).lf('init', { accountId });
        console.log("Leadfeeder initialized with ID:", accountId);
      } else {
        console.log("Leadfeeder script not yet available.");
      }
    };

    // Set a small delay to check when the script is available (you could also use an event listener)
    const interval = setInterval(() => {
      if ((window as any).lf) {
        checkLeadfeeder();
        clearInterval(interval); // Stop checking once initialized
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [accountId]);

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
          `,
        }}
      />
    </>
  );
}

export default LeadfeederTracker;
