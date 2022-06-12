import React from "react";
import Header from "../../components/common/Header/Header";
import DetailBody_SW from "../../components/detail/DetailBody/DetailBody_SW.jsx";
import Card from "../../components/detail/Card.jsx";
import { Link } from "react-router-dom";
import "./Detail.css";

function Detail_SW() {
    return (
        <div className="detail">
            <Header />
            <DetailBody_SW />
        </div>
    );
}

export default Detail_SW;
