import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import { HomeContextProvider } from "./context/home-context";
function App() {
  return (
    <div className="App">
      <HomeContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </HomeContextProvider>
    </div>
  );
}

export default App;
