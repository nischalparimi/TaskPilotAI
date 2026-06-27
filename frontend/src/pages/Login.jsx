import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const login = async () => {

    try {

      await signInWithPopup(auth, provider);

      navigate("/");

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-[400px]">

        <h1 className="text-4xl font-bold text-center mb-4">
          🚀 TaskPilot AI
        </h1>

        <p className="text-center text-gray-500 mb-8">
          AI Powered Productivity Assistant
        </p>

        <button
          onClick={login}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
        >
          Sign in with Google
        </button>

      </div>

    </div>

  );

}