<template>
    <div :key="testApiModel">
        <h1>Test API</h1>
        <br>
        <p v-if="testApiModel">Connected to the backend: {{ testApiModel.getConnectedToBackend() }}</p>
        <p v-if="testApiModel">Message from backend: {{ testApiModel.getMessage() }}</p>
    </div>
    <br>
    <div :key="programs">
        <h1>Programs</h1>
        <div v-for="program in programs">
            <br>
            <h2>{{ program.getProgramName() }}</h2>
            <p>Id: {{ program.getProgramId() }}</p>
            <p>Description: {{ program.getProgramDescription() }}</p>
            <p>Difficulty: {{ program.getProgramDifficulty() }}</p>
        </div>
    </div>
</template>

<script>
import { getPrograms, testApiEndpoint } from "@/ApiUtils.js";
import { TestApiModel } from "@/models/TestApiModel";

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