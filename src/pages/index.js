import { Inter } from "next/font/google";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactLinks from "./components/contactLinks/contactLinks";
import Foooter from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handlerDownload = () => {
    const link = document.createElement("a");
    link.href = "felipeGavilanCV.pdf";
    link.download = "FelipeGavilanCV";
    link.click();
  };
  return (
    <div className="m-4">
      <div className="flex flex-row mt-10 max-xl:flex-col mb-10 space-y-10">
        <header className="flex flex-1 items-center justify-center">
          <section className="mx-auto max-w-2xl lg:mx-0 max-xl:items-center">
            <div className="flex items-initial justify-center flex-col max-md:items-center">
              <h1 className="text-4xl font-bold tracking-tight text-fuchsia-400 hover:text-violet-500 sm:text-6xl animate-fade-left animate-once animate-duration-1000  animate-ease-in-out">
                Felipe Gavilan
              </h1>
            </div>
            <h2 className="text-2xl font-bold pt-4 mt-10 tracking-tight text-white italic sm:text-3xl m-2 animate-fade-right animate-once animate-duration-1000  animate-ease-in-out">
              Full Stack Developer
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 m-2 text-justify animate-fade-right animate-once animate-duration-1000  animate-ease-in-out">
              Desarrollador web Full Stack Junior de 24 años. En busca de nuevos
              desafíos y oportunidades que me permitan seguir creciendo en el
              desarrollo de aplicaciones.
            </p>
            <div className=" grid grid-cols-2 mt-10 max-md:flex max-md:flex-col max-md:items-center max-md:space-y-10">
              <button
                className="flex w-40 justify-center rounded bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-violet-200 hover:to-fuchsia-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-pulse animate-infinite animate-duration-1000 animate-delay-[10ms] animate-ease-in-out"
                onClick={handlerDownload}
              >
                Descargar CV
              </button>
              <ContactLinks />
            </div>
          </section>
        </header>
        <div className="flex flex-1 items-center  pt-3 justify-center animate-jump-in animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out ">
          <img
            className="block w-64 rounded-full hover:border-2 border-fuchsia-400"
            src="Felipe.jpg"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-16 animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Tecnologías
        </h2>
      </div>
      <Skills />
      <div className="flex items-center justify-center flex-col pt-2 animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Proyectos
        </h2>
      </div>
      <div
        id="projectos"
        className="flex justify-center mt-1 animate-jump-in animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out"
      >
        <Projects />
      </div>
      <div className="flex flex-1 flex-col pt-4 justify-center items-center">
        <div className="flex items-center justify-center flex-col animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Redes sociales
          </h2>
        </div>
        <ContactLinks />
      </div>
      <Foooter/>
    </div>
  );
}
