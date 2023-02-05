import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Routes>
      <Route element={<Menu />}>
        <Route to="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="news" element={<>news</>} />
          <Route path="settings" element={<>settings</>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;