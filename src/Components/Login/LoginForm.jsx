import { useState } from "react";
import "./LoginForm.css"
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    console.log("Logging in with", { email, password });
    setError("");
  };

  return (
    <div className="Login">
      <div className="LoginContainer">
        <h2 className="LoginHeading">Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button
          onClick={handleLogin}
          id="loginButton">
          Login
        </button>
      </div>
    </div>
  );
}
