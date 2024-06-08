import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customerlogin" element={<Login />} />
        <Route path="/customerregister" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
