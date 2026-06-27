import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function AIInsights() {

  const { tasks } = useContext(TaskContext);

  const completed = tasks.filter(task => task.completed).length;
  const pending = tasks.length - completed;

  const score =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  let message = "";

  if (score >= 80) {
    message = "Excellent productivity! Keep up the great work.";
  } else if (score >= 50) {
    message = "You're making good progress. Complete the remaining tasks.";
  } else {
    message = "You have many pending tasks. Focus on high-priority items first.";
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        🤖 AI Productivity Insights
      </h2>

      <div className="space-y-2">

        <p>
          ✅ Completed Tasks : {completed}
        </p>

        <p>
          ⏳ Pending Tasks : {pending}
        </p>

        <p>
          📈 Productivity Score : {score}%
        </p>

        <p className="mt-4 font-semibold">
          {message}
        </p>

      </div>

    </div>
  );

}