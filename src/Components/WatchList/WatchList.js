import React from "react";
import Card from "../Card/Card";

function WatchList() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "darkred",
          height: "200px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>Summary</div>
          <div>0</div>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>Total WatchList</div>
          <div>0</div>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div>Total Cost</div>
          <div>0</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default WatchList;
