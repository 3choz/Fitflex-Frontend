export class UserModel{
    /**
     * User's email
     * @primaryKey
     * @apiName userEmail
     * @type {string}
     */
    #email;

    /**
     * User's first name
     * @apiName userFirstName
     * @type {string}
     */
    #firstName;

    /**
     * User's last name
     * @apiName userLastName
     * @type {string}
     */
    #lastName;

    /**
     * User's date of birth
     * @apiName userDOB
     * @type {string}
     */
    #dateOfBirth;

    /**
     * User's sex
     * @apiName userSex
     * @type {string}
     */
    #sex;

    /**
     * User's phone number
     * @apiName userPhone
     * @type {string}
     */
    #phoneNumber;

    /**
     * Creates a new user object
     * @param {string} email
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} dateOfBirth
     * @param {string} sex
     * @param {string} phoneNumber
     */
    constructor(email, firstName, lastName, dateOfBirth, sex, phoneNumber){
        this.#email = email;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#sex = sex;
        this.#phoneNumber = phoneNumber;
    }

    /**
     * @returns {string} The email of the user
     */
    getEmail = () => this.#email;

    /**
     * @returns {string} The first name of the user
     */
    getFirstName = () => this.#firstName;

    /**
     * @returns {string} The last name of the user
     */
    getLastName = () => this.#lastName;

    /**
     * @returns {string} The date of birth of the user
     */
    getDateOfBirth = () => this.#dateOfBirth;

    /**
     * @returns {string} The user's sex
     */
    getSex = () => this.#sex;

    /**
     * @returns {string} The phone number of the user
     */
    getPhoneNumber = () => this.#phoneNumber;

    /**
     * @returns {string} A string representation of the UserModel object
     */
    toString = () => {
        return `UserModel: {email: ${this.#email}, firstName: ${this.#firstName}, lastName: ${this.#lastName}, dateOfBirth: ${this.#dateOfBirth}, sex: ${this.#sex}, phoneNumber: ${this.#phoneNumber}}`;
    };
}