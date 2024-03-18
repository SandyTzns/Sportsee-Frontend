import "./App.css";
import { Profile } from "./pages/Profile";
import { UserOfMockedData } from "./pages/UserOfMockedData";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user/:id" element={<UserOfMockedData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
