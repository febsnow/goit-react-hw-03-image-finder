import axios from "axios";

export default function getPictures(query, page) {
  const URL = "https://pixabay.com/api/";
  const key = "20000566-16ad290e26d22769e71a22f3e";
  const per_page = 12;
  return axios
    .get(
      `${URL}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}
`
    )
    .then((response) => response.data.hits);
}
