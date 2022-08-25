import Topbar from "./components/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Register from "../src/Pages/Register/Register"
import Settings from "./Pages/Settings/Settings";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { useContext } from 'react';
import { Context } from './context/Context';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const { user } = useContext(Context);
  function switchPageRegister() {
    return user ? <Home /> : <Register />
  }
  function switchPageLogin() {
    return user ? <Home /> : <Login />
  }
  function switchPageWrite() {
    return user ? <Write /> : <Register />
  }
  function switchPageSettings() {
    return user ? <Settings /> : <Register />
  }

  return (
    <Router>
      <Topbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={switchPageRegister()}>
          </Route>
          <Route path="/login" element={switchPageLogin()} />
          <Route path="/write" element={switchPageWrite()} />
          <Route path="/settings" element={switchPageSettings()} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;