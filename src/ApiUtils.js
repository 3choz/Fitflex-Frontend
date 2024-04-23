import axios from 'axios';
import { TestApiModel } from './models/TestApiModel';
import { ProgramModel } from './models/ProgramModel';
import { ResponseResultDTO } from './models/ResponseResultDTO';

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
 * Create a new user
 * @param {UserModel} userModel The user to create
 * @param {string} password The user's password
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user was created successfully
 */
export const createUser = function(userModel, password){
  return axios.post(`${API_BASE}/createuser`, {
    userEmail: userModel.getEmail(),
    userPassword: password,
    userFirstName: userModel.getFirstName(),
    userLastName: userModel.getLastName(),
    userDOB: userModel.getDateOfBirth(),
    userPhone: userModel.getPhoneNumber(),
    userSex: userModel.getSex()
  }).then(response => {
    const isSuccessful = response.data["User Created"];

    // Check if data["Error Message"] is undefined
    let errorMessage = "";
    if(response.data["Error Message"] !== undefined){
      errorMessage = response.data["Error Message"];
    }

    return new ResponseResultDTO(isSuccessful, null, errorMessage)
  })
  .catch(error => {console.error("Error creating user: ", error)});
}

/**
 * Login user
 * @param {string} email The user's email
 * @param {string} password The user's password
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user was logged in successfully
 */
export const loginUser = function(email, password){
  return axios.post(`${API_BASE}/login`, {
    userEmail: email,
    userPassword: password
  })
  .then(response => {
    const isSuccessful = response.data["user logged in"];

    // Check if data["Error Message"] is undefined
    let errorMessage = "No error message provided.";
    if(response.data["Error Message"] !== undefined){
      errorMessage = response.data["Error Message"];
    }

    return new ResponseResultDTO(isSuccessful, null, errorMessage)
  })
  .catch(error => {console.error("Error logging in user: ", error)})
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