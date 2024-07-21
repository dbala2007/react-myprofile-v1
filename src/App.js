import { useState } from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar imageURL="tiger.jpg" imageAlt="Pic of Avatar" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
