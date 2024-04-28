<template>
    <!-- <div :key="unfilteredPrograms">
        <h1>Unfiltered Programs</h1>
        <div v-for="program in unfilteredPrograms">
            <br>
            <h2>{{ program.getName() }}</h2>
            <p>Id: {{ program.getId() }}</p>
            <p>Description: {{ program.getDescription() }}</p>
            <p>Difficulty: {{ program.getDifficulty() }}</p>
            <p>To String JSON: {{ program.toString() }}</p>
        </div>
    </div> -->
    <h1>Test API</h1>
    <p>Check the console for the results!</p>
</template>

<script>
import { ProgramModel } from "@/models/ProgramModel";
import { loginUser, getUser } from "@/utils/api/UserApiUtil";
import { getPrograms, getProgramsByDifficulty, getUserAssignedProgram } from "@/utils/api/ProgramsApiUtil";

export default {
    data() {
        return {
            sampleEmail: "joker@jokes.com",
            sampleUsername: "joker",
            
            /*
            * @type {UserModel}
            */
            testUser: null,

            /**
             * @type {ProgramModel[]}
             */
             unfilteredPrograms: [],
        }
    },
    async mounted() {
        // Test login
        const loginResponse = await loginUser(this.sampleEmail, this.sampleUsername);
        console.log(`User Login Results: ${loginResponse.toString()}`)

        // Test get user
        this.testUser  = await getUser(this.sampleEmail);
        console.log("API getUser Complete", this.testUser.toString());

        // Get all programs, both filtered and unfiltered
        // this.unfilteredPrograms = await getPrograms();
        // console.log("API getPrograms Complete", this.unfilteredPrograms.map(program => program.toString()).join(", "));
        // if(this.unfilteredPrograms.length > 0) {
        //     const program = this.unfilteredPrograms[0];
        //     const programsFilteredByDifficulty = await getProgramsByDifficulty(program.getDifficulty());
        //     console.log("API getProgramsByDifficulty Complete", programsFilteredByDifficulty.map(program => program.toString()).join(", "));
        // }

        // Get the program assigned to the user
        // const userProgram = await getUserAssignedProgram(this.testUser);
        // console.log("API getUserAssignedProgram Complete", userProgram.toString());
    }
}
</script>