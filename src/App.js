import "./App.css";
import Profile from "./pages/Profile";
import User from "./pages/User";
import UserActivity from "./pages/UserActivity";
import UserSession from "./pages/UserSession";
import UserPerformance from "./pages/UserPerformance";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/user/:id/activity" element={<UserActivity />} />
        <Route path="/user/:id/average-sessions" element={<UserSession />} />
        <Route path="/user/:id/performance" element={<UserPerformance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
