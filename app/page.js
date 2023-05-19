import React from 'react';
import { Footer, Hero, Navbar, Partners } from '../components';

const Page = () => (
  <div className="bg-[#131170] px-[90px] py-[40px]">
    <Navbar />
    <div className="gradient-02 z-0" />
    <Hero />
    <div className="gradient-03 z-0" />
    <Partners />
    <div className="gradient-04 z-0" />
    <Footer />
  </div>
);

export default Page;
