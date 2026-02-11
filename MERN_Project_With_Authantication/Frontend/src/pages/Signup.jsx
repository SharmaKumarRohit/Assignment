import { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <>
      <div className="max-w-xl mx-auto my-10 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-neutral-800 text-lg mb-4 text-center border-b border-neutral-200 pb-2">
          Sign Up
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-medium text-neutral-600 w-full"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="e.g.,john@gmail.com"
              className="focus:outline-primary border-2 border-gray-200 px-3 py-2 rounded-md bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium text-neutral-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Min 8 chars with uppercase, lowercase, number & @."
              className="focus:outline-primary border-2 border-gray-200 px-3 py-2 rounded-md bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="self-start mt-2 px-6 py-2 rounded-md bg-primary text-white font-semibold cursor-pointer"
          >
            {isLoading ? "Processing..." : "Sign Up"}
          </button>
        </form>
        {error && (
          <div className="mt-5 border border-red-200 px-4 py-2 rounded-md text-red-700 bg-red-50">
            {error}
          </div>
        )}
      </div>
    </>
  );
}

export default Signup;
