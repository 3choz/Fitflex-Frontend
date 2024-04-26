<template>

    <WeightWidget />

    <ExerciseLevel />


</template>

<script>
// @ is an alias to /src
import ExerciseLevel from '@/components/ExerciseLevel.vue'
import WeightWidget from '@/components/WeightWidget.vue'

export default {
  name: 'ProgramSignup',
  components: {
    ExerciseLevel, 
    WeightWidget
  }
}
</script>