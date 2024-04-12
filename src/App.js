import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  const [userName, setUserName] = useState("Koushik");
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ username: userName, setUserName }}>
        <div className="App pl-20 pr-20 items-center w-full">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
}

export default App;
