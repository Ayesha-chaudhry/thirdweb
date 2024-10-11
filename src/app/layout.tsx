"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import GoogleTagManager from "@/utils/gtm";
import { useEffect } from "react";
import Leadfeeder from "@/utils/leadfeeder";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(l,e,a,d,f,eeder){
        l['LeadfeederObject']=f;l[f]=l[f]||function(){
        (l[f].q=l[f].q||[]).push(arguments)},l[f].l=1*new Date();
        e=a.createElement(d),f=a.getElementsByTagName(d)[0];
        e.async=1;e.src='https://lftracker.leadfeeder.com/lftracker_v1.js';
        f.parentNode.insertBefore(e,f)
      }(window,document,'script','script','lf'));

      lf('init', '${process.env.NEXT_PUBLIC_LEADFEEDER_ID}');
    `;
    document.head.appendChild(script);
  }, []);

  // useEffect(() => {
  //   // Add Leadfeeder script within useEffect (optional for potential async execution)
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = 'https://sc.lfeeder.com/lftracker_v1_bElvO73oMG67ZMqj.js'; // Assuming your site ID is 'bElvO730vrb4ZMqj'
  //   document.head.appendChild(script);
  // }, [])

  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager containerId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        ,
        {/* {process.env.NEXT_PUBLIC_LEADFEEDER_ID && (
          <Leadfeeder/>
        )} */}
      </head>

      <body className={inter.className}>
        <noscript>
          <iframe src="https://sc.lfeeder.com/lftracker_v1.js"></iframe>
        </noscript>
        <noscript>
          {" "}
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6T49V59"></iframe>
        </noscript>{" "}
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
