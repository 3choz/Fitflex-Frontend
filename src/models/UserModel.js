export class UserModel{
    /**
     * User's email
     * @primaryKey
     * @apiName userEmail
     * @type {string}
     */
    #email;

    /**
     * ID for the password
     * @apiName passID
     * @type {number}
     */
    #passwordId;

    /**
     * ID for the program
     * @apiName prgmID
     * @type {number}
     */
    #programId;

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
     * @type {string} (mm/dd/yyyy)
     */
    #dateOfBirth;

    /**
     * User's phone number
     * @apiName userPhone
     * @type {string}
     */
    #phoneNumber;

    /**
     * User's sex
     * @apiName userSex
     * @type {string}
     */
    #sex;

    /**
     * Creates a new user object
     * @param {string} email
     * @param {number} passwordId
     * @param {number} programId
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} dateOfBirth
     * @param {string} sex
     * @param {string} phoneNumber
     */
    constructor(email, passwordId, programId, firstName, lastName, dateOfBirth, sex, phoneNumber){
        this.#email = email;
        this.#passwordId = passwordId;
        this.#programId = programId;
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
     * @returns {number} The password ID of the user
     */
    getPasswordId = () => this.#passwordId;

    /**
     * @returns {number} The program ID of the user
     */
    getProgramId = () => this.#programId;

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
    toString = () => `UserModel: {email: ${this.#email}, passwordId: ${this.#passwordId}, programId: ${this.programId}, firstName: ${this.#firstName}, lastName: ${this.#lastName}, dateOfBirth: ${this.#dateOfBirth}, sex: ${this.#sex}, phoneNumber: ${this.#phoneNumber}}`;
}