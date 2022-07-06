import axios from "axios";

export const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

const server = axios.create({ baseURL });
const { interceptors: { request, response } } = server

request.use(
  (config) => {

    config.headers = {
      Authorization: `Bearer yourToken`,
    };

    return config;
  },

);

response.use(
  (response) => {
    return response
  },

  (error) => {
    const { response: { data: { message } } } = error;
    console.log(message);
    //handle errors sent by the server
  })


export default server;