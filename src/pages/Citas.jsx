import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Citas() {

  const navigate = useNavigate();

  const [citas, setCitas] = useState([]);

  useEffect(() => {

    const citasGuardadas =
      JSON.parse(localStorage.getItem("citas")) || [];

    setCitas(citasGuardadas);

  }, []);

  const eliminarCita = (id) => {

    const nuevasCitas =
      citas.filter((cita) => cita.id !== id);

    setCitas(nuevasCitas);

    localStorage.setItem(
      "citas",
      JSON.stringify(nuevasCitas)
    );
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

        </div>

      </div>

      <main className="citas-main">

        <div className="container">

          <div className="citas-header">

            <h2>Mis Próximas Citas</h2>

            <button
              className="btn-back"
              onClick={() => navigate("/menu")}
            >
              Volver
            </button>

          </div>

          <div className="lista-citas">

            {citas.length === 0 ? (

              <div className="empty-state">

                <p>No tienes citas programadas</p>

              </div>

            ) : (

              citas.map((cita) => (

                <div
                  className="cita-card"
                  key={cita.id}
                >

                  <div className="cita-info">

                    <h3>{cita.especialista}</h3>

                    <p>{cita.ubicacion}</p>

                    <p>{cita.fecha}</p>

                    <p>{cita.horario}</p>

                  </div>

                  <div className="cita-actions">

                    <button
                      className="btn-delete"
                      onClick={() => eliminarCita(cita.id)}
                    >
                      Eliminar
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </main>

    </div>

  );
}

export default Citas;