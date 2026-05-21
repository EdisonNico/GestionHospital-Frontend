import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Reservar() {

  const navigate = useNavigate();

  const [especialista, setEspecialista] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");

  const guardarReserva = (e) => {

    e.preventDefault();

    const nuevaCita = {
      id: Date.now(),
      especialista,
      ubicacion,
      fecha,
      horario,
    };

    const citas =
      JSON.parse(localStorage.getItem("citas")) || [];

    citas.push(nuevaCita);

    localStorage.setItem(
      "citas",
      JSON.stringify(citas)
    );

    alert("Cita reservada correctamente");

    navigate("/citas");
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

      <main className="reservar-main">

        <div className="container">

          <div className="form-card">

            <div className="form-header">

              <h2>Reservar Nueva Cita</h2>

            </div>

            <form onSubmit={guardarReserva}>

              <div className="form-group">

                <label>Especialista</label>

                <select
                  value={especialista}
                  onChange={(e) => setEspecialista(e.target.value)}
                  required
                >
                  <option value="">Seleccione</option>
                  <option value="Cardiología">
                    Cardiología
                  </option>

                  <option value="Pediatría">
                    Pediatría
                  </option>

                  <option value="Dermatología">
                    Dermatología
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>Ubicación</label>

                <select
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                  required
                >
                  <option value="">Seleccione</option>

                  <option value="Comas">
                    Comas
                  </option>

                  <option value="San Miguel">
                    San Miguel
                  </option>

                  <option value="Surco">
                    Surco
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>Fecha</label>

                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />

              </div>

              <div className="form-group">

                <label>Horario</label>

                <input
                  type="time"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  required
                />

              </div>

              <div className="form-actions">

                <button
                  type="button"
                  className="btn-back"
                  onClick={() => navigate("/menu")}
                >
                  Volver
                </button>

                <button
                  type="submit"
                  className="btn-confirm"
                >
                  Confirmar
                </button>

              </div>

            </form>

          </div>

        </div>

      </main>

    </div>

  );
}

export default Reservar;