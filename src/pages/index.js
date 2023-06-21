import { Inter } from "next/font/google";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import ContactLinks from "./components/contactLinks/contactLinks";

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
      <header className="flex flex-1 items-center justify-center">
        <section className="mx-auto max-w-2xl lg:mx-0 ">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-fade-left animate-once animate-duration-1000  animate-ease-in-out">
              Felipe Gavilan
            </h2>
          </div>
          <h2 className="text-2xl font-bold pt-2 tracking-tight text-white sm:text-3xl m-2 animate-fade-right animate-once animate-duration-1000  animate-ease-in-out">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 m-2 text-justify animate-fade-right animate-once animate-duration-1000  animate-ease-in-out">
            Soy un apasionado desarrollador web Full Stack Junior de 24 años,
            proveniente de Argentina. Estoy buscando nuevos desafíos y
            oportunidades laborales que me permitan seguir aprendiendo y
            creciendo en el desarrollo de aplicaciones. Poseo una sólida base de
            conocimientos y una capacidad excepcional para aprender rápidamente.
            Siempre estoy dispuesto a enfrentar nuevos retos y continuar mi
            crecimiento en el fascinante mundo de la tecnología. Mi dedicación,
            pasión y habilidades destacadas me impulsan a seguir aprendiendo y
            desarrollándome constantemente en el campo de las tecnologías de la
            información.
          </p>
        </section>
      </header>
      <div className="flex flex-1 items-center pt-3 justify-center animate-jump-in animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out ">
        <img
          className="block w-80 rounded-full hover:border-2 border-purple-500"
          src="felipe.jpg"
          alt="profile"
        />
      </div>
      <div className="flex items-center justify-center flex-col mt-2 animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Tecnologías
        </h2>
      </div>
      <Skills />
      <div className="flex justify-center mt-8">
        <div className="flex w-44 animate-fade-up animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-pulse animate-infinite animate-duration-1000 animate-delay-[10ms] animate-ease-in-out"
            onClick={handlerDownload}
          >
            Descargar CV
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col pt-2 animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Mis projectos
        </h2>
      </div>
      <div
        id="projectos"
        className="flex justify-center mt-1 animate-jump-in animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out"
      >
        <Projects />
      </div>
      <div className="flex flex-1 flex-col pt-4 justify-center items-center" >
      <div className="flex items-center justify-center flex-col animate-fade animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mt-5 mb-5">
          Mis Redes sociales
        </h2>
      </div>
        <ContactLinks/>
      </div>
    </div>
  );
}
