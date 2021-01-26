import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyDownHandler);
  }

  keyDownHandler = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  overlayClickHandler = (e) => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const {src, alt} = this.props.image
    return (
      <div className="Overlay" onClick={this.overlayClickHandler}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object,
};
