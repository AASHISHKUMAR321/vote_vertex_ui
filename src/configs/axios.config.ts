import axios from "axios";
import { BACKEND_API } from "./env.config";

const API = axios.create({
  baseURL: BACKEND_API,
});

export default API;
