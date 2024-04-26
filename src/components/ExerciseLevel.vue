<template>
    <div id="exerciseLevel">
        <form action="">
            <p>What would you say is your current exercise level?</p>
            <input type="radio" value="beginner" /> Beginner (Twice a week)
            <p></p>
            <input type="radio" value="intermediate" /> Intermediate (four days per week)
            <p></p>
            <input type="radio" value="advance" /> Advance (5-7 days a week)
            <p></p>
            <button type="submit"> Save Exercise Level </button>
        </form> 
    </div>

</template>

<script>

export default {
  name: 'ExerciseLevel',
}
</script>
