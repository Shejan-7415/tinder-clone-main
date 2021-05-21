import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-back-stack.herokuapp.com",
});

export default instance;
