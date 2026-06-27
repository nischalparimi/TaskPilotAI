import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";

import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  const { tasks } = useContext(TaskContext);

  const events = tasks.map((task) => ({
    id: task.id,
    title: task.task,
    start: new Date(task.deadline),
    end: new Date(task.deadline),
    allDay: true,
    resource: task,
  }));

  const handleSelectEvent = (event) => {
    const task = event.resource;

    alert(`
Task: ${task.task}

Category: ${task.category}

Deadline: ${task.deadline}

Hours: ${task.hours}

Status: ${task.completed ? "Completed" : "Pending"}
    `);
  };

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl text-white shadow-xl p-8 mb-8">

        <h1 className="text-4xl font-bold">

          📅 Task Calendar

        </h1>

        <p className="mt-3 text-blue-100">

          View all your scheduled tasks in one place.

        </p>

      </div>

      {/* Empty State */}

      {tasks.length === 0 ? (

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-20 text-center">

          <div className="text-7xl mb-5">

            📅

          </div>

          <h2 className="text-3xl font-bold dark:text-white">

            No Tasks Available

          </h2>

          <p className="mt-3 text-gray-500">

            Add a task to view it in the calendar.

          </p>

        </div>

      ) : (

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8">

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable
            popup
            onSelectEvent={handleSelectEvent}
            style={{
              height: 700,
            }}
          />

        </div>

      )}

    </div>
  );
}