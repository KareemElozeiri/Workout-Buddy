import { useState } from "react";
import axios from "../config/axios"
import { useWorkoutContext } from "../hooks/useWorkoutContext";


const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        //body of req
        const workout = {title,reps,load};
        //sending response
        const response = await axios.post("/",workout).catch((error)=>{setError(error.response.data.error)});
        if(response.status===200){
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            dispatch({type:"CREATE_WORKOUT",payload:response.data})
            console.log("New workout added!");
        }
        
       

       
    }

    return (  
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout!</h3>
            <input placeholder="Workout Title"
             type="text" 
             value={title} 
             onChange={(e)=>{setTitle(e.target.value)}}/>
            <input placeholder="Workout Reptition Count"
            type="number" 
            value={reps} 
            onChange={(e)=>{setReps(e.target.value)}}/>
            <input placeholder="Workout Weight Load (kg)"
            type="number" 
            value={load} 
            onChange={(e)=>{setLoad(e.target.value)}}/>
            <button>Add</button>
            {error && <div className="error"><label>{error}</label></div>}
        </form>

    );
}
 
export default WorkoutForm;