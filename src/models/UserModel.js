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

    #userProgramName;
    #userProgramDescription;
    #userProgramDifficulty;

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
        this.userProgramName = null
        this.userProgramDescription = null;
        this.userProgramDifficulty = null;
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
     * @param {number} programId The new program ID for the user
     */
    setProgramId = (programId) => this.#programId = programId;

    /**
     * @returns {string} The first name of the user
     */
    getFirstName = () => this.#firstName;

    /**
     * @param {string} firstName The new first name for the user
     */
    setFirstName = (firstName) => this.#firstName = firstName;

    /**
     * @returns {string} The last name of the user
     */
    getLastName = () => this.#lastName;

    /**
     * @param {string} lastName The new last name for the user
     * @returns {void}
     */
    setLastName = (lastName) => this.#lastName = lastName;

    /**
     * @returns {string} The date of birth of the user
     */
    getDateOfBirth = () => this.#dateOfBirth;

    /**
     * @param {string} dateOfBirth The new date of birth for the user
     * @returns {void}
     */
    setDateOfBirth = (dateOfBirth) => this.#dateOfBirth = dateOfBirth;

    /**
     * @returns {string} The user's sex
     */
    getSex = () => this.#sex;

    /**
     * @param {string} TThe user's updated sex
     * @returns {void}
     */
    setSex = (sex) => this.#sex = sex;

    /**
     * @returns {string} The phone number of the user
     */
    getPhoneNumber = () => this.#phoneNumber;

    /**
     * @param {string} phoneNumber The new phone number for the user
     * @returns {void}
     */
    setPhoneNumber = (phoneNumber) => this.#phoneNumber = phoneNumber;

    setProgramInformation = (userProgramName, userProgramDescription, userProgramDifficulty) => function()
    {
        this.userProgramName = userProgramName;
        this.userProgramDescription = userProgramDescription;
        this.userProgramDifficulty = userProgramDifficulty;
    }

    /**
     * @returns {string} The program name of the user
     */
    getProgramName = () => this.userProgramName;

     /**
     * @returns {string} The program description of the user
     */
    getProgramDescription = () => this.userProgramDescription;

    /**
     * @returns {string} The program difficulty of the user
     */
    getProgramDifficulty = () => this.userProgramDifficulty;
    /**
     * @returns {string} A string representation of the UserModel object
     */
    toString = () => `{email: ${this.#email}, passwordId: ${this.#passwordId}, programId: ${this.#programId}, firstName: ${this.#firstName}, lastName: ${this.#lastName}, dateOfBirth: ${this.#dateOfBirth}, sex: ${this.#sex}, phoneNumber: ${this.#phoneNumber}}`;

    /**
     * @returns {string} A JSON string representation of the UserModel object. Used for storing and retrieving from the sessionStorage
     */
    toJsonString = () => JSON.stringify({
        email: this.#email,
        passwordId: this.#passwordId,
        programId: this.#programId,
        firstName: this.#firstName,
        lastName: this.#lastName,
        dateOfBirth: this.#dateOfBirth,
        sex: this.#sex,
        phoneNumber: this.#phoneNumber
    });
}