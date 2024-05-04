<template>
    <div class="prog-signup-box" id="weightWidget">
        <h2>Okay {{ user.getFirstName() }}! Let's record your current weight and goal weight</h2>
        <form @submit.prevent="saveWeight">
            <span class="weightSpan">
                <input v-model="currWeight" type="text" name="currWeight" id="currWeight">
                <p>Curent Weight</p>
            </span>
            <span class="weightSpan">
                <input v-model="goalWeight" type="text" name="goalWeight" id="goalWeight">
                <p>Goal Weight</p>
            </span>
            <p><button type="submit" class="button-link"> Save Weight Information </button></p>

        </form>

    </div>

</template>

<script>


import { getUserWeights, createUserWeight } from '@/utils/api/UserWeightApiUtil';
import { getUserFromSession, isUserLoggedIn } from '@/utils/session/SessionUtils';
import { mapActions } from 'vuex';

export default {
    name: 'WeightWidget',
    data() {
        return {
            user: isUserLoggedIn() ? getUserFromSession() : null,
            currWeight: '',
            goalWeight: ''
        }
    },
    async mounted() {
        const weights = await getUserWeights(this.user);
        console.log("weights " + weights);
        // this.currentWeight =  weights.sort((weight1, weight2) => weight1.getDate() > weight2.getDate())[0]
    },
    methods: {
        ...mapActions(['userSignIn']),
        async saveWeight() {
            if (this.currWeight && this.goalWeight) {
                const today = new Date().toISOString().split('T')[0]; // ISO format YYYY-MM-DD
                const weight = parseFloat(this.currWeight);

                try {
                    const response = await createUserWeight(this.user, today, weight);
                    console.log("Weight creation response:", response);
                } catch (error) {
                    console.error("Error creating weight:", error);
                }
            }
        }
    }
}


</script>

<style>
.weightSpan {
    display: inline-block;
}
</style>

<!-- <template>
    <div class="prog-signup-box" id="weightWidget">
        <h2>Let's record your current weight and goal weight</h2>
        <form action="">
            <span class="weightSpan">
                <input type="text" name="currWeight" id="currWeight">
                <p>Curent Weight</p>
            </span>
            <span class="weightSpan">
                <input type="text" name="goalWeight" id="goalWeight">
                <p>Goal Weight</p>
            </span>
            <p><button type="submit" class="button-link"> Save Weight Information </button></p>

        </form>

    </div>

</template>

<script>

export default {
    name: 'WeightWidget',
}
</script>

<style>
.weightSpan{
    display: inline-block;
}
</style>

 -->