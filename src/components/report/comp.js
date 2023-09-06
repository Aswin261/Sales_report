import { useState } from "react";
import BarChart from "./barc";
import { u1 } from "../data/u1";
import { u2 } from "../data/u2";
import { u3 } from "../data/u3";

function Comp() {
  const [array, setArray] = useState([u1]);
  // setArray([...u1, ...u2, ...u3]);
  const [userData, setUserData] = useState({
    // labels: ["john", "jane", "jacob"],
    labels: u3.map((data) => data.name),
    datasets: [
      {
        label: "Apple",
        // data: u3.map((data) => data.Apple),
        data: [
          u1.Apple,
          // u2.map((item) => item.Apple),
          // u3.map((item) => item.Apple),
        ],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <div style={{ width: 900 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default Comp;
