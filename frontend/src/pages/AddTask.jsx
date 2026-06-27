import { useState, useContext } from "react";
import { generatePlan } from "../services/api";
import { TaskContext } from "../context/TaskContext";
import toast from "react-hot-toast";

export default function AddTask() {
  const { addTask } = useContext(TaskContext);

  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [hours, setHours] = useState("");
  const [category, setCategory] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await generatePlan({
        task,
        deadline,
        hours: Number(hours),
        category,
      });

      setPlan(response.plan);

      await addTask({
        task,
        deadline,
        hours: Number(hours),
        category,
        completed: false,
      });

      toast.success("Task Added Successfully!");

      setTask("");
      setDeadline("");
      setHours("");
      setCategory("");

    } catch (error) {

      console.error(error);

      toast.error("Failed to Generate AI Plan");

    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">

      <div className="mb-10">

        <h1 className="text-4xl font-bold dark:text-white">

          🤖 AI Task Planner

        </h1>

        <p className="text-gray-500 mt-2">

          Create a task and let Gemini AI generate a smart productivity plan.

        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* FORM */}

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6 dark:text-white">

            Create New Task

          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Task Name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white"
            />

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white"
            />

            <input
              type="number"
              placeholder="Estimated Hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              required
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none dark:bg-slate-700 dark:text-white"
            >
              <option value="">Select Category</option>
              <option>Study</option>
              <option>Hackathon</option>
              <option>Interview</option>
              <option>Meeting</option>
              <option>Personal</option>
            </select>

            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Generating AI Plan..." : "Generate AI Plan"}
            </button>

          </form>

        </div>

        {/* AI PLAN */}

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6 dark:text-white">

            📋 AI Productivity Plan

          </h2>

          {plan ? (

            <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-200 leading-8">

              {plan}

            </pre>

          ) : (

            <div className="flex flex-col justify-center items-center h-80 text-center">

              <div className="text-6xl mb-4">

                🤖

              </div>

              <h3 className="text-2xl font-bold text-gray-500">

                No Plan Generated

              </h3>

              <p className="text-gray-400 mt-2">

                Fill the form and generate your AI productivity plan.

              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}