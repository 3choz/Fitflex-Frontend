<template>
    <div id="statistics" class="statistics">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

        <FeedBack />
        <CurrentProgress />
        
        <br>
        <div class="history">
          <h2>History of weights:</h2>
          <div v-bind="weightToDelete" v-if="weightToDelete !== null">
            <form @submit.prevent="deleteWeight">
              <div v-for="weight in weightsByDate">
                <input type="radio" :value="weight" v-model="weightToDelete" /> Date: {{ weight.getDate() }} Weight: {{ weight.getWeight() }}
              </div>
              <button class="button-link">Delete Selected Weight</button>
            </form>
          </div>
          <div v-else>
            <p>No weight data available</p>
          </div>
          <button class="button-link" @click="promptForWeight">Add Weight</button>
        </div>
    </div>
</template>
  

  
  <script>
// @ is an alias to /src
import FeedBack from '@/components/Feedback.vue'
import CurrentProgress from '@/components/CurrentProgress.vue'
import { createUserWeight, deleteUserWeight, getUserWeights } from '@/utils/api/UserWeightApiUtil';
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';

export default {
  name: 'Statistics',
  components: {
    FeedBack,
    CurrentProgress, 
  },
  data(){
    return {
      user: isUserLoggedIn() ? getUserFromSession() : null,
      weightsByDate: null,
      currentWeight: null,
      weightToDelete: null
    }
  },
  beforeRouteEnter(to, from, next){
    if(isUserLoggedIn()){
      next();
    } else {
      next("/login");
    }
  },
  async mounted(){
    const weights = await getUserWeights(this.user);

    if(weights !== undefined){
      this.weightsByDate =  weights.reverse();
      this.currentWeight = this.weightsByDate[0];
      this.weightToDelete = this.currentWeight;
    }
  },
  methods: {
    async promptForWeight(){
      const newWeightValue = prompt("Enter your new weight");
      if(newWeightValue !== null){

        const today = new Date();
        console.log(today);
        const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

        const newWeightInsertResponse =  await createUserWeight(this.user, todayString, newWeightValue);
        if(newWeightInsertResponse.getIsSuccessful()){
          alert("New weight inserted successfully");
          // Refresh the page
          window.location.reload();
        } else {
          alert("Failed to insert new weight: " + newWeightInsertResponse.getErrorMessage());
        }
      } else {
        alert("No weight entered");
      }
    },
    async deleteWeight(){
      if(this.weightToDelete === null){
        alert("No weight selected to delete");
        return;
      }
      // Ask the user if they are sure they want to delete the weight
      const isSure = confirm("Are you sure you want to delete this weight?");
      if(isSure){
        const deletionResponse =  await deleteUserWeight(this.weightToDelete);
        if(deletionResponse.getIsSuccessful()){
          alert("Weight deleted successfully");
          // Refresh the page
          window.location.reload();
        } else {
          alert("Failed to delete weight: " + deletionResponse.getErrorMessage());
        }
      }
    }
  }
}
</script>

<style>
#statistics{
  display: inline-block;
  text-align: center;
  margin: 50px;
}
.history {
  border: 1px solid black;
  width: 300px;
  background-color: aquamarine;
}
</style>