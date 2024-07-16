import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import About from "./components/About";
import News from "./components/News";
import Registration from "./components/Registration";
import DonationPage from "./components/DonationPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/donation" element={<DonationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
