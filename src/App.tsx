import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./component/HomePage";
import DashboardHomePage from "./component/DashboardPages/HomePage/DashboardHomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboardhomepage" element={<DashboardHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
