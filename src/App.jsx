import Transactions from "./pages/Transactions/Transactions";
import Navigation from "./components/Navigation";
import Overview from "./pages/Overview/Overview";

const App = () => {
  return (
    <div>
      <Navigation />
      <Overview />
      {/* <Transactions /> */}
    </div>
  )
}

export default App;