import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext";
import { BudgetProvider } from "./context/BudgetContext";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MenuProvider>
          <BudgetProvider>
            <App />
          </BudgetProvider>
        </MenuProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
