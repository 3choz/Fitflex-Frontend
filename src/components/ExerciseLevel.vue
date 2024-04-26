<template>
    <div class="prog-signup-box" id="exerciseLevel">
        <form action="">
            <h2>What would you say is your current exercise level?</h2>
            <input type="radio" value="beginner" /> Beginner (Twice a week)
            <p></p>
            <input type="radio" value="intermediate" /> Intermediate (four days per week)
            <p></p>
            <input type="radio" value="advance" /> Advance (5-7 days a week)
            <p></p>
            <button type="submit" class="button-link"> Save Exercise Level </button>
        </form> 
    </div>

</template>

<script>

export default {
  name: 'ExerciseLevel',
}
</script>


<style>

</style>