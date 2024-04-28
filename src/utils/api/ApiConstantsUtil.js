import { ResponseResultDTO } from "../../models/ResponseResultDTO";

export const API_BASE = "https://cmsc495-capstone-web-server.azurewebsites.net/api";

export const DATABASE_OPERATION_RESULT_KEY = "Database Operation";

export const ERROR_MESSAGE_KEY = "Error Message";

export const DEFAULT_ERROR_MESSAGE = "No error message provided.";

/**
 * Create an endpoint for the API
 * @param {string} endpoint (ex: login)
 * @returns {string} (ex: apiUrl/api/login)
 */
export const createEndpoint = (endpoint) => `${API_BASE}/${endpoint}`;

/**
 * Create a response result data transfer object
 * @param {import("axios").AxiosResponse<any, any>} response 
 * @returns {ResponseResultDTO} The response from the api
 */
export const createResponseResultDTO = function(response){
    const isSuccessful = response.data[DATABASE_OPERATION_RESULT_KEY];
    let errorMessage = DEFAULT_ERROR_MESSAGE;
    if(response.data[ERROR_MESSAGE_KEY] !== undefined){
      errorMessage = response.data[ERROR_MESSAGE_KEY];
    }
    return new ResponseResultDTO(isSuccessful, errorMessage)
}