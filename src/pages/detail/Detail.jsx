import React from "react";
import Header from "../../components/common/Header/Header";
import DetailBody from "../../components/detail/DetailBody/DetailBody.jsx";
import { Link } from "react-router-dom";
import "./Detail.css";

function Detail() {
  return (
    <div className="detail">
      <Header />
      <DetailBody />
    </div>
  );
}

export default Detail;
