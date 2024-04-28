import { axios, AxiosResponse } from 'axios';
import { createEndpoint, createResponseResultDTO } from './ApiConstantsUtil';
import { ProgramModel } from '../../models/ProgramModel';
import { ResponseResultDTO } from '../../models/ResponseResultDTO';
import { UserModel } from '@/models/UserModel';

/**
 * Create a list of Program objects from the programs endpoint
 * @param {AxiosResponse} programs 
 * @returns 
 */
const createProgramModel = (programs) => programs.map(program => 
        new ProgramModel(program.prgmID, program.prgmName, program.prgmDescription, program.prgmDifficulty))

/**
 * Get a list of all available programs.
 * @returns {Promise<ProgramModel[]>} A promise that resolves to an array of Program objects
 */
export const getPrograms = () => axios
.get(createEndpoint("getprograms"))
.then(response => createProgramModel(response.data))
.catch(error => {console.error("Error fetching programs: ", error);});

/**
 * Get a list of all available programs filtering by difficulty.
 * @param {string} difficulty 
 * @returns {Promise<ProgramModel[]>} A promise that resolves to an array of Program objects
 */
export const getProgramsByDifficulty = (difficulty) => axios
.post(createEndpoint("getprogramsbydifficulty"), {prgmDifficulty: difficulty})
.then(response => createProgramModel(response.data))
.catch(error => {console.error("Error fetching programs by difficulty: ", error);});

/**
 * Update users’ program. Deletes all data that exists for a user’s exercise they have recorded.
 * @param {UserModel} user 
 * @param {ProgramModel} program
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the program was assigned successfully 
 */
export const updateUserAssignedProgram = (user, program) => axios
.post(createEndpoint("updateprogram"), { userEmail: user.getEmail(), prgmID: program.getID() })
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error assigning user to program: ", error)});

/**
 * Get the program assigned to the user
 * @param {UserModel} user 
 * @returns {Promise<ProgramModel>} A promise that resolves to an array of Program objects
 */
export const getUserAssignedProgram = (user) => axios
.get(createEndpoint("getprogram"), {userEmail: user.getEmail()})
.then(response => createProgramModel(response.data))
.catch(error => {console.error("Error fetching assigned programs: ", error);});