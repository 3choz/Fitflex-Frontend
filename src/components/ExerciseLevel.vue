<template>
    <div class="prog-signup-box" id="exerciseLevel" v-if="programs.length !== 0">
        <form @submit.prevent="submitForm">
            <h2>What would you say is your current exercise level?</h2>
            <div v-for="program in programs">
                <input type="radio" :value="program" v-model="selectedProgram" /> {{ program.getName() }}
                <p></p>
            </div>
            <button type="submit" class="button-link"> Save Exercise Level </button>
        </form> 
    </div>

</template>

<script>
import { ProgramModel } from '@/models/ProgramModel';
import { getPrograms, updateUserAssignedProgram } from '@/utils/api/ProgramsApiUtil';
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';


export default {
  name: 'ExerciseLevel',
  data(){
    return {
        user: isUserLoggedIn() ? getUserFromSession() : null,
        selectedProgram: new ProgramModel(0, "", "", ""),
        programs: [new ProgramModel(0, "", "", "")]
    };
  },
  async mounted(){
    this.programs = await getPrograms();
    this.selectedProgram = this.programs.sort((a, b) => a.getId() - b.getId())[0];
  },
  methods: {
    async submitForm(){
      console.log("Selected Program: ", this.selectedProgram.toString());
      const response = await updateUserAssignedProgram(this.user, this.selectedProgram);
      console.log("Update User Assigned Program Response: ", response.toString());

      if(response.getIsSuccessful()){
        alert("Exercise Level Saved!")
        this.$router.push({ name: 'programs' });
      } else {
        alert("Failed to save exercise level. Please try again.")
      }
    }
  }
}
</script>


<style>

</style>