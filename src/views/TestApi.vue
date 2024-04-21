<template>
    <div>
        <h1>Test API</h1>
        <br>
        <h2>Connected to the backend: {{ item.connected_to_backend }}</h2>
        <br>
        <h2>Message from backend</h2>
        <p>{{ item.message }}</p>
    </div>
</template>

<script>
import axios from "axios";
import { testApiEndpoint } from "@/ApiUtils.js";

export default {
    data() {
        return {
            item: {}
        }
    },
    mounted() {
        axios.get(testApiEndpoint())
            .then(response => {
                this.item = response.data;
                console.log(this.item);
                console.log(this.item.message);
                console.log(this.item.connected_to_backend);
            })
            .catch(error => {
                console.error("Error fetching items:", error);
            });
    }
}
</script>