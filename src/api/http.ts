import axios from "axios";

const mexicoApi = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000,
  headers: { "x-access-token": "foobar" },
});

export const getAllUsers = async () =>
  mexicoApi.get("/users").then(({ data }) => data);

export const getAllCities = async () =>
  mexicoApi.get("/cities").then(({ data }) => data);
