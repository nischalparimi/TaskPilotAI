import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import Planner from "./pages/Planner";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Assistant from "./pages/Assistant";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}

        <Route path="/login" element={<Login />} />

        {/* Protected Application */}

        <Route
          path="/*"
          element={
            <ProtectedRoute>

              <div className="flex min-h-screen bg-slate-100">

                <Sidebar />

                <div className="flex-1 flex flex-col">

                  <Navbar />

                  <main className="flex-1 p-8">

                    <Routes>

                      <Route path="/" element={<Dashboard />} />

                      <Route path="/add-task" element={<AddTask />} />

                      <Route path="/planner" element={<Planner />} />

                      <Route path="/analytics" element={<Analytics />} />

                      <Route path="/calendar" element={<Calendar />} />

                      <Route path="/settings" element={<Settings />} />

                      <Route path="/assistant" element={<Assistant />} />

                    </Routes>

                  </main>

                </div>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;