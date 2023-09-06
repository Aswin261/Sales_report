import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
function Navigation(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home", { state: { userName: props.name } });
  };
  const handleClickReport = () => {
    navigate("/com", { state: { userName: props.name } });
  };
  return (
    <nav className="nav">
      <div className="navb">
        <span className="brand">
          <strong style={{ color: "white" }}>
            <span style={{ color: "orangered" }}>SALES REPORT</span>
          </strong>
        </span>
        <button className="btn " onClick={handleClick}>
          Specific Report
        </button>
        {/* <Link to="/payment">
          <button className="btn mr-0 py-md-0 ">Payment</button>
        </Link> */}
        <button className="btn" onClick={handleClickReport}>
          Comparision Report
        </button>
      </div>
      <div>
        <span style={{ paddingRight: "20px", color: "orangered" }}>
          Logged in as {props.name}!
        </span>
        <Link to="/">
          <button className="btn">Logout</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
