import React from "react";
import styles from "../style";
import "./hero.css";

const Servicios = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Servicios
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Somos una agencia con más de 20 años desarrollando soluciones
          comerciales y creativas para todo tipo de empresas y eventos en
          Argentina. Un equipo multidisciplinario compuesto por licenciados en
          marketing y administración, diseñadores gráficos e industriales,
          fotógrafos y filmmakers, entre otros. La innovación es parte de
          nuestro core business. No entendemos límites o problemas: Siempre
          existe una solución. Respondemos ante todas las necesidades con
          velocidad y precisión.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="grid grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden transform transition-transform duration-500 ease-in-out group"
            >
              <div className=" group-hover:rotate-6">
                <img
                  src="https://images.pexels.com/photos/18114939/pexels-photo-18114939/free-photo-of-ciudad-francia-punto-de-referencia-paris.jpeg?auto=compress&cs=tinysrgb&w=150&lazy=load"
                  alt="billing"
                  className="w-full h-full object-cover pointer-events-none"
                />
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Titulo de la imagen
                </p>
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-10" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-4 bottom-4 blue__gradient" />
                {/* gradient end */}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out bg-black bg-opacity-75">
                <p className="text-white mb-3">Descripción del servicio</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
