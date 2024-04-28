import axios from 'axios';
import { createEndpoint, createResponseResultDTO } from './ApiConstantsUtil';
import { ResponseResultDTO } from '../../models/ResponseResultDTO';
import { UserModel } from '@/models/UserModel';

/**
 * Create the body for the createuser endpoint
 * @param {UserModel} userModel The user to create
 * @param {string} password The user's password
 * @returns {Object} The body for the createuser endpoint
 * @private
 */
const createUserBodyWithPassword = function(userModel, password = null) {
  const body =  {
    userEmail: userModel.getEmail(),
    userFirstName: userModel.getFirstName(),
    userLastName: userModel.getLastName(),
    userDOB: userModel.getDateOfBirth(),
    userPhone: userModel.getPhoneNumber(),
    userSex: userModel.getSex()
  }

  if(password !== null){
    body.userPassword = password;
  }

  return body;
}

/**
 * Authenticate the user with the system
 * @param {string} email The user's email
 * @param {string} password The user's password
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user was logged in successfully
 */
export const loginUser = (email, password) => axios
.post(createEndpoint("login"), {userEmail: email, userPassword: password })
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error logging in user: ", error)})

/**
 * Create a new user
 * @param {UserModel} userModel The user to create
 * @param {string} password The user's password
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user was created successfully
 */
export const createUser = (userModel, password) => axios
.post(createEndpoint("createuser"), createUserBodyWithPassword(userModel, password))
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error creating user: ", error)});

/**
 * Get the user from the getuser endpoint
 * @param {string} email The user's email
 * @returns {Promise<UserModel>} A promise that resolves to a UserModel object
 */
export const getUser = (email) => axios
.post(createEndpoint("getuser"), {userEmail: email})
.then(response => {
  const user = response.data;
  return new UserModel(user.userEmail, user.userFirstName, user.userLastName, user.userDOB, user.userSex, user.userPhone)
})
.catch(error => {console.error("Error fetching user: ", error);});

/**
 * Update the user's information
 * @param {UserModel} user 
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user was updated successfully
 */
export const updateUser = (user) => axios
.post(createEndpoint("updateuser"), createUserBodyWithPassword(user))
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error updating user: ", error)});

/**
 * Update the user's password
 * @param {UserModel} user 
 * @param {string} password 
 * @param {string} newPassword
 * @returns {Promise<ResponseResultDTO>} A promise that resolves to true if the user's password was updated successfully
 */
export const updateUserPassword = (user, currentPassword, newPassword) => axios
.post(createEndpoint("updatepassword"), {
  userEmail: user.getEmail(),
  userPassword: currentPassword,
  userNewPassword: newPassword
})
.then(response => createResponseResultDTO(response))
.catch(error => {console.error("Error updating user password: ", error)});