import axios from 'axios';
import { createEndpoint } from './ApiConstantsUtil';
import { ExerciseModel } from '@/models/ExerciseModel';
import { UserModel } from '../../models/UserModel';

/**
 * Creating an array of Exercise objects from the response
 * @param {import('axios').AxiosResponse<any, any>} response 
 * @returns {ExerciseModel[]} An array of Exercise objects
 */
const createExerciseModels = (response) => response.map(exercise => new ExerciseModel(
    exercise.exID, exercise.prgmID, exercise.exName, exercise.exDescription, 
    exercise.exTrainerSex, exercise.exVideolength, exercise.exVideolink));

/**
 * Get the exercises that are tied to the user’s program. You are getting the exercises for the program.
 * @param {UserModel} user 
 * @returns {Promise<ExerciseModel[]>} A promise that resolves to an array of Exercise objects
 */
export const getUserExercises = (user) => axios
.post(createEndpoint("getusersexercises"), {userEmail: user.getEmail()})
.then(response => createExerciseModels(response.data))
.catch(error => {console.error("Error fetching user exercises: ", error);});