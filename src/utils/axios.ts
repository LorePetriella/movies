import axios from "axios";

const fireBase = axios.create({
  baseURL: "https://movies-tp-default-rtdb.firebaseio.com/",
});

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a11ec9f0359881b08ee61a8e6c0f4f55",
    // language: "en",
  },
});

export { fireBase, apiMovies };
