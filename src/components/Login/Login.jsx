import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import heroBg from "../../assets/hero.webp";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [emailError, setEmailError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "trainee",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === "email") {
    if (
      value.length > 0 &&
      !value.toLowerCase().endsWith("@gmail.com")
    ) {
      setEmailError("Only Gmail addresses are allowed");
    } else {
      setEmailError("");
    }
  }
};

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
    setEmailError("Only Gmail addresses are allowed");
    return;
  }

  const userData = {
    email: formData.email,
    role: formData.role,
  };

  login(userData);
  localStorage.setItem("role", formData.role);

  if (formData.role === "admin") {
    navigate("/admin-dashboard");
  } else {
    navigate("/dashboard");
  }
};

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(10, 10, 10, 0.7),
            rgba(10, 10, 10, 0.7)
          ),
          url(${heroBg})
        `,
      }}
    >
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="trainee">Trainee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="input-group">
  <label>Email</label>

  <input
    type="email"
    name="email"
    placeholder="Enter Gmail"
    value={formData.email}
    onChange={handleChange}
    required
  />

  {emailError && (
    <span className="error-text">
      {emailError}
    </span>
  )}
</div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>
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