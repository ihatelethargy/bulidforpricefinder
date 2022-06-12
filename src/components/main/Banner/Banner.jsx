import React from "react";
import "./Banner.css";
import { Desktop, Mobile } from "../../common/MediaQuery";

function Banner() {
    return (
        <div className="Banner">
            <div className="mainSlogan">
                <Desktop>
                    <div className="desktop">
                        <span id="title">
                            OPENSEA PRICE FINDER <br/>
                        </span>
                        <span id="explain">오픈API를 통해, 사용자에게 NFT 정보를 제공합니다.</span>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="mobile">
                        <span id="title">
                            OPENSEA PRICE FINDER <br/>
                        </span>
                        <span id="explain">오픈API를 통해,</span>
                        <span id="explain">사용자에게 NFT 정보를 제공합니다.</span>
                    </div>
                </Mobile>
            </div>
        </div>
    );
}

export default Banner;
