import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/Login" />
      </Routes>
    </>
  );
}

export default App;
