import React, { useState } from "react";
import "./specify.css";
import { u1 } from "../data/u1";
import { u2 } from "../data/u2";
import { u3 } from "../data/u3";

const salesperson = ["John", "Jane", "Jacob"];
const filter = ["datewise", "monthwise", "overall"];

function Specific() {
  const [selectedSalesperson, setSelectedSalesperson] = useState("");
  const [array, setArray] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    const selectedSalesperson = event.target.value;
    setSelectedSalesperson(selectedSalesperson);
    if (selectedSalesperson === "John") {
      setArray(u1);
    } else if (selectedSalesperson === "Jane") {
      setArray(u2);
    } else {
      setArray(u3);
    }
  };
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");

  const filtered = array.filter((d) => {
    if (selectedFilter === "monthwise") {
      const selectMonth = new Date(month).getMonth();
      const dataMonth = new Date(d.date).getMonth();
      return selectMonth === dataMonth;
    } else {
      return (
        date === "" ||
        new Date(d.date).toLocaleDateString("en-US").slice(0, 10) ===
          new Date(date).toLocaleDateString("en-US").slice(0, 10)
      );
    }
  });

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setSelectedFilter(selectedFilter);
    if (selectedFilter === "overall") {
      setArray([...u1, ...u2, ...u3]);
    }
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <select value={selectedSalesperson} onChange={handleChange}>
          <option value="">Select a salesperson</option>
          {salesperson.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {array.length > 0 && (
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
          }}
        >
          <table>
            <tbody>
              <tr>
                <th>
                  <b>Name</b>
                </th>
                <th>
                  <b>Date</b>
                  <br />
                </th>
                <th>
                  <b>Apple</b>
                  <br />
                </th>
                <th>
                  <b>Realme</b>
                  <br />
                </th>
                <th>
                  <b>Oneplus</b>
                </th>
              </tr>
              {filtered.map((item, index) => (
                <tr class="center" key={index}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.Apple}</td>
                  <td>{item.Realme}</td>
                  <td>{item.Oneplus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              paddingRight: "200px",
              marginLeft: "50px",
            }}
          >
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="">Filter</option>
              {filter.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <br />
            {selectedFilter === "datewise" && (
              <div>
                <br />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            )}
            {selectedFilter === "monthwise" && (
              <div>
                <br />
                <input
                  type="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Specific;
