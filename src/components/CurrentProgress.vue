<template>
    <div id="curr-program">

        <h4> {{ user.getFirstName() }}'s Current Progress</h4>
        <!-- TODO: Add chart that shows weight progression -->

        <!-- TODO: Weight is hard coded at the moment. Pull weight from database -->
        <p v-if="currentWeight !== null">Current Weight: {{ currentWeight.getWeight() }}</p>
        <p>Goal Weight: 167lbs</p>       
    </div>

</template>

<script>
import { getUserWeights } from '@/utils/api/UserWeightApiUtil';
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';


export default {
  name: 'CurrentProgress',
  data(){
    return {
      user: isUserLoggedIn() ? getUserFromSession() : null,
      currentWeight: null
    }
  },
  async mounted(){
    const weights = await getUserWeights(this.user);
    this.currentWeight =  weights.sort((weight1, weight2) => weight1.getDate() > weight2.getDate())[0]
  }
}
</script>
