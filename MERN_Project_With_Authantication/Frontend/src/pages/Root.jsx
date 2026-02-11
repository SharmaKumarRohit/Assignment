import { Link, Outlet } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuth } from "../context/AuthProvider";

function Root() {
  const { logout } = useLogout();
  const { user } = useAuth();
  return (
    <>
      <header className="py-5">
        <div className="max-w-7xl px-4 mx-auto">
          <nav className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-lg sm:text-2xl font-bold text-neutral-800">
                Workout Budyyy
              </h1>
            </Link>
            <div className="flex gap-8 items-center">
              {!user && (
                <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                </>
              )}
              {user && (
                <>
                  <span>{user.email}</span>
                  <button
                    className="border border-primary text-primary px-3 py-1 rounded-md cursor-pointer"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <main className="bg-neutral-100 text-neutral-800 min-h-[calc(100dvh-79.99px)] py-8">
        <div className="max-w-7xl px-4 mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Root;
