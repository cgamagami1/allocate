import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transactions from "./pages/Transactions/Transactions";
import News from "./pages/News/News";
import Settings from "./pages/Settings/Settings";
import MenuContainer from "./components/MenuContainer";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import SignOut from "./pages/SignOut/SignOut";
import { FC } from "react";

const App: FC = () => {
  return (
    <Routes>
      <Route element={<MenuContainer />}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="news" element={<News />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signout" element={<SignOut />} />
    </Routes>
  )
}

export default App;