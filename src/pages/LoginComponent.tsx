import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../components/authSlice";
import { RootState, AppDispatch } from "../app/store";
import { useNavigate } from "react-router-dom";

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const authStatus = useSelector((state: RootState) => state.auth.status);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (isAuthenticated) {
    navigate('/'); 
    return null; 
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 px-4 py-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        {authStatus === "loading" ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginComponent;
