import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './Page2.css';

const Page2 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDareClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOptionClick = (option) => {
    if (option === "Truth") {
      navigate("/truth");
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">
          <span className="heart">
            <FaHeart />
          </span>
          Truth or Dare
          <span className="heart">
            <FaHeart />
          </span>
        </h1>
        <p className="subheading">Choose fast 🔫</p>

        <div className="options">
          <button className="btn truth" onClick={() => handleOptionClick("Truth")}>
            <BsFillCheckCircleFill className="icon" />
            Truth
          </button>
          <button className="btn dare" onClick={handleDareClick}>
            <MdError className="icon" />
            Dare
          </button>
        </div>

        {/* Dare Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <p>Shi me?</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2;
