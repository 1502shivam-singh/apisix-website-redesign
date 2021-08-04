import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Performance from "../../assets/images/performance.svg";
import Security from "../../assets/images/security-tagged.svg";
import Scale from "../../assets/images/scale.svg";
import Dynamic from "../../assets/images/infographs/dynamic_compress.svg";
import Multiplatform from "../../assets/images/multiplatform.svg";
import "../../css/customTheme.css";

function Benefits(props) {

    const triggerDiv = useRef(null);
    const performance = useRef(null);
    const security = useRef(null);
    const scale = useRef(null);
    const dynamic = useRef(null);
    const multiplatform = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    
    const screenWidth = props.screenWidth;

    useEffect(() => {
        let tl;
        if(window.innerWidth <= 768)
        {
            tl = gsap.timeline({
                defaults: {
                    ease: "linear" 
                },
                scrollTrigger: {
                    trigger: triggerDiv.current,
                    start: "top top",
                    pin: triggerDiv.current,
                    scrub: 1,
                    end: "+=500%"
                }
            });
    
            tl.to(performance.current,{
                opacity: 0,
            })
            .to(security.current,{
                opacity: 1,
            })
            .to(security.current,{
                opacity: 0,
            })
            .to(scale.current,{
                opacity: 1, 
            })
            .to(scale.current,{
                opacity: 0, 
            })
            .to(dynamic.current,{
                opacity: 1, 
            })
            .to(dynamic.current,{
                opacity: 0, 
            })
            .to(multiplatform.current,{
                opacity: 1, 
            });
        }
        return () => {
            if(window.innerWidth <= 768) {
                tl.pause(0).kill(true);
                ScrollTrigger.getAll().forEach(t => t.kill());
            }
        }
    },[])
    
    return (
        <>
            <div ref={triggerDiv} className="benefit" style={{ position: "relative"}}>
                
                <div ref={performance} className="row-benefit" >
                    <div style={{width: screenWidth > 768 ? "50%" : "100%"}}>
                        <h3 className="feat-head-desc">Performance</h3>
                        <h1 className="feat-head add-left-margin">Ultimate performance </h1>
                        <p className="feat-desc add-left-margin"> 
                        Apache APISIX provides built-in plugins to create high speed systems. From routing, JSON schema to built-in  plugins, all these are designed and implement to meet your ultimate performance requirements. 
                        </p>
                    </div>
                    <div className="benefit-infograph">
                        <Performance style={{width: screenWidth >=768 ? "35%" : "50%"}}/>
                    </div>
                </div>

                <div ref={security} className="row-benefit row-reverse row-hidden" >
                    <div className="benefit-infograph">
                        <Security style={{width: screenWidth >=768 ? "75%" : "100%", position: "relative", left: screenWidth >=768 ? "3%" : "0"}}/>
                    </div>
                    <div style={{width: screenWidth > 768 ? "50%" : "100%"}}>
                        <h3 className="feat-head-desc">Security</h3>
                        <h1 className="feat-head add-left-margin">Shield against the malicious</h1>
                        <p className="feat-desc add-left-margin"> 
                        Apache APISIX provides multiple security plugins for identity authentication and interface verification, putting stability and security first. For more information, check <a style={{color: "#e8433e"}} href="#">here</a>.
                        </p>
                    </div>
                </div>

                <div ref={scale} className="row-benefit row-hidden" >
                    <div style={{width: screenWidth > 768 ? "50%" : "100%"}}>
                        <h3 className="feat-head-desc">Scalability and availability</h3>
                        <h1 className="feat-head add-left-margin">Scales with your users</h1>
                        <p className="feat-desc add-left-margin"> 
                            Apache APISIX provides the ability to write your own custom plugins, use custom Load Balancing Algorithms during the balancer phase for scaling and custom Routing algorithms for fine control on routing.
                        </p>
                    </div>
                    <div className="benefit-infograph">
                        <Scale style={{width: screenWidth >=768 ? "50%": "90%"}}/>
                    </div>
                </div>

                <div ref={dynamic} className="row-benefit row-reverse row-hidden" >
                    <div className="benefit-infograph">
                        <Dynamic style={{width: screenWidth >=768 ? "50%" : "100%"}}/>
                    </div>
                    <div style={{width: screenWidth > 768 ? "50%" : "100%"}}>
                        <h3 className="feat-head-desc">Fully dynamic</h3>
                        <h1 className="feat-head add-left-margin">Save dev-time, design what matters </h1>
                        <p className="feat-desc add-left-margin"> 
                            APISIX provides Hot updates and Hot plugins, which continuosly update configurations without restarts, saving development time and stress. Health checks, circuit breakers and many more features keep the system balanced at all times.
                        </p>
                    </div>
                </div>

                <div ref={multiplatform} className="row-benefit row-hidden" >
                    <div style={{width: screenWidth > 768 ? "50%" : "100%"}}>
                        <h3 className="feat-head-desc">Multi-platform and protocol</h3>
                        <h1 className="feat-head add-left-margin">Create once, run anywhere</h1>
                        <p className="feat-desc add-left-margin"> 
                            Platform agnostic, no vendor lock-in, APISIX can run from bare-metal to kubernetes. It supports HTTP to gRPC transcoding, websockets, gRPC, Dubbo, MQTT proxy and multiple platforms including ARM64, don’t worry about the lock-in of the infra technology.
                        </p>
                    </div>
                    <div className="benefit-infograph">
                        <Multiplatform style={{width: screenWidth >=768 ? "50%" : "100%"}}/>
                    </div>
                </div>

            </div>
        </>
    );
  }
  
  export default Benefits;
