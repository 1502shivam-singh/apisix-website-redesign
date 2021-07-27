import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "../../css/customTheme.css";
import ArrowAnim from "./components/arrowAnim";

function EndCTA() {

    return (
        <>
            <div className="endcta" style={{padding: "50px 0", background: "#FF90A3", margin: "0 0 -32px 0"}}>
                <div className="endcta-text">
                    <p>Try <span style={{color: "#E8433E"}}>APISIX</span> today 🚀</p>
                </div>
                <div className="endcta-btns">
                    <div className="hero-ctas">
                        <Link
                          to={useBaseUrl("downloads")}
                          className="btn btn-download">
                          Downloads
                        </Link>
                        <ArrowAnim />
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default EndCTA;
