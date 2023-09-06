import React from "react";
import { u1 } from "../data/u1";
import { u2 } from "../data/u2";
import { u3 } from "../data/u3";
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
// import faker from "faker";

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
const allData = u1.concat(u2, u3);
// const allNames = Array.from(new Set(allData.map((item) => item.name)));

export const data = {
  // labels: allData.map((item) => item.date),
  labels: allData.map((item) => `${item.name}: ${item.date}`),

  // labels: ["John", "Jane", "Jacob"],
  datasets: [
    {
      label: "Apple",
      data: allData.map((item) => item.Apple),
      fill: false,
      borderColor: "red",
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Realme",
      data: allData.map((item) => item.Realme),
      fill: false,
      borderColor: "green",
      backgroundColor: "rgba(75, 192, 192)",
    },
    {
      label: "Oneplus",
      data: allData.map((item) => item.Oneplus),
      fill: true,
      borderColor: "blue",
      backgroundColor: "rgba(54, 162, 235)",
    },
  ],
};

export function Barchart() {
  console.log(u1);
  return (
    <div style={{ margin: 50 }}>
      <Bar options={options} data={data} />
    </div>
  );
}
