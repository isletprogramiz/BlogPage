import Home from "./pages/home/Home";
import TopBar from "./topbar/TopBar";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="/" element={<Home />}>
              </Route>
      </Routes>

      <Routes>
        <Route path="/single" element={<Single />}>
              </Route>
        <Route path="/write" element={<Write />}>
              </Route>
        <Route path="/login" element={<Login />}>
              </Route>
        <Route path="/setting" element={<Setting />}>
              </Route>
      </Routes>

   
    </Router>
  );
}

export default App;
