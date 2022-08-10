import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import App from "./pages/App";
import Credits from "./pages/Credits";
import HowToPlay from "./pages/HowToPlay";

function AppRoutes() {
  return (
    <BrowserRouter>
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
