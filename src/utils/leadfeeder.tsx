import Script from 'next/script'
import React from 'react'

const Leadfeeder = () => {
  return (
    <>
    {/* <Script
  dangerouslySetInnerHTML={{
    __html: `
      (function(l,e,a,d,f,eeder){
        l['LeadfeederObject']=f;l[f]=l[f]||function(){
        (l[f].q=l[f].q||[]).push(arguments)},l[f].l=1*new Date();
        e=a.createElement(d),f=a.getElementsByTagName(d)[0];
        e.async=1;e.src='https://lftracker.leadfeeder.com/lftracker_v1.js';
        f.parentNode.insertBefore(e,f)
      }(window,document,'script','script','lf'));
      lf('init', '${process.env.NEXT_PUBLIC_LEADFEEDER_ID}');
    `
  }}
/> */}

    </>
  )
}

export default Leadfeeder