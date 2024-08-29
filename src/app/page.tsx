
'use client'
import Image from "next/image";
import { chakra } from "@chakra-ui/react";
import Navbar from "../components/views/Navbar/Navbar";
import Hero from "../components/views/Hero/Hero";
import Logos from "../components/views/Logos/Logos";
import Studio from "../components/views/Studio/Studio"
import Projects from "../components/views/Projects/Projects";
import OtherProjects from "../components/views/OthrProjects/OtherProjects";
import Design from "../components/views/Design/Design";
import About from "../components/views/About/About";
import Footer from "../components/views/Footer/Footer";

export default function Home() {
  return (
    <chakra.div bg={'black'}>
    <Navbar/>
    <Hero/>
    <Logos/>
    <Studio/>
    <Projects/>
    <OtherProjects/>
    <Design/>
    <About/>
    <Footer/>
    </chakra.div>
  );
}
