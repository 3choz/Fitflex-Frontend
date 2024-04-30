import { UserModel } from "@/models/UserModel";
import router from "@/router";

const SESSION_STORAGE_KEY = "user";

/**
 * Save user to session storage
 * @param {UserModel} user 
 * @param {Function} userSignIn, needs ...mapActions(['userSignIn']) in the component
 */
export const saveUserToSession = function(user, userSignIn){
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user.toJsonString()));
    console.log("User saved to session storage");
    userSignIn(user);
    router.push("/");
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
    const user = JSON.parse(JSON.parse(sessionStorage.getItem(SESSION_STORAGE_KEY)));
    console.log("User from the session storage", user);
    const parsedUser = new UserModel(user.email, user.passwordId, user.programId, user.firstName, user.lastName, user.dateOfBirth, user.sex, user.phoneNumber);
    
    console.log("User retrieved from session storage", parsedUser.toString());
    return parsedUser;
}

/**
 * Remove user from session storage
 * @param {Function} userSignOut, needs ...mapActions(['userSignOut']) in the component
 * @returns {void}
 */
export const removeUserFromSession = function(userSignOut){
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    userSignOut();
    console.log("User removed from session storage");
    router.push("/");
}

/**
 * Check if user is logged in
 * @returns {boolean} true if user is logged in, false otherwise
 */
export const isUserLoggedIn = () => sessionStorage.getItem(SESSION_STORAGE_KEY) !== null;