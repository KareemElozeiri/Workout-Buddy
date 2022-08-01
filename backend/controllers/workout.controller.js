const Workout = require("../models/workout.model");
const mongoose = require("mongoose");

//get all workouts from the db
const getAllWorkouts = async (req, res)=>{
    const allWorkouts = await Workout.find({}).sort({createdAt:-1});
    //sending data to the client
    res.status(200).json(allWorkouts);
};

//get a workout by id
const getWorkoutByID = async (req, res)=>{
    //extracting id from the req params
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"error":"Requested workout does not exist"});
    }

    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({"error":"Requested workout does not exist"});
    }
    
    res.status(200).json(workout);
};

//add a workout
const createWorkout = async (req, res)=>{
    const {title, reps, load} = req.body;
    //adding workout to db
    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch(err){
        res.status(400).json({"error": err.message});
    }
};

//delete a workout
const deleteWorkout = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"error":"Specified workout does not exist"});
    }

    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout){
        return res.status(404).json({"error":"Specified workout does not exist"});
    }

    res.status(200).json(workout);

};

//update a workout
const updateWorkout = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"error":"Specified workout does not exist"});
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {...req.body});
    if(!workout){
        return res.status(400).json({"error":"Specified workout does not exist"});
    }
    res.status(200).json(workout);
};


module.exports = {
    getAllWorkouts,
    getWorkoutByID,
    createWorkout,
    deleteWorkout,
    updateWorkout
}
