import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/inter";
import App from "./App";

import { Toaster } from "react-hot-toast";

import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import SearchProvider from "./context/SearchContext";
import TaskProvider from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>

      <AuthProvider>

        <SearchProvider>

          <TaskProvider>

            <Toaster
              position="top-right"
              reverseOrder={false}
            />

            <App />

          </TaskProvider>

        </SearchProvider>

      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
);