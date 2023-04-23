import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>          
          <Route path="/home" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
