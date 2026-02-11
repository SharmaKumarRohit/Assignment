import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { BASE_URI } from "../constant";

function useSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${BASE_URI}/user/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      // save user to browsers local storage
      localStorage.setItem("user", JSON.stringify(data));

      // update globle auth context
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
    }
  };
  return { signup, error, isLoading };
}

export default useSignup;
