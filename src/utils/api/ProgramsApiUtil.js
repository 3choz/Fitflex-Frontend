import axios from 'axios';
import { createEndpoint, createResponseResultDTO } from './ApiConstantsUtil';
import { ProgramModel } from '../../models/ProgramModel';
import { ResponseResultDTO } from '../../models/ResponseResultDTO';
import { UserModel } from '@/models/UserModel';

/**
 * Create a list of Program objects from the programs endpoint
 * @param {import('axios').AxiosResponse<any, any>} programs 
 * @returns 
 */
const createProgramModel = (program) => new ProgramModel(program.prgmID, program.prgmName, program.prgmDescription, program.prgmDifficulty);

/**
 * Get a list of all available programs.
 * @returns {Promise<ProgramModel[]>} A promise that resolves to an array of Program objects
 */
export const getPrograms = () => axios.get(createEndpoint("getprograms"))
.then(response => response.data.map(program => createProgramModel(program)))
.catch(error => {console.error("Error fetching programs: ", error);});

/**
 * Get a list of all available programs filtering by difficulty.
 * @param {string} difficulty 
 * @returns {Promise<ProgramModel[]>} A promise that resolves to an array of Program objects
 */
export const getProgramsByDifficulty = (difficulty) => axios
.post(createEndpoint("getprogramsbydifficulty"), {prgmDifficulty: difficulty})
.then(response => response.data.map(program => createProgramModel(program)))
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
.post(createEndpoint("getprogram"), {userEmail: user.getEmail()})
.then(response => createProgramModel(response.data[0]))
.catch(error => {console.error("Error fetching assigned programs: ", error);});