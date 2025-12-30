import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email,
        name: "Mock User",
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Login
      </button>

      <p className="text-sm text-center text-gray-500 cursor-pointer">
        Forgot password?
      </p>
    </form>
  );
};

export default LoginForm;