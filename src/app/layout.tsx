"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import GoogleTagManager from "@/utils/gtm";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// Extending the window interface to include Leadfeeder
declare global {
  interface Window {
    ldfdr?: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_LEADFEEDER_ID) {
      const script = document.createElement("script");
      script.src = 'https://lftracker.leadfeeder.com/lftracker_v1.js';
      script.async = true;

      script.onload = () => {
        if (typeof window !== "undefined" && window.ldfdr) {
          window.ldfdr = window.ldfdr || function () {
            (window.ldfdr.q = window.ldfdr.q || []).push(arguments);
          };
          
          window.ldfdr('init', process.env.NEXT_PUBLIC_LEADFEEDER_ID);
        }
      };

      document.head.appendChild(script);
    }
  }, []);
  
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager containerId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>

      <body className={inter.className}>
        <noscript>
          {/* Leadfeeder tracker noscript iframe */}
          <iframe 
            src="https://sc.lfeeder.com/lftracker_v1.js" 
            style={{ display: 'none' }} 
            title="Leadfeeder noscript"
          ></iframe>
          {/* Google Tag Manager noscript iframe */}
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`} 
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
