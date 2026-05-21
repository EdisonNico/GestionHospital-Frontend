import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const userName = sessionStorage.getItem("nombreUsuario");

  const cerrarSesion = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <div className="institutional-header">
        <div className="container">
          <img
            src="https://placehold.co/150x50/004a99/white?text=EsSalud+Logo"
            alt="EsSalud Logo"
            className="logo-essalud"
          />

          <div className="user-info">
            <span>{userName}</span>
          </div>
        </div>
      </div>

      <main className="menu-main">
        <div className="container">
          <div className="welcome-banner">
            <h1>Smart Shift</h1>
            <p>Gestiona tus citas médicas</p>
          </div>

          <div className="menu-buttons">
            <button
              className="menu-card"
              onClick={() => navigate("/reservar")}
            >
              <div className="menu-text">
                <h3>Reservar Cita</h3>
                <p>Agenda una nueva atención médica</p>
              </div>
            </button>

            <button
              className="menu-card"
              onClick={() => navigate("/citas")}
            >
              <div className="menu-text">
                <h3>Ver Próximas Citas</h3>
                <p>Consulta y gestiona tus turnos</p>
              </div>
            </button>
          </div>

          <button
            className="btn-logout-full"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        </div>
      </main>
    </div>
  );
}

export default Menu;