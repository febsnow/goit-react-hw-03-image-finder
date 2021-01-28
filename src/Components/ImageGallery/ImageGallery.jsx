import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, imageClickHandler }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            modal_src={image.largeImageURL}
            showModal={imageClickHandler}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageClickHandler: PropTypes.func.isRequired,
};

export default ImageGallery;
