import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthProvider";

function App() {
  const { user } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
