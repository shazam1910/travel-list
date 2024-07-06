import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

export default function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>
}

function Logo() {
  return <h1 className="">🏝️ Far Away 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? 😍</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return <footer className="stats">
    <em> You have X items on ypur list, and you already packed X (X%)</em>
  </footer>;
}
