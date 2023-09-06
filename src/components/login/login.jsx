import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../home";
import Signup from "./signup";
function Login() {
  const navigate = useNavigate();
  const [log, setLog] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [details, setDetails] = useState({ username: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const login = (details) => {
    const user = log.find(
      (u) => u.username === details.username && u.password === details.password
    );
    if (user) {
      navigate("/home", { state: { userName: user.username } });
      alert(`Welcome ${user.username}`);
    } else if (submitted) {
      alert("Username does not exist");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    login(details);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3003/log")
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="log">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h3>
            <b>Manager Login</b>
          </h3>
          <input
            type="text"
            placeholder="Username or email"
            required
            name="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <div style={{ display: "flex" }}>
            <button type="submit">Log in</button>
            <button
              onClick={() => {
                setModalIsOpen(true);
                setSubmitted(false);
              }}
            >
              Register
            </button>x
          </div>
        </form>
      </div>
      <Signup modalIsOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </div>
  );
}

export default Login;
