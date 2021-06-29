import React from "react";
import MoviP from "../Image/movv.jpg";
import { Button } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovie } from "../State/ActionState";

function Card() {
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    if (res) {
      dispatch(addMovie(res.data));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        style={{
          height: "400px",
          width: "260px",
          // backgroundColor: "azure",
          borderRadius: "10px",
          margin: "20px",
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.10)",
        }}
      >
        <img
          src={MoviP}
          alt="Movie"
          style={{
            height: "270px",
            width: "260px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div style={{ marginLeft: "10px" }}>
          <div>loading</div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Avengers Infinity war
          </div>
          <div style={{ color: "#bbb", marginBottom: "4px" }}>
            26 April 2020
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

export default Card;
