import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface GreetingProps {
  name: string;
  age: number;
  date?: any;
}

const currentTime = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString(undefined, options);
};
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello, {name}, you have {age} years old!
      </p>
      <p>Today is: {currentTime()}</p>
    </div>
  );
};

const Counter: React.FC = () => {
  const [cout, setCout] = useState<number>(0);
  const removeCouter = () => {
    if (cout > 0) {
      setCout(cout - 1);
    } else {
      alert("Licznik nie może zejśc poniżej zera");
    }
  };
  const dublicateCouter = () => {
    setCout(cout * 2);
  };
  const setZero = () => {
    setCout(0);
  };
  return (
    <div>
      <p>Current couter: {cout}</p>
      <button onClick={() => setCout(cout + 1)}>Add</button>
      <button onClick={removeCouter}>Remove</button>
      <button onClick={dublicateCouter}>Dublicate couter</button>
      <button onClick={setZero}>Set zero</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Jack" age={20}></Greeting>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
