import React from "react";
import HLDesign from "../../assets/images/architecture.svg";
import "../../css/customTheme.css";

function Architecture(props) {

    const screenWidth = props.screenWidth;

    return (
        <>
            <div className="arch">
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
