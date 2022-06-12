import React from "react";
import "./UserDocs.css";
import { Desktop, Mobile } from "../../common/MediaQuery";

function UserDocs() {
  const walletInfo =
    "주 해킹 요소인 가상 지갑을 이용하는 대신 가상 지갑 주소를 사용";
  const nftInfo =
    "블록기술을 이용해서 디지털 자산의 소유주를 증명하는 가상의 토큰 대상이 되는 그림, 영상 등의 디지털 파일을 가리키는 주소를 토큰안에 담음으로써 일종의 가상 진품 증명서";
  return (
    <div className="userDocs">
      <Desktop>
        <div className="desktopUserDocs">
          <div className="userDocsHeader">
            <div className="userDocsTitle">
              <span>USER DOCS</span>
            </div>
            <div className="userDocsDesc">
              <span>NFT finder 는 사용자 가이드를 제공하고 있습니다.</span>
            </div>
          </div>
          <div className="userDocsBody">
            <div className="cardItem">
              <div className="cardTitle">
                <h2>WALLET INFO</h2>
              </div>
              <div className="cardDetail">{walletInfo}</div>
            </div>
            <div className="logoWrapper"></div>
            <div className="cardItem">
              <div className="cardTitle">
                <h2>NFT INFO</h2>
              </div>
              <div className="cardDetail">{nftInfo}</div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="mobileUserDocs">
          <div className="userDocsHeader">
            <div className="userDocsTitle">
              <span>USER DOCS</span>
            </div>
            <div className="userDocsDesc">
              <span>NFT finder 는 사용자 가이드를 제공하고 있습니다.</span>
            </div>
          </div>
          <div className="userDocsBody">
            <div className="cardItem">
              <h6>WALLET INFO</h6>
              <div className="cardDetail">{walletInfo}</div>
              <br />
              <br />
              <h6>NFT INFO</h6>
              <div className="cardDetail">{nftInfo}</div>
            </div>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default UserDocs;
