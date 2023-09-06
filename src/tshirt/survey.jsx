import React, { useState } from "react";
import "./survey.css";
import axios from "axios";
const size = ["S", "M", "L", "XL"];
const Delivery_unit = ["PPES-01", "PPES-02", "PPES-03", "PPES-04", "PPES-05"];
function Survey() {
  const [form, setForm] = useState({
    name: "",
    Du: "",
    Gender: "",
    size: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/tshirts", form);
      console.log(res.data);
      alert("Data added successfully");
    } catch (err) {
      console.error(err);
      if (err.response.status === 409) {
        alert(err.response.data.error);
      } else {
        alert("Data cannot be added");
      }
    }
    setForm({
      name: "",
      Du: "",
      Gender: "",
      size: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <select value={form.Du} onChange={handleChange} name="Du">
          <option value="">DU-Name</option>
          {Delivery_unit.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="gender">
          Gender:
          <label
            style={{
              display: "inline-block",
              marginRight: "50px",
              marginLeft: "20px",
            }}
          >
            <input
              type="radio"
              name="Gender"
              value="Male"
              checked={form.Gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label style={{ display: "inline-block" }}>
            <input
              type="radio"
              name="Gender"
              value="Female"
              checked={form.Gender === "Female"}
              onChange={handleChange}
              required
            />
            Female
          </label>
        </div>

        <select value={form.size} onChange={handleChange} name="size">
          <option value="">Size</option>
          {size.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Survey;
