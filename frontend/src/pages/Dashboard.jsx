import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";
import { SearchContext } from "../context/SearchContext";

import AIInsights from "../components/AIInsights";
import StatCard from "../components/StatCard";
import TaskCard from "../components/TaskCard";

import exportPDF from "../utils/exportPDF";

import {
  FaTasks,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

export default function Dashboard() {
  const { tasks } = useContext(TaskContext);
  const { search } = useContext(SearchContext);

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  const filteredTasks = tasks.filter((task) =>
    task.task
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">

      {/* Welcome */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl text-white p-8 shadow-xl mb-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <h1 className="text-4xl font-bold">

              👋 Welcome Back

            </h1>

            <p className="mt-3 text-blue-100 text-lg">

              Stay organized and let AI help you finish your tasks efficiently.

            </p>

          </div>

          <button
            onClick={() => exportPDF(filteredTasks)}
            className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow"
          >
            📄 Export Report
          </button>

        </div>

      </div>

      {/* AI Insights */}

      <div className="mb-8">

        <AIInsights />

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">

        <StatCard
          title="Total Tasks"
          value={tasks.length}
          color="bg-gradient-to-r from-blue-500 to-blue-700"
          icon={<FaTasks />}
        />

        <StatCard
          title="Completed"
          value={completed}
          color="bg-gradient-to-r from-green-500 to-green-700"
          icon={<FaCheckCircle />}
        />

        <StatCard
          title="Pending"
          value={pending}
          color="bg-gradient-to-r from-orange-500 to-red-500"
          icon={<FaClock />}
        />

      </div>

      {/* Progress */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 mb-10">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold dark:text-white">

            Overall Progress

          </h2>

          <span className="text-3xl font-bold text-blue-600">

            {progress}%

          </span>

        </div>

        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-5">

          <div
            className="bg-gradient-to-r from-green-500 to-green-700 h-5 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Tasks */}

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold dark:text-white">

            Your Tasks

          </h2>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

            {filteredTasks.length} Tasks

          </span>

        </div>

        {filteredTasks.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-6xl mb-4">

              📝

            </h2>

            <h3 className="text-3xl font-bold text-gray-500">

              No Tasks Found

            </h3>

            <p className="mt-3 text-gray-400">

              Start by adding your first task.

            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {filteredTasks.map((task) => (

              <TaskCard
                key={task.id}
                task={task}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
}