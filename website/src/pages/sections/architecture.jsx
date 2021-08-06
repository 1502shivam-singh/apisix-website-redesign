import React, { useEffect } from "react";
import HLDesign from "../../assets/images/infographs/Architecture_compress.svg";
import "../../css/customTheme.css";
import gsap from "gsap";
import Pattern from "../../assets/images/PatternGrouped.svg";

function Architecture(props) {

    const screenWidth = props.screenWidth;

    useEffect(() => {
        let strokePaths = []
        for (let i=1; i<28; i++) {
            strokePaths.push(".PatternGrouped_svg__p"+i);
        } 

        let tlStroke = gsap.timeline({
            paused: true,
            defaults: { // children inherit these defaults
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
            },
        });

        tlStroke.fromTo(strokePaths, {
            strokeDashoffset: 10000
        }, {
            strokeDashoffset: 0,
            duration: 3,
            stagger: "0.2",
            ease: "power2.inOut",
        });

        let observer = new IntersectionObserver(onIntersection, {
            root: null,
            threshold: 0.4,
        })
          
        function onIntersection(entries, opts){
            entries.forEach(entry =>  {
                if (entry.isIntersecting) {
                    tlStroke.paused(false);
                    console.log(opts);
                } else {
                    tlStroke.paused(true);
                }
            }
          );
        }
          
        observer.observe( document.querySelector('.arch'));
        
        return () => {
            tlStroke.pause(0).kill(true);
            observer.disconnect();
        }
    }, []);

    return (
        <>
            <div className="arch">
                <div style={{position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", height: "120vh"}}>
                    <Pattern style={{width: "100%", strokeWidth: "3", zIndex: "-10", opacity: "0.25", strokeDasharray: "10000"}}/>
                </div>
                <div>
                    <h3 className="arch-head">Building for large-scale, high value systems</h3>
                </div>
                <div className="arch-subtitle">
                    <p>APISIX lets you build Cloud-Native Microservices API gateways, delivering the ultimate performance, security, open source and scalable platform for all your APIs and microservices.</p> 
                </div>
                <div className="arch-card" style={{position: "relative"}}>
                    <div className="hldesign">
                        <HLDesign className="hldesign-graphic"/>
                    </div>
                    <div className="arch-card-caption">
                        <p style={{width: screenWidth >=768 ? "50%" : "90%"}}>Apache APISIX is based on Nginx and etcd. Compared with traditional API gateways, APISIX has dynamic routing and plug-in hot loading</p>
                    </div>
                    <div className="arch-card-border">

                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Architecture;
