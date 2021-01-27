import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt, modal_src, showModal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => showModal(modal_src, alt)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
