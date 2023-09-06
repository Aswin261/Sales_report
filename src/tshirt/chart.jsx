import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function Barcharts() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3003/tshirts")
      .then((res) => {
        setTable(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [table]);
  const data = {
    labels: ["S", "M", "L", "XL"],
    datasets: [
      {
        label: "Male",
        data: table.reduce(
          (male, curr) => {
            if (curr.Gender === "Male") {
              switch (curr.size) {
                case "S":
                  male[0]++;
                  break;
                case "M":
                  male[1]++;
                  break;
                case "L":
                  male[2]++;
                  break;
                case "XL":
                  male[3]++;
                  break;
                default:
                  break;
              }
            }
            return male;
          },
          [0, 0, 0, 0]
        ),
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132)",
        borderwidth: 1,
      },
      {
        label: "Female",
        data: table.reduce(
          (fem, curr) => {
            if (curr.Gender === "Female") {
              switch (curr.size) {
                case "S":
                  fem[0]++;
                  break;
                case "M":
                  fem[1]++;
                  break;
                case "L":
                  fem[2]++;
                  break;
                case "XL":
                  fem[3]++;
                  break;
                default:
                  break;
              }
            }
            return fem;
          },
          [0, 0, 0, 0]
        ),
        borderColor: "blue",
        backgroundColor: " rgb(85, 249, 252)",
        borderwidth: 1,
      },
    ],
  };
  return (
    <div style={{ margin: 100, width: "75%" }}>
      <Bar options={options} data={data}></Bar>
    </div>
  );
}
