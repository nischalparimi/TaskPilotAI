import { useContext, useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaFolderOpen,
  FaHourglassHalf,
} from "react-icons/fa";

import { TaskContext } from "../context/TaskContext";
import EditTaskModal from "./EditTaskModal";

export default function TaskCard({ task }) {
  const {
    deleteTask,
    toggleCompleted,
    updateTask,
  } = useContext(TaskContext);

  const [showModal, setShowModal] = useState(false);

  const today = new Date();
  const deadline = new Date(task.deadline);

  const daysLeft = Math.ceil(
    (deadline - today) / (1000 * 60 * 60 * 24)
  );

  let priority = "Low";

  if (daysLeft <= 2) priority = "High";
  else if (daysLeft <= 5) priority = "Medium";

  const priorityColor =
    priority === "High"
      ? "bg-red-500"
      : priority === "Medium"
      ? "bg-yellow-500"
      : "bg-green-500";

  const handleSave = async (updatedTask) => {
    await updateTask(task.id, updatedTask);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mb-6">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* LEFT */}

          <div className="flex-1">

            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>

                <h2 className="text-3xl font-bold dark:text-white">

                  {task.task}

                </h2>

                <p className="text-gray-500 mt-2">

                  Stay focused and complete this task on time.

                </p>

              </div>

              <span
                className={`${priorityColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
              >
                {priority} Priority
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="flex items-center gap-3">

                <FaCalendarAlt className="text-blue-600 text-xl" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Deadline

                  </p>

                  <p className="font-semibold dark:text-white">

                    {task.deadline}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaFolderOpen className="text-yellow-500 text-xl" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Category

                  </p>

                  <p className="font-semibold dark:text-white">

                    {task.category}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaHourglassHalf className="text-purple-500 text-xl" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Estimated Hours

                  </p>

                  <p className="font-semibold dark:text-white">

                    {task.hours} Hours

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <FaClock className="text-red-500 text-xl" />

                <div>

                  <p className="text-gray-500 text-sm">

                    Days Left

                  </p>

                  <p className="font-semibold text-red-500">

                    {daysLeft >= 0 ? `${daysLeft} Days` : "Expired"}

                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8">

              {task.completed ? (

                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">

                  <FaCheckCircle />

                  Completed

                </span>

              ) : (

                <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium">

                  <FaClock />

                  Pending

                </span>

              )}

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex flex-col gap-4 justify-center min-w-[180px]">

            <button
              onClick={() => toggleCompleted(task.id)}
              className={`w-full py-3 rounded-xl font-medium text-white transition ${
                task.completed
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {task.completed
                ? "Mark Pending"
                : "Mark Complete"}
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 transition"
            >
              <FaEdit />

              Edit
            </button>

            <button
              onClick={() => {
                if (window.confirm("Delete this task?")) {
                  deleteTask(task.id);
                }
              }}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 transition"
            >
              <FaTrash />

              Delete
            </button>

          </div>

        </div>

      </div>

      {showModal && (
        <EditTaskModal
          task={task}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}