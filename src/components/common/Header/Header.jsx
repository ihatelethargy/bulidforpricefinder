import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Desktop, Mobile } from "../MediaQuery.jsx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
    function homeClick(e) {
        window.location.replace("/");
    }
    function detailClick(e) {
        window.location.href = "/detail";
    }
    function detailSWClick(e) {
        window.location.href = "/detail_SW";
    }
    function docsClick(e) {
        window.location.replace("/#docs");
    }

    const [isOpen, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu((isOpen) => !isOpen);
        var header = document.getElementById("moblie_header");
        if (isOpen) {
            header.style.height = "4vh";
        } else {
            header.style.height = "20vh";
        }
    };

    return (
        <>
            <Desktop>
                <div className="header">
                    <div className="title" onClick={homeClick}>
                        <span>OpenSea Price Finder</span>
                    </div>
                    <div className="menuWrapper">
                        <div className="menuItem" onClick={detailSWClick}>
                            <span>Search Wallet</span>
                        </div>
                        <div className="menuItem" onClick={detailClick}>
                            <span>Price Finder </span>
                        </div>
                        <div className="menuItem" onClick={docsClick}>
                            <span>Docs</span>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Mobile>
                <div className="header" id="moblie_header">
                    <div
                        className={isOpen ? "show-menuWrapper" : "menuWrapper"}
                    >
                        <div
                            className="menuItem"
                            id="top"
                            onClick={detailSWClick}
                        >
                            <span>Search Wallet</span>
                        </div>
                        <div className="menuItem" onClick={detailClick}>
                            <span>Price Finder </span>
                        </div>
                        <div className="menuItem" onClick={docsClick}>
                            <span>Docs</span>
                        </div>
                    </div>
                    <div className="show-menu">
                        <div className="title" onClick={homeClick}>
                            <span>OpenSea Price Finder</span>
                        </div>
                        <div className="bar" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </Mobile>
        </>
    );
}

export default Header;
