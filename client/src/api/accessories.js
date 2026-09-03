import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getAccessories = async () => {
  const response = await API.get("/accessories");
  return response.data;
};