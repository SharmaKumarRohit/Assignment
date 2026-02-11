import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WorkoutProvider from "./context/WorkoutProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <WorkoutProvider>
        <App />
      </WorkoutProvider>
    </AuthProvider>
  </StrictMode>,
);
