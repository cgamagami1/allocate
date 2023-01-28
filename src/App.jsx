import Transactions from "./pages/Transactions/Transactions";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import Spending from "./pages/Dashboard/Spending";

const App = () => {
  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex justify-between flex-grow gap-16 p-16">
        {/* <Dashboard />  */}
        <Transactions />
        <Spending />
      </div>
    </div>
  )
}

export default App;