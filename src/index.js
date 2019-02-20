import React from "react";
import ReactDOM from "react-dom";
import SelectBox from "./selectbox/SelectBox";
import "./styles.css";
const data = [
  {
    id: 0,
    title: "New York",
    selected: false,
    key: "location"
  },
  {
    id: 1,
    title: "Dublin",
    selected: false,
    key: "location"
  },
  {
    id: 2,
    title: "California",
    selected: false,
    key: "location"
  },
  {
    id: 3,
    title: "Istanbul",
    selected: false,
    key: "location"
  },
  {
    id: 4,
    title: "Izmir",
    selected: false,
    key: "location"
  },
  {
    id: 5,
    title: "Oslo",
    selected: false,
    key: "location"
  }
];
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <SelectBox data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
