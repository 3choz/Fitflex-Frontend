<template>
    <div class="programs" id="programs">
        <div class="header-image">
        </div>

        <div class="program-information">
            <h1>{{ program?.getName() || "N/A" }} </h1>
            <p> {{ program?.getDescription() || "N/A" }}</p>
            <p><strong>Difficulty Level:</strong> {{ program?.getName() || "N/A" }}</p>
        </div>

        <div class="programs-container">
            <div class="workout" v-for="(exercise, index) in exercisesArr" :key="exercise[index].getId()">
                <p class="workout-title">{{ exercise[index].getName() }} Programs</p>
                <p class="workout-duration">Duration: {{ Math.floor(exercise[index].getVideoLength() / 60) }} mins</p>
                <router-link :to="{ name: 'video', query: { url: exercise[index].getVideoLink() } }"
                    class="button-link begin-workout">
                    Begin Workout
                </router-link>
            </div>

            <br> <br>

            <router-link to="/change-program" class="button-link change-program">
                Change Current Program
            </router-link>
            <router-link to="/updateweight" class="button-link update-weight">
                Update Weight Information
            </router-link>
        </div>
    </div>
</template>

<script>
//   import { getUserAssignedProgram, getUserExercises } from "@/utils/api/ProgramsApiUtil";
//   import { UserModel } from "@/models/UserModel";

import { getUserAssignedProgram } from "@/utils/api/ProgramsApiUtil";
import { getUserExercises } from "@/utils/api/ExerciseApiUtil";
import { UserModel } from "@/models/UserModel";
import { getUserFromSession, isUserLoggedIn, saveUserToSession } from '@/utils/session/SessionUtils';


export default {
    name: "Programs",
    data() {
        return {
            program: null,
            exercisesArr: [],
            groupedExercises: [],
            user: isUserLoggedIn() ? getUserFromSession() : null
        };
    },
    async mounted() {
        console.log("user haha " + this.user)
        this.program = await getUserAssignedProgram(this.user);
        console.log("program hshs " + this.program)
        this.exercises = await getUserExercises(this.user);
        // console.log("exercises hshs " + this.exercises)

        // for (let i = 0; i < this.exercises.length; i++) {
        //     this.groupedExercises.push(this.exercises);
        // }

        for (let i = 0; i < 5; i++) {
            this.exercisesArr.push(this.exercises);
        }

        // console.log("Exercise Arrr "+this.exercisesArr)
    },
};
</script>

<style>
.header-image {
    width: 100%;
    height: 300px;
    background-image: url("../assets/programPageHeader.png");
    background-size: cover;
    background-position: center;
}

.programs-container {
    width: 60%;
    margin: 40px auto;

    padding: 20px;
}

.week-header {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
}

.workout {
    padding: 10px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}

.workout-title {
    font-size: 18px;
    color: #333;
    margin: 0;
    padding: 8px 0;
}

.workout-title,
.workout-header,
.workout-duration {
    text-align: left;
}

.workout-duration {
    font-size: 16px;
    color: #667;
    margin: 0;
    padding-bottom: 8px;
}

.begin-workout {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
}

.change-program {
    background-color: #d87c7c;
}
</style>