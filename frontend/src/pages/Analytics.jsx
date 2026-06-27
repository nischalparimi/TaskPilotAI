import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

export default function Analytics() {
  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  const completion =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  const pieData = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
  ];

  const categoryMap = {};

  tasks.forEach((task) => {
    categoryMap[task.category] =
      (categoryMap[task.category] || 0) + 1;
  });

  const barData = Object.keys(categoryMap).map((key) => ({
    category: key,
    tasks: categoryMap[key],
  }));

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-3xl text-white p-8 shadow-xl mb-8">

        <h1 className="text-4xl font-bold">

          📊 Analytics Dashboard

        </h1>

        <p className="mt-3 text-blue-100">

          Track your productivity and task completion.

        </p>

      </div>

      {/* Summary */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6">

          <p className="text-gray-500">

            Total Tasks

          </p>

          <h2 className="text-5xl font-bold mt-3 text-blue-600">

            {tasks.length}

          </h2>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6">

          <p className="text-gray-500">

            Completed

          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-600">

            {completed}

          </h2>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6">

          <p className="text-gray-500">

            Pending

          </p>

          <h2 className="text-5xl font-bold mt-3 text-red-500">

            {pending}

          </h2>

        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6">

          <p className="text-gray-500">

            Productivity

          </p>

          <h2 className="text-5xl font-bold mt-3 text-purple-600">

            {completion}%

          </h2>

        </div>

      </div>

      {/* Charts */}

      <div className="grid xl:grid-cols-2 gap-8">

        {/* Pie */}

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-8 dark:text-white">

            Task Status

          </h2>

          <ResponsiveContainer width="100%" height={360}>

            <PieChart>

              <Pie
                data={pieData}
                outerRadius={120}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Bar */}

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-8 dark:text-white">

            Tasks by Category

          </h2>

          <ResponsiveContainer width="100%" height={360}>

            <BarChart data={barData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="tasks"
                radius={[8, 8, 0, 0]}
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}