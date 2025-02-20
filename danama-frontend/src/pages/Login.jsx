import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { Client, Account } from "appwrite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Login.css";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6781bb7b00100ec5b3a0"); // Replace with your project ID

const account = new Account(client);

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(null); // "success" or "error"
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already logged in
    const checkSession = async () => {
      try {
        await account.get();
        navigate("/admin"); // Redirect to admin page if logged in
      } catch (error) {
        console.log("No active session found");
      }
    };
    checkSession();
  }, [navigate]);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setStatus(null);

    try {
      await account.createEmailPasswordSession(
        credentials.email,
        credentials.password
      );

      // Store session expiry time (1 hour from now)
      const expiryTime = Date.now() + 60 * 60 * 1000;
      localStorage.setItem("sessionExpiry", expiryTime);

      setStatus("success");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
    } catch (err) {
      setStatus("error");
      setError("Invalid email or password. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <Container className="login-container">
        <h2 className="login-title">Admin Login</h2>
        {error && <p className="error-message">{error}</p>}

        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="password-group">
            <Form.Label>Password</Form.Label>
            <div className="password-wrapper">
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
          </Form.Group>

          <Button className="button" variant="primary" type="submit" disabled={loading}>
            {loading ? <span className="loader"></span> : "Login"}
          </Button>
        </Form>
      </Container>

      {status && (
        <div className={`status-overlay ${status === "success" ? "success" : "error"}`}>
          <span className="status-icon">
            {status === "success" ? "✔" : "✖"}
          </span>
          {status === "success" ? "Logged in successfully!" : "Incorrect email/password. Try again."}
        </div>
      )}
    </div>
  );
};

export default Login;