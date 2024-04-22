export class TestApiModel {
    message;
    connectedToBackend;

    /** 
     * @param {string} message 
     * @param {boolean} connectedToBackend 
     */
    constructor(message, connectedToBackend){
        this.message = message;
        this.connectedToBackend = connectedToBackend;
    }

    /**
     * @returns {string} The message from the test endpoint
     */
    getMessage = () => this.message

    /**
     * @returns {boolean} Whether the frontend is connected to the backend
     */
    getConnectedToBackend = () => this.connectedToBackend;
}