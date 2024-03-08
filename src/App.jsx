import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
       <Navbar/>
       <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
