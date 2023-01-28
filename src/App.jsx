import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex h-screen">
      <Navigation />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </div>
  )
}

export default App;