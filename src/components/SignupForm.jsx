import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authSlice";
import { useState } from "react";

const SignupForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(
      signup({
        name: form.name,
        email: form.email,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Signup</h2>

      <input
        name="name"
        placeholder="Name"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="dob"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;