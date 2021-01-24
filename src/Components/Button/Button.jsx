import React from "react";
import "../styles.css";

const Button = ({ clickHandler }) => {
  return (
    <button
      className="Button"
      type="button"
      onClick={clickHandler}
      // onClick={() => {
      //   window.scrollTo({
      //     top: document.documentElement.scrollHeight,
      //     behavior: "smooth",
      //   });
      // }}
    >
      Load more
    </button>
  );
};

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });

export default Button;
