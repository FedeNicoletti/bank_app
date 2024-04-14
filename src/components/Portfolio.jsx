import { useState } from "react";
import styles from "../style";

export default function Portfolio() {
  // Estado para almacenar el filtro seleccionado
  const [filtro, setFiltro] = useState("Todos");

  // Función para cambiar el filtro cuando se hace clic en un subtitulo
  const handleClick = (filtro) => {
    setFiltro(filtro);
  };

  // Lógica para filtrar las imágenes según el filtro seleccionado
  const filtrarImagenes = (imagen) => {
    if (filtro === "Todos") return true;
    // Reemplaza "imagen.alt" con el atributo correcto que deseas filtrar
    return imagen.alt.includes(filtro);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Botones de filtro */}
      <div className="flex space-x-4 mb-4">
        <button
          className={
            filtro === "Todos"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Todos")}
            style={{ color: "#e31c79" }}
          >
            Todos
          </p>
        </button>
        <button
          className={
            filtro === "Arquitectura y Diseño Comercial"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Arquitectura y Diseño Comercial")}
            style={{
              color:
                filtro === "Arquitectura y Diseño Comercial" ? "" : "#e31c79",
            }}
          >
            Arquitectura y Diseño Comercial
          </p>
        </button>
        {/* Repite lo mismo para los demás filtros */}
        <button
          className={
            filtro === "Acciones BTL y Eventos"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Acciones BTL y Eventos")}
            style={{
              color: filtro === "Acciones BTL y Eventos" ? "" : "#e31c79",
            }}
          >
            Acciones BTL y Eventos
          </p>
        </button>
        <button
          className={
            filtro === "Trade Marketing"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Trade Marketing")}
            style={{
              color: filtro === "Trade Marketing" ? "" : "#e31c79",
            }}
          >
            Trade Marketing
          </p>
        </button>
        <button
          className={
            filtro === "Producción y Logistica"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Producción y Logistica")}
            style={{
              color: filtro === "Producción y Logistica" ? "" : "#e31c79",
            }}
          >
            Producción y Logistica
          </p>
        </button>
        <button
          className={
            filtro === "Recursos Humanos"
              ? "text-white rounded px-4 py-2 bg-transparent"
              : "text-white rounded px-4 py-2 bg-transparent"
          }
        >
          <p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            onClick={() => handleClick("Recursos Humanos")}
            style={{
              color: filtro === "Recursos Humanos" ? "" : "#e31c79",
            }}
          >
            Recursos Humanos
          </p>
        </button>
      </div>

      {/* Imágenes filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imagenes.map(
          (imagen, index) =>
            // Aplica el filtro en cada imagen
            filtrarImagenes(imagen) && (
              <div key={index} className="space-y-2">
                <img
                  alt={imagen.alt}
                  className="aspect-4/3 object-cover rounded-lg overflow-hidden"
                  height={300}
                  src={imagen.src}
                  width={400}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

// Datos de las imágenes
const imagenes = [
  {
    alt: "Arquitectura y Diseño Comercial",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Acciones BTL y Eventos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Trade Marketing",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Producción y Logistica",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    alt: "Recursos Humanos",
    src: "https://images.pexels.com/photos/21038400/pexels-photo-21038400/free-photo-of-caminante-solitario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  // Agrega más imágenes con sus respectivos atributos alt y src
];
