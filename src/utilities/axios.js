import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ2OWYxZmU0Yjg4MWFmNTdlZmY5NjE1ZTQwZTJjNSIsInN1YiI6IjYyODNhNmQ1ZjVjODI0MDA2NmUyYjA3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SV5rZ9bNr62oCH-1F4jQ5uQpKmUakxAUDt-ef6jjmEo";

const http = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default http;
