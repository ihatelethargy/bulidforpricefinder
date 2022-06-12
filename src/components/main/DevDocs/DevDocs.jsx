import React from "react";
import { Desktop, Mobile } from "../../common/MediaQuery";
import "./DevDocs.css";

function DevDocs() {
    function githubClick(e) {
        window.location.href = "https://github.com/OpenSourceDankook";
    }
    return (
        <div className="devDocs" id="docs">
            <Desktop>
                <div className="desktopDevDocs">
                    <div className="devDocsHeader">
                        <div className="devDocsTitle">
                            <span>DEV DOCS</span>
                        </div>
                        <div className="devDocsDesc">
                            <span>
                                NFT finder 는 OPENSEA의 OPEN API로 제작되었으며,
                                NFT finder에 기여할 수 있습니다
                            </span>
                        </div>
                    </div>
                    <div className="devDocsBody" onClick={githubClick}>
                        <span>GITHUB</span>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className="mobileDevDocs">
                    <div className="devDocsHeader">
                        <div className="devDocsTitle">
                            <span>DEV DOCS</span>
                        </div>
                        <div className="devDocsDesc">
                            <span>
                                NFT finder 는 OPENSEA의 OPEN API로 제작되었으며,
                                NFT finder에 기여할 수 있습니다
                            </span>
                        </div>
                    </div>
                    <div className="devDocsBody" onClick={githubClick}>
                        <span>GITHUB</span>
                    </div>
                </div>
            </Mobile>
        </div>
    );
}

export default DevDocs;
