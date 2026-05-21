const STORAGE_KEY = "citas";

export const obtenerCitas = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const guardarCitas = (citas) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(citas)
  );
};

export const agregarCita = (cita) => {

  const citas = obtenerCitas();

  citas.push(cita);

  guardarCitas(citas);
};

export const eliminarCita = (id) => {

  const citas = obtenerCitas();

  const nuevasCitas =
    citas.filter((cita) => cita.id !== id);

  guardarCitas(nuevasCitas);

  return nuevasCitas;
};