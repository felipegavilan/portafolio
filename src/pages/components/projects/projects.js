import IconDemo from "@/pages/assets/iconDemo";
import IconGit from "@/pages/assets/iconGit";
import { useState } from "react";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const toggleExpansion2 = () => {
    setExpanded2(!expanded2);
  };
  
  return (
    <div className="flex flex-col space-y-2 space-x-2">
      <div className="flex justify-center">
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-auto md:rounded-none md:rounded-l-lg"
            src="mombaby.png"
            alt="mom"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mom, Baby & Home
            </h5>
            <div
              id="links"
              className="flex flex-row items-center justify-center max-w-xl space-x-8 mt-4 "
            >
              <div className="hover:bg-black hover:rounded">
                <a
                  href="https://github.com/Henry-Proyecto-Firnal-P-10b/vite-front-PF"
                  target="_blank"
                >
                  <IconGit />
                </a>
              </div>
              <div className="hover:bg-black hover:rounded">
                <a href="https://mombabyandhome.netlify.app/" target="_blank">
                  <IconDemo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96  md:h-auto md:w-auto md:rounded-none md:rounded-l-lg"
            src="foodapp.jfif"
            alt="mom"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Food App
            </h5>
            <p
              className={`line-clamp-6 ${
                expanded2 ? "line-clamp-none" : "line-clamp-6"
              } mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify`}
            >
              La plataforma permite a los usuarios buscar, crear y
              filtrar recetas según diferentes tipos de dietas y combinaciones
              de filtros. El sitio web utiliza tecnologías como React, Redux,
              JavaScript, CSS, Node.js, Express, Sequelize y PostgreSQL para
              brindar una experiencia interactiva y eficiente. Además, se
              integra con una API para obtener datos actualizados y enriquecer
              la base de recetas disponibles. Este proyecto demuestra mis
              habilidades en el desarrollo web front-end y back-end, así como mi
              capacidad para trabajar con tecnologías modernas y frameworks
              populares.
            </p>
            {!expanded2 && (
              <button className="text-blue-500" onClick={toggleExpansion2}>
                Ver más
              </button>
            )}
            {expanded2 && (
              <button className="text-blue-500" onClick={toggleExpansion2}>
                Ver menos
              </button>
            )}
            <div
              id="links"
              className="flex flex-row items-center justify-center max-w-xl space-x-8 mt-4 "
            >
              <div className="hover:bg-black hover:rounded">
                <a
                  href="https://github.com/felipegavilan/FoodPI"
                  target="_blank"
                >
                  <IconGit />
                </a>
              </div>
              <div className="hover:bg-black hover:rounded">
                <a href="https://food-pi-opal.vercel.app/" target="_blank">
                  <IconDemo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-auto md:rounded-none md:rounded-l-lg"
            src="todoapp.png"
            alt="mom"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              TODO APP
            </h5>
            <p
              className={`line-clamp-6 ${
                expanded2 ? "line-clamp-none" : "line-clamp-6"
              } mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify`}
            >
              Establecé tus tareas diarias y tene un mejor control de tus
              actividades, donde podes marcar los cumplidos, ver los que siguen
              activos o todos. Tambien con la funcionalidad de limpiar todos los
              que ya estan completados.
            </p>
            <div
              id="links"
              className="flex flex-row items-center justify-center max-w-xl space-x-8 mt-4 "
            >
              <div className="hover:bg-black hover:rounded">
                <a
                  href="https://github.com/felipegavilan/toDoApp"
                  target="_blank"
                >
                  <IconGit />
                </a>
              </div>
              <div className="hover:bg-black hover:rounded">
                <a href="https://to-do-app-one-green.vercel.app/" target="_blank">
                  <IconDemo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
