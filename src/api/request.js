import axios from "axios";

// create
axios.create({
  headers: {
    "Content-Type" : "application/json",
  },
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
})

// interceptor
axios.interceptors.request.use(() => {

})

// http Request
const Get = (url) => {
  return axios.get(url);
}

const Post = (url, payload) => {
  return axios.post(url, payload);
}

const Put = (url, payload) => {
  return axios.put(url, payload);
}

const Delete = (url) => {
  return axios.delete(url);
}


export {Get, Post, Put, Delete};
