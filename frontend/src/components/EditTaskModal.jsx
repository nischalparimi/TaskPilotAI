import { useState, useEffect } from "react";

export default function EditTaskModal({
  task,
  onClose,
  onSave,
}) {

  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  if (!task) return null;

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white rounded-xl p-8 w-[500px]">

        <h2 className="text-2xl font-bold mb-6">
          Edit Task
        </h2>

        <input
          name="task"
          value={editedTask.task}
          onChange={handleChange}
          className="border w-full p-3 rounded mb-4"
        />

        <input
          type="date"
          name="deadline"
          value={editedTask.deadline}
          onChange={handleChange}
          className="border w-full p-3 rounded mb-4"
        />

        <input
          type="number"
          name="hours"
          value={editedTask.hours}
          onChange={handleChange}
          className="border w-full p-3 rounded mb-4"
        />

        <select
          name="category"
          value={editedTask.category}
          onChange={handleChange}
          className="border w-full p-3 rounded mb-6"
        >
          <option>Study</option>
          <option>Hackathon</option>
          <option>Interview</option>
          <option>Meeting</option>
          <option>Personal</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-5 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(editedTask)}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}