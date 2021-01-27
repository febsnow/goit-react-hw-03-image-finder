import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, imageClickhandler }) => {
  return (
    <ul className="ImageGallery" >
      {images.map((image) => {
        return (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            modal_src={image.largeImageURL}
            showModal={imageClickhandler}/>
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
