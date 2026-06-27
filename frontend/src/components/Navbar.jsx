import { useContext } from "react";
import { signOut } from "firebase/auth";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";
import { SearchContext } from "../context/SearchContext";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const { search, setSearch } = useContext(SearchContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged Out Successfully");
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <header className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-8 py-5 mb-8">

      <div className="flex items-center justify-between">

        {/* Left */}

        <div>

          <h1 className="text-3xl font-bold text-blue-600">

            🚀 TaskPilot AI

          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">

            Organize your work smarter with AI

          </p>

        </div>

        {/* Center */}

        <div className="hidden md:flex items-center relative w-[420px]">

          <FaSearch className="absolute left-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-12
              pr-5
              py-3
              rounded-full
              border
              border-gray-300
              dark:border-slate-600
              bg-gray-50
              dark:bg-slate-700
              text-black
              dark:text-white
              focus:ring-2
              focus:ring-blue-500
              outline-none
            "
          />

        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          {/* Theme */}

          <button
            onClick={toggleTheme}
            className="
              w-12
              h-12
              rounded-full
              bg-gray-100
              dark:bg-slate-700
              flex
              items-center
              justify-center
              hover:scale-110
              transition
            "
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-blue-600 text-lg" />
            )}
          </button>

          {/* User */}

          {user && (

            <div className="flex items-center gap-4">

              <img
                src={user.photoURL}
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-blue-500 shadow"
              />

              <div className="hidden lg:block">

                <h3 className="font-semibold text-lg dark:text-white">

                  {user.displayName}

                </h3>

                <p className="text-sm text-gray-500 truncate w-52">

                  {user.email}

                </p>

              </div>

              <button
                onClick={logout}
                className="
                  flex
                  items-center
                  gap-2
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded-xl
                  transition
                "
              >

                <FaSignOutAlt />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}