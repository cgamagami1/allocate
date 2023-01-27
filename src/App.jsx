import Transactions from "./pages/Transactions/Transactions";
import Navigation from "./components/Navigation";
import Overview from "./pages/Overview/Overview";

const App = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="flex-grow">
        <Overview />
        {/* <Transactions /> */}
      </div>
    </div>
  )
}

export default App;