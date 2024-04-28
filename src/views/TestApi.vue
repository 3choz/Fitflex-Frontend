<template>
    <div :key="testApiModel">
        <h1>Test API</h1>
        <p v-if="testApiModel">Connected to the backend: {{ testApiModel.getConnectedToBackend() }}</p>
        <p v-if="testApiModel">Message from backend: {{ testApiModel.getMessage() }}</p>
        <p v-if="testApiModel">To String JSON: {{ testApiModel.toString() }}</p>
    </div>
    <br>
    <div :key="programs">
        <h1>Programs</h1>
        <div v-for="program in programs">
            <br>
            <h2>{{ program.getName() }}</h2>
            <p>Id: {{ program.getId() }}</p>
            <p>Description: {{ program.getDescription() }}</p>
            <p>Difficulty: {{ program.getDifficulty() }}</p>
            <p>To String JSON: {{ program.toString() }}</p>
        </div>
    </div>
</template>

<script>
import { getPrograms, testApiEndpoint } from "@/ApiUtils.js";
import { TestApiModel } from "@/models/TestApiModel";
import { ProgramModel } from "@/models/ProgramModel";

export default {
    data() {
        return {
            /**
             * @type {TestApiModel}
             */
            testApiModel: null,

            /**
             * @type {ProgramModel[]}
             */
            programs: []
        }
    },
    async mounted() {
        this.testApiModel = await testApiEndpoint();
        console.log("Test API complete", this.testApiModel);

        this.programs = await getPrograms();
        console.log("API getPrograms Complete", this.programs);
    }
}
</script>