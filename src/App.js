import React, { Component } from "react";
import PropTypes from "prop-types";
import PicturesApi from "./Utils/api";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import PreLoader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import "./Components/styles.css";

export default class App extends Component {
  static propTypes = {
    gallery: PropTypes.array,
    loading: PropTypes.bool,
    searchQuery: PropTypes.string,
    page: PropTypes.number,
    showModal: PropTypes.bool,
    modalImage: PropTypes.object,
  };

  state = {
    gallery: [],
    loading: false,
    searchQuery: "",
    page: 1,
    showModal: false,
    modalImage: {
      src: "",
      alt: "",
    },
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.searchImages();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  scrollOnLoad() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  searchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    PicturesApi(searchQuery, page)
      .then((images) =>
        this.setState(
          (prevState) => ({
            gallery: [...prevState.gallery, ...images],
            page: prevState.page + 1,
          }),
          this.scrollOnLoad
        )
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  galleryClickHandler = (e) => {
    this.toggleModal();
    this.setState({
      modalImage: { src: e.target.dataset.modal, alt: e.target.alt },
    });
  };

  submitHandler = (query) => {
    this.setState({ searchQuery: query, page: 1, gallery: [] });
  };

  render() {
    const { gallery, loading, showModal, modalImage } = this.state;
    return (
      <div className="App">
        {showModal && (
          <Modal image={modalImage} toggleModal={this.toggleModal} />
        )}
        <SearchBar onSubmit={this.submitHandler} />

        {gallery.length > 0 && (
          <ImageGallery
            images={gallery}
            imagePicker={this.galleryClickHandler}
          />
        )}

        {loading && <PreLoader />}

        {gallery.length > 0 && !loading && (
          <Button clickHandler={this.searchImages} />
        )}
      </div>
    );
  }
}
