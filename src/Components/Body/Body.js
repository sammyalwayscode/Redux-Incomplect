import React from "react";
import HomeCard from "../Card/HomeCard";
// import Card from "../Card/Card";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { addMovie } from "../State/ActionState";

function Body({ view }) {
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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {view.map((el) => (
        <HomeCard key={el.id} q={el} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    view: state.movie.movieDataBase,
  };
};

export default connect(mapStateToProps)(Body);
