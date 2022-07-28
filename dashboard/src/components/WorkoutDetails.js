import axios from "../config/axios";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import formatDistanceToNow  from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {

    const {dispatch} = useWorkoutContext();

    const handleDelete = async ()=>{
        await axios.delete(`/${workout._id}`).then(
            (response)=>{
                 dispatch({type:"DELETE_WORKOUT", payload:response.data})
            }

        ).catch(
            (error)=>{
                console.log(error.response.data.error);
            }
        );

    };

    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg)</strong> {workout.load} </p>
            <p><strong>Reps</strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
        </div>
     );
}
 
export default WorkoutDetails;