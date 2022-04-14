import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const KEY = "967c6f14dacb0ca10f1175f7851a5869";
  

export async function fetchTrendingMovie() {
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`);
    return response.data;
}

export async function fetchMovieById(id) {
    const response = await axios.get(`/movie/${id}?api_key=${KEY}`);
    return response.data;
}

export async function fetchCastById(id) {
    const response = await axios.get(`/movie/${id}/credits?api_key=${KEY}`);
    return response.data;
}

export async function fetchReviewById(id) {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
    return response.data;
}

export async function fetchByQuery(query) {
    const response = await axios.get(`/search/movie?api_key=${KEY}&query=${query}`);
    return response.data;
}


