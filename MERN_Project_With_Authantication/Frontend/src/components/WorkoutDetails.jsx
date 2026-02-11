import { useWorkout } from "../context/WorkoutProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuth } from "../context/AuthProvider";
import { BASE_URI } from "../constant";

function WorkoutDetails({ _id, title, load, reps, createdAt }) {
  const { dispatch } = useWorkout();
  const { user } = useAuth();

  const handleDelete = async (id) => {
    if (!user) return;
    try {
      const response = await fetch(`${BASE_URI}/workouts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed workout to delete.");
      }
      const data = await response.json();
      dispatch({ type: "DELETE_WORKOUT", payload: data });
    } catch (error) {
      console.dir(error.message);
    }
  };
  return (
    <div className="group bg-white p-4 rounded-md shadow-sm flex justify-between items-start">
      <div>
        <h2 className="font-bold text-primary text-xl mb-2.5">{title}</h2>
        <p>
          <strong>Load (in Kgs): </strong>
          {load}
        </p>
        <p>
          <strong>Reps: </strong>
          {reps}
        </p>
        <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      </div>
      <button
        className="text-error opacity-0 group-hover:opacity-100 transition-all"
        onClick={() => handleDelete(_id)}
      >
        <RiDeleteBin6Line size={24} />
      </button>
    </div>
  );
}

export default WorkoutDetails;
