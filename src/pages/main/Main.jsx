import React, { useContext } from "react";
import { OpenseaContext } from "../../context/opnseaContext";
import Header from "../../components/common/Header/Header";
import Banner from "../../components/main/Banner/Banner";
import UserDocs from "../../components/main/UserDocs/UserDocs";
import DevDocs from "../../components/main/DevDocs/DevDocs";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            <Header />
            <Banner />
            <UserDocs />
            <DevDocs />
        </div>
    );
}

export default Main;
