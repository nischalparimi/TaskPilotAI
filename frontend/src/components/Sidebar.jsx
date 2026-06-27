import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaPlusCircle,
  FaRobot,
  FaChartPie,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Add Task",
      path: "/add-task",
      icon: <FaPlusCircle />,
    },
    {
      name: "AI Planner",
      path: "/planner",
      icon: <FaRobot />,
    },
    {
      name: "AI Assistant",
      path: "/assistant",
      icon: <FaRobot />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <FaChartPie />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <>
      {/* Mobile Button */}
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-3 rounded-xl shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0
          h-screen w-64
          bg-slate-900
          text-white
          shadow-2xl
          transform
          transition-transform
          duration-300
          z-40
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="py-8 border-b border-slate-700">

          <h1 className="text-3xl font-bold text-center tracking-wide">

            🚀 TaskPilot AI

          </h1>

          <p className="text-center text-slate-400 text-sm mt-2">

            AI Productivity Assistant

          </p>

        </div>

        {/* Navigation */}

        <nav className="mt-8 px-4 space-y-2">

          {menuItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`
                flex items-center gap-4
                px-5 py-3
                rounded-xl
                transition-all
                duration-300
                font-medium

                ${
                  location.pathname === item.path
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-slate-800"
                }
              `}
            >

              <span className="text-lg">

                {item.icon}

              </span>

              {item.name}

            </Link>

          ))}

        </nav>

        {/* Footer */}

        <div className="absolute bottom-6 w-full px-5">

          <div className="bg-slate-800 rounded-xl p-4 text-center">

            <p className="text-sm text-slate-300">

              Stay productive every day 🚀

            </p>

          </div>

        </div>

      </aside>

      {/* Overlay */}

      {open && (

        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setOpen(false)}
        />

      )}
    </>
  );
}