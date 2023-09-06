import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./login.css";
function Signup(props) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3003/log", details)
      .then((res) => {
        setDetails({
          email: "",
          password: "",
          fullname: "",
          username: "",
        });
        alert("User Created");
        props.onClose();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to register user");
      });
  };

  return (
    <div>
      <Modal
        className="mod"
        isOpen={props.modalIsOpen}
        onRequestClose={props.onClose}
      >
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            onChange={(e) =>
              setDetails({ ...details, fullname: e.target.value })
            }
            value={details.fullName}
            required
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </Modal>
    </div>
  );
}

export default Signup;
