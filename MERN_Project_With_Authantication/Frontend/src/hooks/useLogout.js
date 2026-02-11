import { useAuth } from "../context/AuthProvider";
import { useWorkout } from "../context/WorkoutProvider";

function useLogout() {
  const { dispatch } = useAuth();
  const { dispatch: workoutDispatch } = useWorkout();
  const logout = () => {
    // Remove user from localstorage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUT", payload: null });
  };
  return { logout };
}

export default useLogout;
