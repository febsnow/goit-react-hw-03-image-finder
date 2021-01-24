import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, alt, modal_src }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        data-modal={modal_src}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
