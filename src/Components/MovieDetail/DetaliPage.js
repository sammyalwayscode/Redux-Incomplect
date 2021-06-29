import React from "react";
import Deta from "../Image/movv.jpg";

function DetaliPage() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <img src={Deta} alt="pix" style={{ width: "300px" }} />
        <div style={{ width: "600px", backgroundColor: "darkcyan" }}>
          <div>Title</div>
          <div>Discription</div>
        </div>
      </div>
    </div>
  );
}

export default DetaliPage;
