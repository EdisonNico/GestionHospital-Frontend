import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="index-body">
      <div className="institutional-header">
        <div className="container">
          <img
            src="https://placehold.co/150x50/004a99/white?text=EsSalud+Logo"
            alt="EsSalud Logo"
            className="logo-essalud"
          />

          <p className="slogan">
            Seguridad Social para todos
          </p>
        </div>
      </div>

      <main className="index-main">
        <div className="hero-essalud">
          <div className="container">
            <h1>Smart Shift</h1>
            <p>Sistema Inteligente de Turnos EsSalud</p>
          </div>
        </div>

        <div className="container">
          <div className="card-grid">
            <button
              className="action-card"
              onClick={() => navigate("/login")}
            >
              <h3>Iniciar Sesión</h3>
              <p>Accede a tu cuenta Smart Shift</p>
            </button>

            <button
              className="action-card"
              onClick={() => navigate("/reservar")}
            >
              <h3>Reservar Cita</h3>
              <p>Agenda tu atención médica</p>
            </button>

            <button
              className="action-card"
              onClick={() => navigate("/citas")}
            >
              <h3>Sus Próximas Citas</h3>
              <p>Consulta tus turnos programados</p>
            </button>
          </div>
        </div>
      </main>

      <footer className="footer-essalud">
        <div className="container">
          <p>© 2025 EsSalud - Smart Shift</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;