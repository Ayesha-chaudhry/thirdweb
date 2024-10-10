'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme/theme";
import GoogleTagManager from "@/utils/gtm";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager containerId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>

      <body className={inter.className}>
      <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6T49V59"></iframe></noscript>
        {" "}
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
