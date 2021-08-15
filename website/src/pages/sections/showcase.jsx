import React from "react";
import "../../css/customTheme.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Showcase = () => {
    const { siteConfig } = useDocusaurusContext();
    if (!(siteConfig.customFields.showcases || []).length) {
      return null;
    }
    const showcases = siteConfig.customFields.showcases.map((user) => (
      <a href={user.infoLink} key={user.infoLink} target="_blank">
        <img className="user-logo" src={'https://cdn.jsdelivr.net/gh/1502shivam-singh/apisix-website-redesign@main/website/static/img/' +  user.image} alt={user.caption} />
      </a>
    ));
    const middleIndex = (showcases.length / 2).toFixed(0);
  
    return (
      <div className="hero text--center showcase">
        <div className="container">
          <p>
          A wide variety of Companies and Organizations use APISIX for Research, Production and Commercial products
            <br />&nbsp;
            <a
              href="https://github.com/apache/apisix/blob/master/powered-by.md"
              target="_blank"
              rel="noopener"
            >
              <u>Add your company</u>
            </a>
          </p>
          <div className="user-logos">
            <div className="logo-row">
              <span className="user-logos-container">
                <section>
                  <span>{showcases.slice(0, middleIndex)}</span>
                  <span>{showcases.slice(0, middleIndex)}</span>
                </section>
              </span>
            </div>
            <div className="logo-row">
              <span className="user-logos-container">
                <section>
                  <span>{showcases.slice(middleIndex, showcases.length)}</span>
                  <span>{showcases.slice(middleIndex, showcases.length)}</span>
                </section>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Showcase;
