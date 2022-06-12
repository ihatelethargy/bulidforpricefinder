import React, { useState } from "react";
import axios from "axios";
import "./DetailBody.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "reactstrap";
import Card from "../Card";

function DetailBody_SW() {
    const [walletAddress, setWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [assets, setAssets] = useState([]);
    const [fetch, setFetching] = useState(false);
    const fetchWalletInfo = () => {
        setLoading(true);
        axios
            .get(
                `https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&limit=20&include_orders=false`
            )
            .then((res) => {
                setAssets(res.data.assets);
                setLoading(false);
            });
    };
    
    const firstFetch=()=>{
        setFetching(true);
        setLoading(true);
        axios
            .get(
                `https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20&include_orders=false`
            )
            .then((res) => {
                setAssets(res.data.assets);
                setLoading(false);
            });
    }
    
    console.log(assets, "##");
    return (
        <div className="DetailBody">
            <div className="search">
                <div className="explain">
                    <div className="explainText">
                        <span>NFT 지갑 주소를 입력하세요.</span>
                    </div>
                </div>
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="search"
                        name="search"
                        id="search"
                        onChange={(e) =>
                            setWalletAddress(e.currentTarget.value)
                        }
                        required
                    />
                    <label htmlFor="search" className="form__label">
                        Search
                    </label>
                    <div onClick={fetchWalletInfo}>
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </div>
                    {!fetch&&<div>{firstFetch()}</div>}
                </div>
                {loading && <Spinner />}
                {assets.map((assetData) => {
                    return <Card assetData={assetData} />;
                })}
            </div>
        </div>
    );
}

export default DetailBody_SW;
