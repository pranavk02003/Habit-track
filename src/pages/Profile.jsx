import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useState } from "react";

const Profile = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [mode, setMode] = useState("login"); // login | signup

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
          <div className="flex justify-center mb-4 gap-4">
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-2 rounded ${
                mode === "login" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-2 rounded ${
                mode === "signup" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              Signup
            </button>
          </div>

          {mode === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">You are logged in ✅</h1>
    </div>
  );
};

export default Profile;