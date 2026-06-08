import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import heroBg from "../../assets/hero.webp"
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const userData = {
    email: formData.email,
  };

  login(userData);

  navigate("/dashboard");
};

  return (
    <div className="login-container"
    style={{
        backgroundImage: `
          linear-gradient(
            rgba(10, 10, 10, 0.7),
            rgba(10, 10, 10, 0.7)
          ),
          url(${heroBg})
        `,
      }}>
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="switch-auth">
          New User?{" "}
          <span onClick={() => navigate("/register")}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;