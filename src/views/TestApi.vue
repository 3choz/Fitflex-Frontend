<template>
    <h1>Test API</h1>
    <p>Check the console (F12 on the keyboard) for the results!</p>
</template>

<script>
import { ProgramModel } from "@/models/ProgramModel";
import { loginUser, getUser } from "@/utils/api/UserApiUtil";
import { getPrograms, getProgramsByDifficulty, getUserAssignedProgram } from "@/utils/api/ProgramsApiUtil";
import { getUserExercises } from "@/utils/api/ExerciseApiUtil";
import { getUserExercisesByExercise, getUserExercise } from "@/utils/api/UserExerciseApiUtil";
import { getUserWeight, getUserWeights } from "@/utils/api/UserWeightApiUtil";

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
        console.log("User Login Results", [loginResponse, loginResponse.toString()])

        // Test get user
        this.testUser = await getUser(this.sampleEmail);
        console.log("API getUser Complete", [this.testUser, this.testUser.toString()]);

        // Get all programs, both filtered and unfiltered
        this.unfilteredPrograms = await getPrograms();
        console.log("API getPrograms Complete", this.unfilteredPrograms.map(program => program.toString()));
        if (this.unfilteredPrograms.length > 0) {
            const program = this.unfilteredPrograms[0];
            const programsFilteredByDifficulty = await getProgramsByDifficulty(program.getDifficulty());
            console.log("API getProgramsByDifficulty Complete", programsFilteredByDifficulty.map(program => program.toString()));
        }

        // Get the program assigned to the user
        const userProgram = await getUserAssignedProgram(this.testUser);
        console.log("API getUserAssignedProgram Complete", userProgram.toString());

        // Get the exercises assigned to the user
        const userExercises = await getUserExercises(this.testUser);
        console.log("API getUserExercises Complete", userExercises.map(exercise => exercise.toString()));

        // Test getUserExercisesByExercise
        const exerciseToTest = userExercises.filter(exercise => exercise.getId() === 71)[0];
        const userExercisesByExercise = await getUserExercisesByExercise(this.testUser, exerciseToTest);
        console.log("API getUserExercisesByExercise Complete", userExercisesByExercise.map(exercise => exercise.toString()));

        // Currently has a "list index out of range" error
        // const userExercise = await getUserExercise(userExercisesByExercise);
        // console.log("API getUserExercisesByExercise Complete", userExercise.map(exercise => exercise.toString()));

        // Get the user's weight
        const userWeights = await getUserWeights(this.testUser);
        console.log("API getUserWeights Complete", userWeights.map(weight => weight.toString()));

        // Get the user's weight
        const userWeight = await getUserWeight(userWeights[0].getId());
        console.log("API getUserWeight Complete", userWeight.toString());
    }
}
</script>