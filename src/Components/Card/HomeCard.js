import React from "react";
import MoviP from "../Image/movv.jpg";
import { Button } from "antd";
import "antd/dist/antd.css";

function HomeCard({ q }) {
  return (
    <div>
      <div
        style={{
          // height: "400px",
          width: "260px",
          // backgroundColor: "azure",
          borderRadius: "10px",
          margin: "20px",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <img
          src={q.image}
          alt="Movie"
          style={{
            height: "270px",
            width: "260px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <div style={{ marginLeft: "10px" }}>
          <div> {q.category} </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            {q.title}
          </div>
          <div style={{ color: "#bbb", marginBottom: "4px" }}>
            {q.description}
          </div>
          <div>
            <Button type="primary">Add To WatchList</Button>
            <Button style={{ marginLeft: "9px" }} type="danger">
              Remove{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
