import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

function App() {
  const [userName, setUserName] = useState("Koushik");
  return (
    <userContext.Provider value={{ username: userName, setUserName }}>
      <div className="App pl-20 pr-20 items-center w-full">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
}

export default App;
