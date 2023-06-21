import { IconDemo, IconGit } from "@/pages/assets/iconsSVG";
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
    <div className="flex flex-col space-y-2 xl:grid grid-cols-2  xl:space-x-3 lg:space-y-0 lg:flex lg:flex-row ">
      <div className="flex justify-center">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96 w-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:h-80 hover:md:w-60"
            src="mombaby.png"
            alt="mom"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Mom, Baby & Home
            </h5>
            <p
              className={`line-clamp-6 ${
                expanded ? "line-clamp-none" : "line-clamp-6"
              } mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify`}
            >
              Mom Baby & Home es una tienda online para madres primerizas que
              ofrece una amplia gama de productos relacionados con el embarazo,
              la lactancia y el cuidado del bebé. Nuestra plataforma brinda
              funcionalidades avanzadas de clasificación y filtrado por
              categorías y precios para una experiencia de compra personalizada.
              Además, permite a los usuarios evaluar y dejar reseñas de los
              productos después de realizar el pago. Implementamos autenticación
              de terceros y notificaciones por correo electrónico para
              garantizar la seguridad y mantener a los clientes informados sobre
              su cuenta y pedidos realizados. También contamos con una interfaz
              de administrador para gestionar productos y usuarios de manera
              eficiente. Tecnologías utilizadas: React, CSS, MaterialUI, Redux
              toolkit, Nodejs y Firebase.
            </p>
            {!expanded && (
              <button className="text-blue-500" onClick={toggleExpansion}>
                Ver más
              </button>
            )}
            {expanded && (
              <button className="text-blue-500" onClick={toggleExpansion}>
                Ver menos
              </button>
            )}
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
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96 w-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:h-80 hover:md:w-60"
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
              El proyecto consiste en el desarrollo de una página web de recetas
              de comidas. La plataforma permite a los usuarios buscar, crear y
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
      <div className="flex justify-center lg:pr-3 lg:pt-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full rounded-t-lg h-96 w-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg md:h-80 hover:md:w-60"
            src="portafolio.png"
            alt="mom"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Portafolio
            </h5>
            <p
              className={'mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify'}
            >
              Mi portafolio web. Aquí muestro mis proyectos y redes sociales.
              Implementé Next.js y Tailwind CSS para crear una experiencia moderna y
              atractiva. Explora mis proyectos y conéctate conmigo en las redes
              sociales. ¡Gracias por visitar!
            </p>
            <div
              id="links"
              className="flex flex-row items-center justify-center max-w-xl space-x-8 mt-4 "
            >
              <div className="hover:bg-black hover:rounded">
                <a
                  href="https://github.com/felipegavilan/portafolio"
                  target="_blank"
                >
                  <IconGit />
                </a>
              </div>
              <div className="hover:bg-black hover:rounded">
                <a href="#">
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
