import "./App.css";
import SideBar from "./components/SideBar.component";
import Content from "./components/Content.component";
import { useState } from "react";
function App() {
  const [project, setProject] = useState([]);
 /*  setProject([
    {
      name: "Template One",
      paragraph: "kasper template UI/UX design",
      teamMember: 5,
      tags: ["programming", "Design", "Hosting"],
      levelOfProgress: "5/10",
      budget: 2500,
    }, {
      name: "Template Two",
      paragraph: "Leon template UI/UX design",
      teamMember: 5,
      tags: ["programming", "Design", "Responsive", "Marketing"],
      levelOfProgress: "6/10",
      budget: 2500,
    }, {
      name: "Monster Redux",
      paragraph: "Consume Api with react ",
      teamMember: 5,
      tags: ["programming", "React", "Api"],
      levelOfProgress: "10/10",
      budget: 2500,
    }, {
      name: "Organic Farmer",
      paragraph: "Create organic store with Node and also respect UI/UX design",
      teamMember: 5,
      tags: ["programming", "Design", "Server", "Node Js","Api"],
      levelOfProgress: "5/10",
      budget: 2500,
    }, {
      name: "Camper",
      paragraph: "kasper template UI/UX design",
      teamMember: 5,
      tags: ["programming", "Node Js", "Api", "Postman"],
      levelOfProgress: "5/10",
      budget: 2500,
    }, {
      name: "CampVenture",
      paragraph: "CampVenture store UI/UX design",
      teamMember: 5,
      tags: ["programming", "Design", "Hosting", "Marketing"],
      levelOfProgress: "5/10",
      budget: 2500,
    },
  ]); */
  return (
    <div className="App">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
