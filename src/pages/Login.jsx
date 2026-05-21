import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (dni === "12345678" && password === "1234") {

      sessionStorage.setItem("usuarioLogueado", dni);
      sessionStorage.setItem("nombreUsuario", "Paciente EsSalud");

      navigate("/menu");

    } else {

      alert("DNI o contraseña incorrectos");

    }
  };

  return (
    <div className="login-body">

      <div className="institutional-header">
        <div className="container">

          <img
            src="https://placehold.co/150x50/004a99/white?text=EsSalud+Logo"
            alt="EsSalud Logo"
            className="logo-essalud"
          />

        </div>
      </div>

      <div className="login-container">

        <div className="login-card">

          <div className="login-header">
            <h2>Acceso Smart Shift</h2>
            <p>Ingresa con tu DNI y contraseña</p>
          </div>

          <form onSubmit={handleLogin}>

            <div className="input-group">

              <input
                type="text"
                placeholder="Número de DNI"
                maxLength="8"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
              />

            </div>

            <div className="input-group">

              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            <button type="submit" className="btn-login">
              Ingresar
            </button>

          </form>

          <button
            className="btn-back"
            onClick={() => navigate("/")}
          >
            Volver atrás
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;