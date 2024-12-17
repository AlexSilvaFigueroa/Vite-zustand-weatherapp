import { useState, useEffect } from "react";

export const useLocation = () => {
  const [coords, setCoords] = useState(null); // Estado para las coordenadas
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    // Función para solicitar ubicación
    const solicitarUbicacion = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoords({ latitude, longitude }); // Actualiza el estado con las coordenadas
          },
          (err) => {
            console.error("We had and error getting your location:", err);
            setError(err.message); // Guarda el mensaje de error
          }
        );
      } else {
        const mensaje = "geolocation is not available for this browser.";
        console.error(mensaje);
        setError(mensaje);
      }
    };

    solicitarUbicacion();
  }, []); // Ejecutar al montar el componente

  return { coords, error };
};
