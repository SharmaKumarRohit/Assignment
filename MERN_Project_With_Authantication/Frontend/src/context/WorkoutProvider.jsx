import { createContext, useContext, useReducer } from "react";

const WorkoutContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET_WORKOUT":
      return { workouts: action.payload };
    case "CREATE_WORKOUT":
      return { workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id,
        ),
      };
    default:
      return state;
  }
}

function WorkoutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { workouts: null });
  console.log(state);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  return useContext(WorkoutContext);
}

export default WorkoutProvider;
