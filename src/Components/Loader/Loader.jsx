import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const PreLoader = (props) => {
  return (
    <Loader
      style={{ marginLeft: "auto", marginRight: "auto" }}
      type="TailSpin"
      color="#3f51b5"
      height={300}
      width={300}
    />
  );
};

Loader.propTypes = {};

export default PreLoader;
