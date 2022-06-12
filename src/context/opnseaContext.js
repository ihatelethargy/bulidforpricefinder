import { createContext, useEffect, useState } from "react";
import { nft, nftFloor } from "../api/api";

const OpenseaContext = createContext();

const OpenseaContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [projectName, setProjectName] = useState("");

    const [nftData, setNftData] = useState({
        status: "idle",
        data: null,
    });

    const [priceInfo, setPriceInfo] = useState({
        status: "idle",
        data: null,
    });

    const getNftData = async () => {
        let res = await nft();
        try {
            setNftData({
                status: "pending",
                data: null,
            });
            setNftData({
                status: "resolved",
                data: res,
            });
        } catch (e) {
            setNftData({
                status: "rejected",
                data: null,
            });
        }
    };

    const getPriceInfo = async (projectName) => {
        let res = await nftFloor();
        try {
            setPriceInfo({
                status: "pending",
                data: null,
            });
            setPriceInfo({
                status: "resolved",
                data: res,
            });
        } catch (e) {
            setPriceInfo({
                status: "rejected",
                data: null,
            });
        }
    };

    useEffect(() => {
        try {
            if (projectName) {
                getPriceInfo(projectName);
            }
            getNftData();
            setLoading(false);
        } catch (e) {
            alert(e);
        }
    }, []);

    return (
        <OpenseaContext.Provider
            value={{
                loading,
                nftData,
                priceInfo,
                setProjectName,
            }}
        >
            {children}
        </OpenseaContext.Provider>
    );
};

export { OpenseaContextProvider, OpenseaContext };
