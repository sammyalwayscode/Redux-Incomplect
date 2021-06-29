import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#123456",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          color: "#fff",
        }}
      >
        <div
          style={{ marginTop: "10px", fontWeight: "bold", fontSize: "24px" }}
        >
          <Link to="/"> MOVIE</Link>
        </div>
        <div
          style={{ marginTop: "10px", fontWeight: "bold", fontSize: "18px" }}
        >
          <Link to="/watchlist">
            WatchList: <strong>0</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
