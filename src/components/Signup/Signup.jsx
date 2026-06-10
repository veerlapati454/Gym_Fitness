import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import "./Signup.css";
import heroBg from "../../assets/hero.webp";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
  });

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
  const { name, value } = e.target;

  // Allow only alphabets and spaces for username and full name
  if (name === "username" || name === "name") {
    if (!/^[A-Za-z\s]*$/.test(value)) {
      return;
    }
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Gmail validation
  if (name === "email") {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (value && !gmailRegex.test(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Only valid Gmail addresses are allowed",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!/^[A-Za-z]+$/.test(formData.username)) {
  alert("Username can contain only alphabets");
  return;
}

if (!/^[A-Za-z\s]+$/.test(formData.name)) {
  alert("Full Name can contain only alphabets");
  return;
}

    if (!gmailRegex.test(formData.email)) {
      alert("Please enter a valid Gmail address");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        username: formData.username,
        name: formData.name,
        email: formData.email,
      })
    );

    alert("🎉 Registration Successful! Please login.");

    navigate("/login");
  };

  return (
    <div
      className="signup-container"
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
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Start your fitness journey today 💪</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <span className="error-text">
                {errors.username}
              </span>
            )}
          </div>

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Gmail address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="error-text">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
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

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>

            <div className="password-wrapper">
              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="signup-btn"
          >
            Sign Up
          </button>
        </form>

        <div className="social-divider">
  <span>OR CONTINUE WITH</span>
</div>

        <div className="social-login">
  <button
    type="button"
    className="social-btn google-btn"
  >
    <FaGoogle />
    Continue with Google
  </button>

  <button
    type="button"
    className="social-btn facebook-btn"
  >
    <FaFacebookF />
    Continue with Facebook
  </button>
</div>

        <div className="switch-auth">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;