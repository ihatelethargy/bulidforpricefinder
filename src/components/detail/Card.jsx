import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Card.css";

function Card({ assetData }) {
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 });
        return isDesktop ? children : null;
      };
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 });
        return isMobile ? children : null;
      };
      const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 });
        return isNotMobile ? children : null;
      };
    
    return (
        <>
          <Desktop>
            <a href={assetData.external_link}>
              <div class="cardParent">
                <div class="card">
                    <img src={assetData.image_preview_url} />
                </div>
              </div>
            </a>
          </Desktop>
          <Mobile>
          <a href={assetData.external_link}>
            <div class="cardParent">
              <div class="cardMobile">
                  <img src={assetData.image_preview_url} />
              </div>
            </div>
            </a>
          </Mobile>
        </>
    );
}

export default Card;
