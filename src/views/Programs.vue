<template>
    <div class="programs" id="programs">
        <div class="header-image">
            <div class="program-information">
                <p>Program Name: {{ program?.getName() || "N/A" }} Program</p>
                <p>Program Description: {{ program?.getDescription() || "N/A" }}</p>
                <p>Program Difficulty: {{ program?.getName() || "N/A" }}</p>
            </div>
        </div>

        <div class="programs-container">
            <div class="week" v-for="(weekExercises, index) in groupedExercises" :key="index">
                <h1 class="week-header">Week {{ index + 1 }}</h1>
                <div class="workout" v-for="exercise in weekExercises" :key="exercise.getId()">
                    <p class="workout-title">{{ exercise.getName() }} Program</p>
                    <p class="workout-duration">Duration: {{ exercise.getVideoLength() }}</p>
                    <router-link :to="{ name: 'video', query: { url: exercise.getVideoLink() } }"
                        class="button-link begin-workout">
                        Begin Workout
                    </router-link>
                </div>
            </div>
            <router-link to="/change-program" class="button-link change-program">
                Change Current Program
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
            exercises: [],
            groupedExercises: [],
            user: isUserLoggedIn() ? getUserFromSession() : null
        };
    },
    async mounted() {
        // Replace with your user identification method
        // const user = this.user;
        console.log("user haha " + this.user)
        this.program = await getUserAssignedProgram(this.user);
        console.log("program hshs " +this.program)
        this.exercises = await getUserExercises(this.user);
        console.log("exercises hshs " +this.exercises)

        // Example grouping logic for weeks (you can modify this according to your logic)
        //   const weeks = 2; // Number of weeks to show
        //   const exercisesPerWeek = Math.ceil(this.exercises.length / weeks);
        //   for (let i = 0; i < weeks; i++) {
        //     this.groupedExercises.push(this.exercises.slice(i * exercisesPerWeek, (i + 1) * exercisesPerWeek));
        //   }

        //   const exercisesPerWeek = Math.ceil(this.exercises.length / weeks);
        for (let i = 0; i < 2; i++) {
            this.groupedExercises.push(this.exercises);
        }
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
    background: #fff;
    padding: 20px;
}

.week-header {
    font-size: 24px;
    color: #333;
    margin: 10px 0;
}

.workout {
    background: #f8f8f8;
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