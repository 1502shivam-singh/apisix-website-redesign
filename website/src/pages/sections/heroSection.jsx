import React, { useState, useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import gsap from "gsap"
import "../../css/customTheme.css";
import HeroCanvas from "./components/heroCanvas"
import ArrowAnim from "./components/arrowAnim";

function HeroSection(props) {

    const titleRef = useRef(0)
    const subtitleRef = useRef(0)
    const ctaRef = useRef(0)
    const canRef = useRef(0)

    useEffect(() => {
        
        let tl = gsap.timeline({
            defaults: { // children inherit these defaults
                delay: 1.5,
                duration: 0.5,
                ease: "Expo.easeInOut" 
            },
        });

        
        tl.fromTo([titleRef.current, subtitleRef.current, ctaRef.current],{
            opacity: 0,
            y: 10
        },{
            opacity: 1,
            y: 0,
            stagger: 0.3
        });
        
        gsap.fromTo(".Architecture_compress_svg__dashboardRect",{
            opacity: 0,
        },{
            opacity: 1,
            duration: 1,
            repeat: -1,
        })

        return () => {
            tl.pause(0).kill(true);
        }
    }, [])

    return (
        <>
            <div className="hero-sec-wrap" style={{width: "100vw"}}>
                <div className="hero-text">
                    <h2 ref={titleRef} className="hero-title"><span>Complete</span> management 
                    suite for your <span style={{color: "#E8433E"}}>API Traffic</span></h2>
                    <h3 ref={subtitleRef} className="hero-subtitle">APISIX provides rich traffic management features like Load Balancing, Dynamic Upstream, Canary Release, Circuit Breaking, Authentication, Observability, and more...</h3>
                    <div ref={ctaRef} className="hero-ctas">
                        <Link
                          to={useBaseUrl("downloads")}
                          className="btn btn-download">
                          Downloads
                        </Link>
                        <ArrowAnim />
                    </div>
                </div>
                <div ref={canRef}>
                    <HeroCanvas></HeroCanvas>
                </div>
            </div>
        </>
    );
  }
  
  export default HeroSection;
  