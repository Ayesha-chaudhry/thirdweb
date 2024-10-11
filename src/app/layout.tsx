"use client"
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import GoogleTagManager from '@/utils/gtm';
import LeadfeederTracker from '@/utils/leadfeeder';
import theme from '../../theme/theme';

const leadfeederId = process.env.NEXT_PUBLIC_LEADFEEDER_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {gtmId && <GoogleTagManager containerId={gtmId} />}
        
        {/* Leadfeeder Tracker */}
        {leadfeederId && <LeadfeederTracker accountId={leadfeederId} />}
      </head>
      <body>
        <noscript>
          {/* Noscript fallback for Leadfeeder */}
          <iframe
            src="https://sc.lfeeder.com/lftracker_v1.js"
            style={{ display: 'none' }}
            title="Leadfeeder noscript"
          ></iframe>
          
          {/* Noscript fallback for GTM */}
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
