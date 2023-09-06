import React from "react";
import Navigation from "./navbar";
import { useLocation } from "react-router-dom";
import Specific from "./report/specific";
function Home() {
  const location = useLocation();
  const userName = location.state?.userName;
  const id = location.state?.id;
  console.log(userName, id);
  return (
    <div>
      <Navigation name={userName} />
      <Specific />
    </div>
  );
}

export default Home;
