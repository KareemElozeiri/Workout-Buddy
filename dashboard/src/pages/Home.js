import { useEffect} from "react";
import axios from "../config/axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";


const Home = () => {
    const {workouts, dispatch} =  useWorkoutContext();

    useEffect(()=>{
        const fetchWorkouts = async ()=>{

            const response  = await axios.get("/");
            if(response.status===200){
                console.log(response.data);
                dispatch({type:"SET_WORKOUTS", payload:response.data})
            } 
            else{
                console.log(response.error);
            }
        }

        fetchWorkouts();
    },[dispatch]);

    return (  
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout=>(<WorkoutDetails key={workout._id} workout={workout}/>))}
            </div>
            <WorkoutForm/>
        </div>
    );
}
 
export default Home;
