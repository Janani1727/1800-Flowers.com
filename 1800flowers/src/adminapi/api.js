import axios from "axios";

export const getProducts = () => {
  return axios.get(`http://localhost:8080/admin`);
};

export const addProducts = (data) => {
  return axios.post(`http://localhost:8080/admin`, {
    name: data.name,
    img: data.img,
    price: data.price,
  });
};

export const delProducts = (id) => {
  return axios.delete(`http://localhost:8080/admin/${id}`);
};
