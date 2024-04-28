export class ProgramModel {
    /**
     * ID of the program
     * @primaryKey
     * @apiName prgmID
     * @type {number}
     */
    #id;
    
    /**
     * Name of the program
     * @apiName prgmName
     * @type {string}
     */
    #name

    /**
     * Description of the program
     * @apiName prgmDescription
     * @type {string}
     */
    #description

    /**
     * Difficulty of the program
     * @apiName prgmDifficulty
     * @type {string}
     */
    #difficulty

    /**
     * Creates a new program object
     * @param {number} id
     * @param {string} name 
     * @param {string} description
     * @param {string} difficulty 
     */
    constructor(id, name, description, difficulty){
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#difficulty = difficulty;
    }

    /**
     * @returns {number} The ID of the program
     */
    getId = () => this.#id;

    /**
     * @returns {string} The name of the program
     */
    getName = () => this.#name;

    /**
     * @returns {string} The description of the program
     */
    getDescription = () => this.#description;

    /**
     * @returns {string} The difficulty of the program
     */
    getDifficulty = () => this.#difficulty;

    /**
     * @returns {string} A string representation of the ProgramModel object
     */
    toString = () => `ProgramModel: { Id: ${this.#id}, Name: ${this.#name}, Description: ${this.#description}, Difficulty: ${this.#difficulty} }`;
}