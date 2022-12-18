import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import App from "./pages/App";
import Credits from "./pages/Credits";
import HowToPlay from "./pages/HowToPlay";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
