import { url } from "./config.js";
import axios from "axios";

export const nft = async () => {
    try {
        const res = await axios.get(`${url}`);
        const data = res.data;
        // console.log(data, "resolved nft Data");
        return data;
    } catch (e) {
        alert(e);
    }
};

export const nftFloor = async (projectName) => {
    try {
        const res = await axios.get(
            `https://api.opensea.io/api/v1/collection/${projectName}/stats`
        );
        const data = res.data;
    } catch (e) {
        console.log(e);
    }
};
