<template>
    <div id="curr-program">

        <h4> {{ user.getFirstName() }}'s Current Progress</h4>
        <!-- TODO: Add chart that shows weight progression -->

        <!-- TODO: Weight is hard coded at the moment. Pull weight from database -->
        <p>Current Weight: 
          <div>
            <p v-if="currentWeight !== null"> {{ currentWeight.getWeight() }}</p>
            <p v-else> No weight data available</p>
          </div>
        </p>     
    </div>

</template>

<script>
import { UserModel } from '@/models/UserModel';
import { UserWeightModel } from '@/models/UserWeightModel';
import { getUserWeights } from '@/utils/api/UserWeightApiUtil';
import { isUserLoggedIn, getUserFromSession } from '@/utils/session/SessionUtils';


export default {
  name: 'CurrentProgress',
  data(){
    return {
      user: isUserLoggedIn() ? getUserFromSession() : null,
      userWeights: [],
      currentWeight: null
    }
  },
  async mounted(){
    this.userWeights = await getUserWeights(this.user);
    if(this.userWeights !== undefined){
      this.currentWeight =  this.userWeights.reverse()[0]
    }
  }
}
</script>
