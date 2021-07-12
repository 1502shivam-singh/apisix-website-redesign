import React, { useState, useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import gsap from "gsap"
import "../../css/customTheme.css";
import HeroCanvas from "./components/heroCanvas"


function HeroSection(props) {
    const heroPathRef1 = useRef(null);
    const heroPathRef2 = useRef(null);
  
    let strokeAnim = {
        strokeDasharray: 1000,
        strokeDashoffset: 1002
    }

    function mouseOver() {
        gsap.to([heroPathRef2.current],{
            strokeDashoffset: 970,
            duration: 0.4
        });
        gsap.to([heroPathRef1.current],{
            stroke: "#9b9b9b",
            duration: 0.4
        });
        gsap.to([heroPathRef2.current],{
            stroke: "#9b9b9b",
            duration: 0.4
        });
    }

    function mouseOut() {
        gsap.to([heroPathRef2.current],{
            strokeDashoffset: 1002,
            duration: 0.4
        });
        gsap.to([heroPathRef1.current],{
            stroke: "black",
            duration: 0.4
        });
        gsap.to([heroPathRef2.current],{
            stroke: "black",
            duration: 0.4
        });
    }

    return (
        <>
            <div className="hero-sec-wrap" style={{width: "100%"}}>
                <div className="hero-text">
                    <h2 className="hero-title"><span>Complete</span> managment 
                    suite for your <span style={{color: "#E8433E"}}>API Traffic</span></h2>
                    <h3 className="hero-subtitle">APISIX provides rich traffic management features like Load Balancing, Dynamic Upstream, Canary Release, Circuit Breaking, Authentication, Observability, and more...</h3>
                    <div className="hero-ctas">
                        <Link
                          to={useBaseUrl("downloads")}
                          className="btn btn-download">
                          Downloads
                        </Link>
                        <Link
                          to={useBaseUrl("docs")} onMouseOver={mouseOver} onMouseLeave={mouseOut}
                          className="btn-docs">
                          Go to docs...
                            <svg width="15" strokeWidth="3" height="25" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={heroPathRef1} d="M27.5 1L42.5 16L27.5 31" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                <path ref={heroPathRef2} style={strokeAnim} d="M42.5 16H0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <HeroCanvas></HeroCanvas>
            </div>
        </>
    );
  }
  
  export default HeroSection;
  