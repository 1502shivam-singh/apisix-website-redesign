import React, { useState, useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "../../css/customTheme.css";
import HeroCanvas from "./components/heroCanvas"
import ArrowAnim from "./components/arrowAnim";

function HeroSection(props) {

    return (
        <>
            <div className="hero-sec-wrap" style={{width: "100%"}}>
                <div className="hero-text">
                    <h2 className="hero-title"><span>Complete</span> management 
                    suite for your <span style={{color: "#E8433E"}}>API Traffic</span></h2>
                    <h3 className="hero-subtitle">APISIX provides rich traffic management features like Load Balancing, Dynamic Upstream, Canary Release, Circuit Breaking, Authentication, Observability, and more...</h3>
                    <div className="hero-ctas">
                        <Link
                          to={useBaseUrl("downloads")}
                          className="btn btn-download">
                          Downloads
                        </Link>
                        <ArrowAnim />
                    </div>
                </div>
                <HeroCanvas></HeroCanvas>
            </div>
        </>
    );
  }
  
  export default HeroSection;
  