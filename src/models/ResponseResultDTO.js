export class ResponseResultDTO {
    /**
     * Indicates whether the request was successful
     * @required
     * @type {boolean}
     */
    #isSuccessful;

    /**
     * The error message if the request was not successful
     * @optional
     * @type {string}
     */
    #errorMessage;

    /**
     * Create a new ResponseResultModel
     * @param {boolean} isSuccessful Indicates whether the request was successful
     * @param {any} result The result of the request
     * @param {string} errorMessage The error message if the request was not successful
     */
    constructor(isSuccessful, errorMessage = ""){
        this.#isSuccessful = isSuccessful;
        this.#errorMessage = errorMessage;
    }

    /**
     * @returns {boolean} Indicates whether the request was successful
     */
    getIsSuccessful = () => this.#isSuccessful;


    /**
     * @returns {string} The error message if the request was not successful
     */
    getErrorMessage = () => this.#errorMessage;

    /**
     * @return {string} The string representation of the object
     */
    toString = () => `{ isSuccessful: ${this.#isSuccessful}, errorMessage: ${this.#errorMessage} }`;
}