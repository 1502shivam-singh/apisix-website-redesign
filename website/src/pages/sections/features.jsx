import React, { useState, useRef, useEffect } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import gsap from "gsap"
import "../../css/customTheme.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dashboard from "../../assets/images/apisix-dashboard.png";
import Snippet from "../../assets/images/code-sample.png";
import Plugin from "../../assets/images/pluginised.png";
import ArrowAnim from "./components/arrowAnim";

function Features() {
    const dashboardDiv = useRef(null);
    const userfDiv = useRef(null);
    const pluginDiv = useRef(null);
    const triggerDiv = useRef(null);
    const triggerDivCol = useRef(null);
    const pinDiv = useRef(null);
    const img1 = useRef(null);
    const img1col = useRef(null);
    const img2 = useRef(null);
    const img2col = useRef(null);
    const img3 = useRef(null);
    const img3col = useRef(null);
    const featPin = useRef(null);

    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const testRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' && window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(typeof window !== 'undefined' && window.innerWidth);

    let strokeAnimFeat = {
        strokeDasharray: 1000,
        strokeDashoffset: 1002
    }
    
    function mouseOver() {
        console.log("Enter...........");
        console.log(pathRef2.current);

        gsap.to([pathRef2.current],{
            strokeDashoffset: 970,
            duration: 0.4
        });
        gsap.to([pathRef1.current],{
            stroke: "#9b9b9b",
            duration: 0.4
        });
        gsap.to([pathRef2.current],{
            stroke: "#9b9b9b",
            duration: 0.4
        });
    }

    function mouseOut() {
        gsap.to([pathRef2.current],{
            strokeDashoffset: 1002,
            duration: 0.4
        });
        gsap.to([pathRef1.current],{
            stroke: "black",
            duration: 0.4
        });
        gsap.to([pathRef2.current],{
            stroke: "black",
            duration: 0.4
        });
    }

    useEffect(()=>{
        setScreenHeight(window.innerHeight);
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', resizeEvent, false);

        function resizeEvent(event) {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        }

        return () => {
            window.removeEventListener('resize', resizeEvent);
        }
    }, [])

    useEffect(() => {
        const value = window.innerHeight*2;
        const popupValue = window.innerHeight-30;
        console.log(value);
        
        let tl;
        console.log("ScreenWidth: "+ window.innerWidth);
        if(window.innerWidth > 1100) {
            tl = gsap.timeline({
                defaults: {
                    ease: "linear" 
                },
                scrollTrigger: {
                    id: "feat",
                    trigger: triggerDiv.current,
                    start: "top top",
                    pin: pinDiv.current,
                    scrub: 1.5,
                    end: value+"px"
                }
            });
    
            tl.to(img1.current,{
                opacity: 0,
            })
            .to(img2.current,{
                opacity: 1,
            })
            .to(img2.current,{
                opacity: 0,
            })
            .to(img3.current,{
                opacity: 1, 
            });
        } else {
            console.log("Mobile")

            gsap.to(img1col.current,{
                scrollTrigger: {
                    id: "feat1",
                    trigger: img1col.current,
                    start: "top "+(popupValue)+"px",
                    ease: "linear"
                },
                opacity: 1,
                y: -40,
            });
            gsap.to(img2col.current,{
                scrollTrigger: {
                    id: "feat2",
                    trigger: img2col.current,
                    start: "top "+(popupValue)+"px",
                    ease: "linear"
                },
                opacity: 1,
                y: -50
            });
            gsap.to(img3col.current,{
                scrollTrigger: {
                    id: "feat3",
                    trigger: img3col.current,
                    start: "top "+(popupValue)+"px",
                    ease: "linear"
                },
                opacity: 1,
                y: -50
            });
        }

        return ()=>{
            ScrollTrigger.getAll().forEach(t => t.kill());
            if(window.innerWidth > 1100) {
                tl.pause(0).kill(true);
            }
        }
    }, []);

    return (
        <>
            <div ref={featPin} className="feat-top" style={{padding: "50px 0"}}>
                <h3 className="feat-head-desc">Why APISIX</h3>
                <h1 className="feat-head add-left-margin">Reduce time fighting bugs, focus on designing world-class systems</h1>
                <p className="feat-desc add-left-margin">
                    Apache APISIX is the first open source Low-Code API gateway. It comes with a simple, easy-to-use built-in Dashboard and a powerful and flexible interface for developers to use 
                </p>
            </div>

            <div className="feat-container-d" ref={triggerDiv}>
                        {/* Desktop */}
                <div className="left-pane" style={{width: "50%", height: "100%"}}>
                            
                    <div ref={dashboardDiv} style={{position: "relative"}}>
                        <div className="text-div" style={{height: "100vh"}}>
                            <h2 className="i-text add-left-margin-feat">Easy-to-use dashboard</h2>
                            <p className="i-text-desc add-left-margin-feat">
                                The Apache APISIX Dashboard is designed to make it as easy as possible for users to operate Apache APISIX through a frontend interface. It’s opensource and ever evolving feel free to contribute.
                            </p>
                            <div className="hero-ctas add-left-margin-feat" style={{bottom: "34%"}}>
                                <Link
                                  to={useBaseUrl("downloads")}
                                  className="btn btn-download">
                                  Downloads
                                </Link>
                                <ArrowAnim />
                            </div>
                        </div>
                    </div>

                    <div ref={userfDiv} style={{position: "relative"}}>
                        <div className="text-div" style={{height: "100vh"}}>
                            <h2 className="i-text add-left-margin-feat" style={{top: "34%"}}>User flexible</h2>
                            <p className="i-text-desc add-left-margin-feat">
                                The APISIX dashboard is flexible to the user demand, providing option to use visual tools of “drag and connect” or write in custom modules as per your needs.
                            </p>
                        </div>
                    </div>

                    <div ref={pluginDiv} style={{position: "relative"}}>
                        <div className="text-div" style={{height: "100vh"}}>
                            <h2 className="i-text add-left-margin-feat">Pluginised workflow</h2>
                            <p className="i-text-desc add-left-margin-feat">
                                No need to reinvent the wheel again and again. Use inbuilt plugins to create high performance systems in tight deadlines. For something custom, there is option of building custom plugins. 
                            </p>
                        </div>
                    </div>

                </div>

                <div ref={pinDiv} className="right-pane" style={{width: "50%", height: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <img ref={img1} className="i-image imagePosition" src={Dashboard} alt=""/>
                    <img ref={img2} className="n-image imagePosition" src={Snippet} alt=""/>
                    <img ref={img3} className="n-image imagePosition" src={Plugin} alt=""/>
                </div>
            </div>

            <div className="feat-container-m" ref={triggerDivCol} style={{width: "100%"}}>
                        {/* Mobile */}
                <div ref={img1col} className="hiddenDiv-col" style={{height: "fit-content", padding: "0 0 40px 0"}}>
                    <div style={{position: "relative", height: "100%"}}>
                    <h2 className="add-left-margin" style={{width: "fit-content"}}>Easy-to-use dashboard</h2>
                    <img className="i-image-col" src={Dashboard} alt=""/>
                        <p className="i-text-desc-col add-left-margin">
                            The Apache APISIX Dashboard is designed to make it as easy as possible for users to operate Apache APISIX through a frontend interface. It’s opensource and ever evolving feel free to contribute.
                        </p>
                        <div className="hero-ctas add-left-margin" style={{width: "fit-content"}}>
                            <Link
                              to={useBaseUrl("downloads")}
                              className="btn btn-download">
                              Downloads
                            </Link>
                            <ArrowAnim />
                        </div>
                    </div>
                </div>

                <div ref={img2col} className="hiddenDiv-col" style={{height: "fit-content", padding: "20px 0"}}>
                    <h2 className="add-left-margin" style={{width: "fit-content"}}>User flexible</h2>
                    <img className="i-image-col" src={Snippet} alt=""/>
                    <p className="i-text-desc-col add-left-margin">
                        The APISIX dashboard is flexible to the user demand, providing option to use visual tools of “drag and connect” or write in custom modules as per your needs.
                    </p>
                </div>

                <div ref={img3col} className="hiddenDiv-col" style={{height: "fit-content", padding: "20px 0"}}>
                    <h2 className="add-left-margin" style={{width: "fit-content"}}>Pluginised workflow</h2>
                    <img className="i-image-col" src={Plugin} alt=""/>
                    <p className="i-text-desc-col add-left-margin">
                        No need to reinvent the wheel again and again. Use inbuilt plugins to create high performance systems in tight deadlines. For something custom, there is option of building custom plugins. 
                    </p>
                </div>

            </div>
        </>
    );
  }
  
  export default Features;
