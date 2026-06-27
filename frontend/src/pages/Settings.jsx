import { useContext } from "react";
import {
  FaMoon,
  FaSun,
  FaUserCircle,
  FaInfoCircle,
  FaBell,
  FaShieldAlt,
} from "react-icons/fa";

import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function Settings() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 dark:text-white">
        ⚙️ Settings
      </h1>

      {/* User Profile */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">

        <div className="flex items-center gap-6">

          {user ? (
            <>
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />

              <div>

                <h2 className="text-2xl font-bold dark:text-white">
                  {user.displayName}
                </h2>

                <p className="text-gray-500">
                  {user.email}
                </p>

              </div>
            </>
          ) : (
            <>
              <FaUserCircle className="text-7xl text-gray-400" />

              <div>

                <h2 className="text-2xl font-bold dark:text-white">
                  Guest User
                </h2>

                <p>Please Login</p>

              </div>
            </>
          )}

        </div>

      </div>

      {/* Theme */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Theme
            </h2>

            <p className="text-gray-500">
              Switch between Light and Dark Mode
            </p>

          </div>

          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white
            ${
              darkMode
                ? "bg-yellow-500"
                : "bg-blue-600"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

        </div>

      </div>

      {/* Notifications */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">

        <div className="flex items-center gap-4">

          <FaBell className="text-3xl text-blue-600" />

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Notifications
            </h2>

            <p className="text-gray-500">
              Reminder notifications coming soon.
            </p>

          </div>

        </div>

      </div>

      {/* Security */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">

        <div className="flex items-center gap-4">

          <FaShieldAlt className="text-3xl text-green-600" />

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Security
            </h2>

            <p className="text-gray-500">
              Authentication is secured using Firebase Google Login.
            </p>

          </div>

        </div>

      </div>

      {/* About */}

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">

        <div className="flex gap-4">

          <FaInfoCircle className="text-3xl text-blue-600 mt-1" />

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              About TaskPilot AI
            </h2>

            <p className="mt-3 text-gray-500">
              TaskPilot AI is an AI-powered productivity assistant
              that helps users organize tasks, generate intelligent
              schedules using Gemini AI, visualize productivity,
              and manage deadlines efficiently.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}