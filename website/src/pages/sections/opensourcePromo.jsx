import React from "react";
import GitHub from "../../assets/icons/github-logo.svg";
import YtPromo from "../../assets/videos/apisix.mp4";
import OssCanvas from "./components/ossCanvas"
import "../../css/customTheme.css";

function OpensourcePromo(props) {

    return (
        <>
            <div className="ossPromotion">
                <div className="docs-promo">
                    <div className="docs-promo-text">
                        <h3 className="docs-promo-head">Learn from developers</h3>
                        <div className="docs-promo-subtitle">
                            <p>Want to learn APISIX usage, but don’t know where to start. Check out our <a style={{color: "#e8433e"}} href="$">docs.</a></p> 
                            <p>Like visual information, check out our <a style={{color: "#e8433e"}} href="$">Youtube channel</a> for detailed tutorials. Subscribe for more.</p> 
                        </div>
                    </div>
                    <div className="docs-promo-video">
                        <video preload="none" src={YtPromo} loading="lazy" autoPlay={true} poster="" muted={true} loop={true} width="100%" height="100%" controls></video>
                    </div>
                </div>
            
                <div className="oss-promo">
                    <div className="oss-promo-text">
                        <h3 className="oss-promo-head">Be a part of building APISIX</h3>
                        <div className="oss-promo-subtitle" style={{color: "rgb(199, 199, 199)"}}>
                            <p>APISIX is opensource and ever-growing. Contributors are always welcome. Reach out to us on GitHub</p>
                            <div style={{display: "flex", fontSize: "0.95rem"}}>
                                <GitHub style={{width: "20px", margin: "0 10px 0 0"}} />
                                <a href="%">Check us out</a>
                            </div>
                        </div>
                    </div>
                    <div className="oss-promo-infograph">
                        <OssCanvas/>
                    </div>                    
                </div>
            </div>
        </>
    );
  }
  
  export default OpensourcePromo;
