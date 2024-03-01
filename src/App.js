import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./fonts.css";
import Preview from "components/Preview";

const App = () => {
  return (
    <Router basename={process.env.BASE_PATH}>
      <Routes>
        <Route path="/" element={<Preview />} />
      </Routes>
    </Router>
  );
};

export default App;
