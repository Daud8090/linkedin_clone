import Header from "./components/Header";
import Home from "./components/Home";
import MyNetwork from "./components/MyNetwork";
import Jobs from "./components/Jobs";
import Messaging from "./components/Messaging";
import Notifications from "./components/Notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
