import axios from 'axios';
import { TestApiModel } from './models/TestApiModel';
import { ProgramModel } from './models/ProgramModel';

const API_BASE = "https://cmsc495-capstone-web-server.azurewebsites.net/api";

/**
 * Get the data from the test endpoint
 * @returns {Promise<TestApiModel>} A promise that resolves to a TestApiModel object
 */
export const testApiEndpoint = function() {
  return axios.get(`${API_BASE}/test`)
    .then(response => new TestApiModel(response.data.message, response.data.connected_to_backend))
    .catch(error => {
      console.error("Error fetching items: ", error);
    });
}

/**
 * Get the programs from the getPrograms endpoint
 * @returns {Promise<ProgramModel[]>} A promise that resolves to an array of Program objects
 
 */
export const getPrograms = function(){
  return axios.get(`${API_BASE}/getPrograms`)
    .then(response => response.data.map(program => 
      new ProgramModel(program.prgmID, program.prgmName, program.prgmDescription, program.prgmDifficulty)))
    .catch(error => {
      console.error("Error fetching programs: ", error);
    });
}