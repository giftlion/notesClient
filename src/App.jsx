import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import loggedInContext from "./context/loggedIn";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("in") == "true" ? true : false
  );

  return (
    <loggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </loggedInContext.Provider>
  );
}

export default App;
