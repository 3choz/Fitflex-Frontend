export class ProgramModel {
    /**
     * ID of the program
     * @apiName prgmID
     * @type {number}
     */
    #programId;
    
    /**
     * Name of the program
     * @apiName prgmName
     * @type {string}
     */
    #programName

    /**
     * Description of the program
     * @apiName prgmDescription
     * @type {string}
     */
    #programDescription

    /**
     * Difficulty of the program
     * @apiName prgmDifficulty
     * @type {string}
     */
    #programDifficulty

    /**
     * Creates a new program object
     * @param {number} programId
     * @param {string} programName 
     * @param {string} programDescription
     * @param {string} programDifficulty 
     */
    constructor(programId, programName, programDescription, programDifficulty){
        this.#programId = programId;
        this.#programName = programName;
        this.#programDescription = programDescription;
        this.#programDifficulty = programDifficulty;
    }

    /**
     * @returns {number} The ID of the program
     */
    getProgramId = () => this.#programId;

    /**
     * @returns {string} The name of the program
     */
    getProgramName = () => this.#programName;

    /**
     * @returns {string} The description of the program
     */
    getProgramDescription = () => this.#programDescription;

    /**
     * @returns {string} The difficulty of the program
     */
    getProgramDifficulty = () => this.#programDifficulty;
}