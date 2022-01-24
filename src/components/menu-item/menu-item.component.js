import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="menu-item"
      >
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">ShopNow</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
