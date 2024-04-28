export class UserWeightModel{
    /**
     * Id for the entry
     * @primaryKey
     * @apiName uwID
     * @type {number}
     */
    #id;

    /**
     * Email for the user
     * @apiName userEmail
     * @type {string}
     */
    #email;

    /**
     * Date for the entry
     * @apiName uwDate
     * @type {string}
     */
    #date;

    /**
     * Weight for the entry
     * @apiName uwWeight
     * @type {number}
     */
    #weight;

    constructor(id, email, date, weight){
        this.#id = id;
        this.#email = email;
        this.#date = date;
        this.#weight = weight;
    }

    /**
     * @return {number} the id
     */
    getId = () => this.#id;

    /**
     * @return {string} the email
     */
    getEmail = () => this.#email;

    /**
     * @return {string} the date
     */
    getDate = () => this.#date;

    /**
     * @return {number} the weight
     */
    getWeight = () => this.#weight;

    /**
     * @return {string} String representation of the object
     */
    toString = () => `UserWeightModel { id: ${this.#id}, email: ${this.#email}, date: ${this.#date}, weight: ${this.#weight} }`;
}