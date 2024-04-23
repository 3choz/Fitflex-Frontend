export class ResponseResultDTO {
    /**
     * Indicates whether the request was successful
     * @required
     * @type {boolean}
     */
    #isSuccessful;

    /**
     * The result of the request
     * @optional
     * @type {any}
     */
    #result;

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
    constructor(isSuccessful, result = null, errorMessage = ""){
        this.#isSuccessful = isSuccessful;
        this.#result = result;
        this.#errorMessage = errorMessage;
    }

    /**
     * @returns {boolean} Indicates whether the request was successful
     */
    getIsSuccessful = () => this.#isSuccessful;

    /**
     * @returns {any} The result of the request
     */
    getResult = () => this.#result;

    /**
     * @returns {string} The error message if the request was not successful
     */
    getErrorMessage = () => this.#errorMessage;
}