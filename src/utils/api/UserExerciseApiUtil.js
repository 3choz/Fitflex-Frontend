import axios from 'axios';
import { createEndpoint, createResponseResultDTO } from './ApiConstantsUtil';
import { ExerciseModel } from '@/models/ExerciseModel';
import { ResponseResultDTO } from '../../models/ResponseResultDTO';
import { UserModel } from '@/models/UserModel';
import { UserExerciseModel } from '@/models/UserExerciseModel';

/**
 * 
 * @param {import('axios').AxiosResponse<any, any>} response 
 * @returns {UserExerciseModel[]} An array of UserExercise objects
 */
const createUserExerciseModels = (response) =>response.map(ue => 
    new UserExerciseModel(ue.ueID, ue.exID, ue.userEmail, ue.ueDate, ue.ueType, ue.ueAmount));

/**
 * You are receiving the exercise records that a user has made for each exercise.
 * @param {UserModel} user
 * @param {ExerciseModel} exercise
 * @returns {Promise<UserExerciseModel[]>} A promise that resolves to an array of UserExerciseModel objects
 */
export const getUserExercisesByExercise = (user, exercise) => axios
.post(createEndpoint("getuserexercisesbyexercise"), {userEmail: user.getEmail(), exID: exercise.getId()})
.then(response => createUserExerciseModels(response.data))
.catch(error => {console.error("Error fetching user exercises by exercise: ", error);});

/**
 * Get the exercises assigned to the user by program
 * @APIError Currently has a "list index out of range" error (use TestApi to test)
 * @param {UserExerciseModel | int} userExercise
 * @returns {Promise<UserExerciseModel[]>} A promise that resolves to an array of Exercise objects
 */
export const getUserExercise = (userExercise) => axios
.post(createEndpoint("getuserexercise"),  {ueID: (userExercise instanceof UserExerciseModel) ? userExercise.getId() : userExercise})
.then(response => createUserExerciseModels(response.data))
.catch(error => {console.error("Error fetching user exercise: ", error);});

/**
 * Create a new user exercise
 * @param {UserExerciseModel} userExercise The user exercise to create
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user exercise was created successfully
 */
export const createUserExercise = (userExercise) => axios
.post(createEndpoint("createuserexercise"), {
  exID: userExercise.getExerciseId(),
  userEmail: userExercise.getEmail(),
  ueDate: userExercise.getDate(),
  ueType: userExercise.getType(),
  ueAmount: userExercise.getAmount(),
})
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error creating user exercise: ", error)});

/**
 * Updating the user exercise entry
 * @param {UserExerciseModel} userExercise 
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user exercise was updated successfully
 */
export const updateUserExercise = (userExercise) => axios
.post(createEndpoint("updateuserexercise"), {
  ueID: userExercise.getId(),
  ueDate: userExercise.getDate(),
  ueType: userExercise.getType(),
  ueAmount: userExercise.getAmount(),
})
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error updating user exercise: ", error)});

/**
 * Deleting the user exercise entry
 * @param {UserExerciseModel} userExercise 
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user exercise was deleted successfully
 */
export const deleteUserExercise = (userExercise) => axios
.post(createEndpoint("deleteuserexercise"), {ueID: userExercise.getId()})
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error deleting user exercise: ", error)});