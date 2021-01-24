import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, imagePicker }) => {
  return (
    <ul className="ImageGallery" onClick={imagePicker}>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            modal_src={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagePicker: PropTypes.func.isRequired,
};

export default ImageGallery;
