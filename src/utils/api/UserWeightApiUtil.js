import axios from 'axios';
import { createEndpoint, createResponseResultDTO } from './ApiConstantsUtil';
import { ResponseResultDTO } from '../../models/ResponseResultDTO';
import { UserModel } from '@/models/UserModel';
import { UserWeightModel } from '../../models/UserWeightModel';

const createUserWeightModels = (response) => response.map(userWeight => new UserWeightModel(userWeight.uwID, userWeight.userEmail, userWeight.uwDate, userWeight.uwWeight));

const createUserWeightBodyObject = function(email, date, weight){
    return {
        userEmail: email,
        uwDate: date,
        uwWeight: weight
    }
}

/**
 * Get the user's weight
 * @param {string} userWeightId The user's weight id
 * @returns {Promise<UserWeightModel[]>} A promise that resolves to a UserWeightModel object
 */
export const getUserWeight = (userWeightId) => axios
.post(createEndpoint("getuserweight"), {uwID: userWeightId})
.then(response => createUserWeightModels(response.data))
.catch(error => {console.error("Error fetching user weight: ", error);});

/**
 * Get the weights of the user
 * @param {UserModel} user
 * @returns {Promise<UserWeightModel[]>} A promise that resolves to an array of UserWeightModel objects
 */
export const getUserWeights = (user) => axios
.post(createEndpoint("getuserweights"), {userEmail: user.getEmail()})
// .then(response => createUserWeightModels(response.data))
.then(response => createUserWeightModels(response.data))
.catch(error => {console.error("Error fetching user weights: ", error);});

/**
 * Create a new user weight
 * @param {UserModel} user
 * @param {string} date
 * @param {number} weight 
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user weight was created successfully
 */
export const createUserWeight = (user, date, weight) => axios
.post(createEndpoint("createuserweight"), createUserWeightBodyObject(user.getEmail(), date, weight))
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error creating user weight: ", error)});

/**
 * Update the user weight entry
 * @param {UserWeightModel} userWeight
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user weight was updated successfully
 */
export const updateUserWeight = (userWeight) => axios
.post(createEndpoint("updateuserweight"), createUserWeightBodyObject(userWeight.getEmail(), userWeight.getDate(), userWeight.getWeight()))
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error updating user weight: ", error)});

/**
 * Deleting the user weight entry
 * @param {UserWeightModel} userWeight
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user weight was deleted successfully
 */
export const deleteUserWeight = (userWeight) => axios
.post(createEndpoint("deleteuserweight"), {uwID: userWeight.getId()})
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error deleting user weight: ", error)});