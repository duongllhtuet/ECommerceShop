import React, { useContext, useEffect, useState } from "react";
import "./Comment.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({ setShowComment, commentData }) => {
  const { url, token } = useContext(StoreContext);

  const [rating, setRating] = useState({
    comment: "",
    rate: 5,
  });

  const comment = async (event) => {
    event.preventDefault();

    let ratingData = {
      comment: rating.comment,
      rating: rating.rate,
    };

    try {
      let response = await axios.post(
        `${url}/api/product/${commentData._id}`,
        ratingData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setShowComment(false);
      } else {
        toast.error("Failed to post comment.");
      }
    } catch (error) {
      toast.error("An error occurred while posting the comment.");
      console.error("Error posting comment:", error);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "rate") {
      if (value < 1) {
        value = 1;
      }
      if (value > 5) {
        value = 5;
      }
    }

    setRating((rating) => ({ ...rating, [name]: value }));
  };

  const handlePopupClick = (event) => {
    if (event.target.className === "login-popup") {
      setShowComment(false);
    }
  };

  return (
    <div className="login-popup" onClick={handlePopupClick}>
      <form
        onSubmit={comment}
        className="login-popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close-button"
          style={{
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            position: "absolute",
            backgroundColor: "transparent",
            top: "2px",
            right: "2px",
            color: "#00000078",
            cursor: "pointer",
          }}
          onClick={() => setShowComment(false)}
        >
          x
        </button>
        <div className="login-popup-inputs">
          <input
            required
            name="comment"
            onChange={onChangeHandler}
            value={rating.comment}
            type="text"
            placeholder="comment"
          />
          <input
            required
            name="rate"
            onChange={onChangeHandler}
            value={rating.rate}
            type="number"
            placeholder="rate"
          />
        </div>
        <button type="submit">Rating</button>
      </form>
    </div>
  );
};

export default Comment;
