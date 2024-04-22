import axios from 'axios';
import { TestApiModel } from './models/TestApiModel';

const API_BASE = "https://cmsc495-capstone-web-server.azurewebsites.net/api";

/**
 * 
 * @returns {Promise<TestApiModel>} A promise that resolves to a TestApiModel object
 */
export const testApiEndpoint = function() {
  return axios.get(`${API_BASE}/test`)
    .then(response => new TestApiModel(response.data.message, response.data.connected_to_backend))
    .catch(error => {
      console.error("Error fetching items: ", error);
    });
}