<template>
    <div class="add-workout-page">
        <div id="notification" class="notification">
            Workout has been added to your schedule. You can view it in Statistics.
            <button>X</button>
        </div>

        <h1>Super Strength</h1>
        <p>Trainer: Roger “Rock” Lockridge (Male)</p>

        <div class="video-thumbnail">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0A3EgOztptQ" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

        <div class="workout-details">
            <p class="workout-text"><strong>This eight-week program is designed to help you get stronger throughout the
                    entire body.</strong><br>
                <strong>Yes, the big three power lifts are involved, but this isn’t necessarily a power
                    lifting</strong><br>
                <strong>program. The goal will be to lift more weight with all the major body parts.</strong>
            </p>

            <p class="workout-text"><strong>You’re going to train five days a week, but none of these workouts will be
                    that long. You</strong><br>
                <strong>should be in and out of the gym or weight room in less than an hour. We’re going to
                    keep</strong><br>
                <strong>this to barbells and dumbbells as much as possible, but you can also expect some
                    machine</strong><br>
                <strong>work. If you don’t have cables or machines, do the best you can with what you do have.</strong>
            </p>
        </div>

        <button class="add-workout-button">Add workout</button>

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
    </div>
</template>

<script>
export default {
    data() {
        return {
            showNotification: false
        };
    },
    methods: {
        dismissNotification() {
            this.showNotification = false;
        },
        addWorkout() {
            this.showNotification = true;
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
    right: 200px;
    top: 120px;
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
}

.notification button {
    position: absolute;
    right: 10px;
    top: 50%;
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
    line-height: 1.6;
}

/* Video thumbnail styles */
.video-thumbnail {
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
    top: 200px;
    left: 78%;
    transform: translateX(-60%);
    width: 90%;
    /* Box made longer */
    max-width: 600px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
</style>
