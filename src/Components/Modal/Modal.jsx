import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css";

export default class Modal extends Component {
  state = {
    src: this.props.image.src,
    alt: this.props.image.alt,
  };

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
    return (
      <div className="Overlay" onClick={this.overlayClickHandler}>
        <div className="Modal">
          <img src={this.state.src} alt={this.state.alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object,
};
