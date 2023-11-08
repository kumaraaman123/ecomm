import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
