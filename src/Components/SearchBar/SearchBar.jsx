import React, { Component } from "react";
import { toast } from "react-toastify";
import "../styles.css";

export default class SearchBar extends Component {
  state = {
    value: "",
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    if (this.state.value === "") {
      toast.warn("Введите поисковый запрос");
      this.setState({ value: "" });
      return;
    }
    this.props.onSubmit(this.state.value.toLowerCase().trim());
    this.setState({ value: "" });
  };

  changeHandler = (evt) => {
    const { value } = evt.target;
    this.setState({ value: value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeHandler}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
