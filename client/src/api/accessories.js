import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getAccessories = async () => {
  const response = await API.get("/accessories");
  return response.data;
};