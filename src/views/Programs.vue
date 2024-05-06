<template>
  <div class="programs" id="programs">
    <div class="header-image">
      <div class="program-information">
        <p>Program Name: {{/*user.getProgramName()*/}}</p>
        <p>Program Description: {{/*user.getProgramDescription()*/}}</p>
        <p>Program Difficulty: {{/*user.getProgramDifficulty()*/}}</p>
      </div>
    </div>

    <div class="programs-container">
      <div class="week1">
        <h1 class="week-header">Week 1</h1>
        <!-- Workout 1 -->
        <div class="workout">
          <p class="workout-title">Full UPPER BODY Workout (Tone & Sculpt) - 15 min At Home</p>
          <p class="workout-duration">Duration: 16:40 </p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 2 -->
        <div class="workout">
          <p class="workout-title">Do This Workout Every Evening - 10 Minute Full Body</p>
          <p class="workout-duration">Duration: 10:52</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 3 -->
        <div class="workout">
          <p class="workout-title">10 Min DUMBBELL UPPER BODY WORKOUT at Home</p>
          <p class="workout-duration">Duration: 13:53</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 4 -->
        <div class="workout">
          <p class="workout-title">10 MIN FULL BODY SWEAT SESH (no repeats, no jumping)</p>
          <p class="workout-duration">Duration: 11:29</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 5 -->
        <div class="workout">
          <p class="workout-title">10 MIN FULL BODY WORKOUT // No Equipment</p>
          <p class="workout-duration">Duration: 10:31</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
      </div>
      <div class="week2">
        <h1 class="week-header">Week 2</h1>
        <!-- Workout 1 -->
        <div class="workout">
          <p class="workout-title">15 Min DUMBBELL ARMS & SHOULDER WORKOUT at Home</p>
          <p class="workout-duration">Duration: 16:54 </p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 2 -->
        <div class="workout">
          <p class="workout-title">15 MIN FULL BODY HIIT WORKOUT</p>
          <p class="workout-duration">Duration: 15:28</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 3 -->
        <div class="workout">
          <p class="workout-title">10 min BRA BULGE & BACK FAT WORKOUT</p>
          <p class="workout-duration">Duration: </p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 4 -->
        <div class="workout">
          <p class="workout-title">10 MIN CARDIO WORKOUT AT HOME (Equipment Free)</p>
          <p class="workout-duration">Duration: 13:02</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
        <!-- Workout 5 -->
        <div class="workout">
          <p class="workout-title">15 MIN UPPER BODY WORKOUT - No Equipment</p>
          <p class="workout-duration">Duration: 17:34</p>
          <router-link to="/video" class="button-link begin-workout">
            Begin Workout
          </router-link>
        </div>
      </div>
      <br><br>
      <router-link to="/video" class="button-link change-program">
        Change Current Program
      </router-link>
    </div>

  </div>
  <br><br><br><br>
</template>

<script>


// import VideoView from '@/components/VideoView.vue'
export default {
  name: 'Programs',
  components: {
    // VideoView
  }
}
</script>

<style>
.header-image {
  width: 100%;
  height: 300px;
  background-image: url("../assets/programPageHeader.png");
  background-size: cover;
  background-position: center;
}

.programs-container {
  width: 60%;
  margin: 40px auto;
  background: #fff;
  padding: 20px;
}

.week-header {
  font-size: 24px;
  color: #333;
  margin: 10px 0;
}

.workout {
  background: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}

.workout-title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 8px 0;
}

.workout-title,
.workout-header,
.workout-duration {
  text-align: left;
}

.workout-duration {
  font-size: 16px;
  color: #667;
  margin: 0;
  padding-bottom: 8px;
}

.begin-workout {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}
.change-program{
  background-color: #d87c7c;
}
</style>