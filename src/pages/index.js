import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-4">
      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Felipe Gavilan
            </h2>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl m-2">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 m-2">
            Soy un apasionado desarrollador web Full Stack Junior de 24 años,
            proveniente de Argentina. Estoy constantemente buscando nuevos desafíos y
            oportunidades laborales que me permitan seguir aprendiendo y
            creciendo en el desarrollo de aplicaciones. Poseo una sólida base de
            conocimientos y una capacidad excepcional para aprender rápidamente.
            Siempre estoy dispuesto a enfrentar nuevos retos y continuar mi
            crecimiento en el fascinante mundo de la tecnología. Mi dedicación,
            pasión y habilidades destacadas me impulsan a seguir aprendiendo y
            desarrollándome constantemente en el campo de las tecnologías de la
            información.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          className="block w-auto rounded-full"
          src="https://avatars.githubusercontent.com/u/95661595?s=400&u=6a2fd2fd79cf06e4d341e543b2f67d07a90d7901&v=4"
          alt="profile"
        />
      </div>
    </div>
  );
}
