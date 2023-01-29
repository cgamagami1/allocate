import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Navigation />}>
        <Route index element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  )
}

export default App;