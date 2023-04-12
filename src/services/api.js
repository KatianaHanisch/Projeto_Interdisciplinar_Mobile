import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-interdisciplinar-backend.vercel.app",
});

export default api;
