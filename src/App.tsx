import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuoteComponent from "./pages/QuoteComponent";
import LoginComponent from "./pages/LoginComponent";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><QuoteComponent /></ProtectedRoute>}/>
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
