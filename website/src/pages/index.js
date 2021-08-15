import React, { useState, useLayoutEffect } from "react";
import Layout from "@theme/Layout";
import Root from "@theme/Root";
import HeroSection from "./sections/heroSection";
import Architecture from "./sections/architecture";
import Features from "./sections/features";
import Benefits from "./sections/benefits";
import Comparison from "./sections/comparison";
import OpensourcePromo from "./sections/opensourcePromo";
import NewsSection from "./sections/newsSection";
import Showcase from "./sections/showcase";
import EndCTA from "./sections/endcta";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Index = (props) => {

  const [screenWidth, screenHeight] = useWindowSize();

  return (
    <Root>
      <Layout>
        <HeroSection />
        <Showcase />
        <Architecture screenWidth={screenWidth} screenHeight={screenHeight}/>
        <Features screenWidth={screenWidth} screenHeight={screenHeight}/>
        <Benefits screenWidth={screenWidth} screenHeight={screenHeight}/>
        <Comparison />
        <OpensourcePromo />
        <NewsSection />
        <EndCTA />
      </Layout>
    </Root>
  );
};

export default Index;
