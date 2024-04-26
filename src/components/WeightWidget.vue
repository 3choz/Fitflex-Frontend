<template>
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