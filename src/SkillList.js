import "./styles.css";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="COBOL" emoji="💪" color="blue" />
      <Skill skill="DB2" emoji="💪" color="orange" />
      <Skill skill="JCL" emoji="💪" color="yellow" />
      <Skill skill="Easytrieve" emoji="💪" color="blue" />
      <Skill skill="CICS" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="👶" color="orangered" />
      <Skill skill="Java" emoji="👶" color="orangered" />
      <Skill skill="ReactJS" emoji="👶" color="orangered" />
    </div>
  );
}

export default SkillList;
