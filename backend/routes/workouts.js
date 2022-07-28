const express =  require("express");
const {
    getAllWorkouts,
    getWorkoutByID,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController");
const router = express.Router();

//GET all workouts
router.get("/", getAllWorkouts);

//GET a workout by id
router.get("/:id", getWorkoutByID);

//POST a workout
router.post("/", createWorkout);

//DELETE a workout by id
router.delete("/:id", deleteWorkout);

//UPDATE a workout by id
router.patch("/:id", updateWorkout);


module.exports = router;