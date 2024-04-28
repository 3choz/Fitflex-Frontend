import { UserModel } from "@/models/UserModel";

const SESSION_STORAGE_KEY = "user";

/**
 * Save user to session storage
 * @param {UserModel} user 
 */
export const saveUserToSession = function(user){
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user.toString()));
    console.log("User saved to session storage");
}

/**
 * Get user from session storage
 * @returns {UserModel} user
 */
export const getUserFromSession = function(){
    const isLoggedIn = isUserLoggedIn();
    console.log("Is user logged in?", isLoggedIn);
    if(!isLoggedIn){
        console.log("No user in session storage");
        return null;
    }
    const user = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY));
    console.log(user);
    const parsedUser = new UserModel(user.email, Number(user.papasswordId), Number(user.programId), user.firstName, user.lastName, user.dateOfBirth, user.sex, user.phoneNumber);
    
    console.log("User retrieved from session storage", user.toString());
    return parsedUser;
}

/**
 * Check if user is logged in
 * @returns {boolean} true if user is logged in, false otherwise
 */
export const isUserLoggedIn = () => sessionStorage.getItem(SESSION_STORAGE_KEY) !== null;