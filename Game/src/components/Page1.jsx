import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">
          <span className="heart">
            
          </span>
          Will you want to play Truth or Dare?
          <span className="heart">
            <FaHeart />
          </span>
        </h1>
        <p className="subheading">
          Not asking though 😅
        </p>
        <button className="btn" onClick={() => navigate("/choose")}>Let's Play</button>
      </div>
    </div>
  );
};

export default Page1;
