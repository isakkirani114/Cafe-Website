import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login successful!");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>☕ Cafe Aroma</h1>
        <h2>Welcome Back!</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account? 
        </p>
      </div>
    </div>
  );
}

export default Login;