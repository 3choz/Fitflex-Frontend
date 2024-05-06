<template>
  <div class="add-workout-page">
    <div id="notification" class="notification" v-show="showNotification">
      Workout has been added to your schedule. You can view it in Statistics.
      <button @click="dismissNotification">X</button>
    </div>

    <h1>Super Strength</h1>
    <p>Trainer: Roger “Rock” Lockridge (Male)</p>

    <div class="video-thumbnail">
      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/0A3EgOztptQ" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe> -->

      <iframe v-if="videoUrl" width="560" height="315" :src="videoUrl"  frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>

    <div class="workout-details">
      <p class="workout-text"><strong>This eight-week program is designed to help you get stronger throughout the entire
          body.</strong><br>
        <strong>Yes, the big three power lifts are involved, but this isn’t necessarily a power lifting</strong><br>
        <strong>program. The goal will be to lift more weight with all the major body parts.</strong>
      </p>

      <p class="workout-text"><strong>You’re going to train five days a week, but none of these workouts will be that
          long. You</strong><br>
        <strong>should be in and out of the gym or weight room in less than an hour. We’re going to keep</strong><br>
        <strong>this to barbells and dumbbells as much as possible, but you can also expect some machine</strong><br>
        <strong>work. If you don’t have cables or machines, do the best you can with what you do have.</strong>
      </p>
    </div>

    <button @click="addWorkout" class="add-workout-button">Add workout</button>

    <div class="workout-summary">
      <h2>Workout Summary</h2>
      <div class="summary-item">
        <span>Main Goal:</span>
        <span>Increase Strength</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Workout Type:</span>
        <span>Split</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Training Level:</span>
        <span>Beginner</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Week Duration:</span>
        <span>8 Weeks</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Days Per Week:</span>
        <span>5 Days</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Equipment Required:</span>
        <span>None</span>
      </div>
      <hr class="summary-separator">
      <div class="summary-item">
        <span>Target Gender:</span>
        <span>Male and Female</span>
      </div>
    </div>

    <!-- Go Back button -->
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotification: false
    };
  },
  computed: {
    videoUrl() {
      return this.$route.query.url || "";
    },
  },
  methods: {
    dismissNotification() {
      this.showNotification = false;
    },
    addWorkout() {
      this.showNotification = true;
    },
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
/* Add Workout button styles */
.add-workout-button {
  background-color: #f8d7da;
  color: black;
  padding: 20px 40px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  left: 63%;
  top: 70px;
  width: 350px;
  text-align: center;
  transition: background-color 0.3s;
  display: block;
}

.add-workout-button:hover {
  background-color: #d87c7c;
}

/* Notification styles */
.notification {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
  position: relative;
  width: 38%;
}

.notification button {
  position: absolute;
  right: 0px;
  left: 92%;
  top: 5%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

/* Workout details styles */
.workout-details .workout-text {
  color: black;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: -26%;
  line-height: 1.6;
}

/* Video thumbnail styles */
.video-thumbnail {
  position: relative;
  left: -450px;
  margin-bottom: 30px;
}

/* Workout Summary styles */
.workout-summary {
  background-color: #d1edfc;
  /* Light blue background color */
  color: black;
  padding: 20px;
  border: 2px solid black;
  box-sizing: border-box;
  position: absolute;
  top: 155px;
  left: 78%;
  transform: translateX(-60%);
  width: 90%;
  /* Box made longer */
  max-width: 600px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Style for the workout title */
.add-workout-page h1 {
  color: black;
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.5em;
  position: relative;
  left: -600px;
}

/* Style for the trainer information */
.add-workout-page p {
  color: black;
  font-size: 1em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1em;
  position: relative;
  left: -580px;
}

.workout-summary h2 {
  text-align: center;
  margin-bottom: 16px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.summary-item span:first-child {
  flex: 1;
  text-align: left;
}

.summary-item span:last-child {
  flex: 1;
  text-align: right;
}

.summary-separator {
  border: none;
  height: 1px;
  background-color: black;
  margin: 8px 0;
}

/* Clear any floats */
.workout-details:after {
  content: "";
  display: table;
  clear: both;
}

/* To use absolute positioning the parent must have a relative position */
.add-workout-page {
  position: relative;
  padding-bottom: 20px;
}

/* Go Back button styles */
button {
  background-color: #eaeaea;
  color: black;
  padding: 10px 20px;
  border: 2px solid #eaeaea;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  position: relative;
  left: -43%;
}

button:hover {
  background-color: #d87c7c;
}
</style>
