import React, { Component } from "react";
import PropTypes from "prop-types";
import PicturesApi from "./utils/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import PreLoader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import "./components/styles.css";

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

  imageClickhandler = (src, alt) => {
    this.toggleModal();
    this.setState({
      modalImage: { src, alt },
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
            imageClickhandler={this.imageClickhandler}
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
