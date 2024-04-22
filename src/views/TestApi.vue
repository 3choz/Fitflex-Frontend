<template>
    <div>
        <h1>Test API</h1>
        <br>
        <h2 v-if="item">Connected to the backend: {{ item.getConnectedToBackend() }}</h2>
        <br>
        <h2 v-if="item">Message from backend</h2>
        <p v-if="item">{{ item.getMessage() }}</p>
    </div>
</template>

<script>
import { testApiEndpoint } from "@/ApiUtils.js";
import { TestApiModel } from "@/models/TestApiModel";

export default {
    data() {
        return {
            item: null,
        }
    },
    async mounted() {
        this.item = await testApiEndpoint();
        console.log("API complete", this.item);
    }
}
</script>