import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Reservar from "./pages/Reservar";
import Citas from "./pages/Citas";

import "./styles.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/reservar"
          element={<Reservar />}
        />

        <Route
          path="/citas"
          element={<Citas />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;