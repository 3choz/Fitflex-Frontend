export class ExerciseModel{
    /**
     * Exercise ID
     * @primaryKey
     * @type {number}
     * @apiName exId
     */
    #id;

    /**
     * Program ID
     * @type {number}
     * @apiName prgmId
     */
    #programId

    /**
     * Exercise name
     * @type {string}
     * @apiName exName
     */
    #name;

    /**
     * Exercise description
     * @type {string}
     * @apiName exDescription
     */
    #description;

    /**
     * Exercise trainer sex
     * @type {string}
     * @apiName exTrainerSex
     */
    #trainerSex;

    /**
     * Exercise video length
     * @type {number}
     * @apiName exVideoLength
     */
    #videoLength;

    /**
     * Exercise video link
     * @type {string}
     * @apiName exVideoLink
     */
    #videoLink;

    constructor(id, programId = 0, name, description, trainerSex, videoLength, videoLink){
        this.#id = id;
        this.#programId = programId;
        this.#name = name;
        this.#description = description;
        this.#trainerSex = trainerSex;
        this.#videoLength = videoLength;
        this.#videoLink = videoLink;
    }

    /**
     * Get the exercise ID
     * @returns {number} The exercise ID
     */
    getId = () => this.#id;

    /**
     * Get the program ID
     * @returns {number} The program ID
     */
    getProgramId = () => this.#programId;

    /**
     * Get the exercise name
     * @returns {string} The exercise name
     */
    getName = () => this.#name;

    /**
     * Get the exercise description
     * @returns {string} The exercise description
     */
    getDescription = () => this.#description;

    /**
     * Get the exercise trainer sex
     * @returns {string} The exercise trainer sex
     */
    getTrainerSex = () => this.#trainerSex;

    /**
     * Get the exercise video length
     * @returns {number} The exercise video length
     */
    getVideoLength = () => this.#videoLength;

    /**
     * Get the exercise video link
     * @returns {string} The exercise video link
     */
    getVideoLink = () => this.#videoLink;

    /*
    * @returns {string} A string representation of the ExerciseModel object
    */
    toString = () => `ExerciseModel: {ID: ${this.#id}, Name: ${this.#name}, Description: ${this.#description}, TrainerSex: ${this.#trainerSex}, VideoLength: ${this.#videoLength}, VideoLink: ${this.#videoLink}}`;
}