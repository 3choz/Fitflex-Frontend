export class UserExerciseModel{
    /**
     * Id for the entry
     * @primaryKey
     * @apiName ueID
     * @type {number}
     */
    #id;

    /**
     * Id for the exercise
     * @apiName exID
     * @type {number}
     */
    #exerciseId;

    /**
     * Email for the user
     * @apiName userEmail
     * @type {string}
     */
    #email;

    /**
     * Date for the entry
     * @apiName ueDate
     * @type {string}
     */
    #date;

    /**
     * Type of the entry
     * @apiName euType
     * @type {string}
     */
    #type;

    /**
     * Amount of the entry
     * @apiName ueAmount
     * @type {number}
     */
    #amount;

    constructor(id, exerciseId, email, date, type, amount){
        this.#id = id;
        this.#exerciseId = exerciseId;
        this.#email = email;
        this.#date = date;
        this.#type = type;
        this.#amount = amount;
    }

    /**
     * @return {number} the id
     */
    getId = () => this.#id;

    /**
     * @return {number} the exerciseId
     */
    getExerciseId = () => this.#exerciseId;

    /**
     * @return {string} the email
     */
    getEmail = () => this.#email;

    /**
     * @return {string} the date
     */
    getDate = () => this.#date;

    /**
     * @return {string} the type
     */
    getType = () => this.#type;

    /**
     * @return {number} the amount
     */
    getAmount = () => this.#amount;

    /**
     * @return {string} The string representation of the object
     */
    toString = () => `UserExerciseModel {id: ${this.#id}, exerciseId: ${this.#exerciseId}, email: ${this.#email}, date: ${this.#date}, type: ${this.#type}, amount: ${this.#amount}}`;
}