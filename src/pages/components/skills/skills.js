import LogoHtml from "@/pages/assets/logoHtml";
import LogoCss3 from "@/pages/assets/logoCss3";
import LogoJavascript from "@/pages/assets/logoJavascript";
import logoReact from "../../../../public/react.webp";
import logoNext from "../../../../public/nextjs.webp";
import logoExpress from "../../../../public/express.png";
import logoSequelize from "../../../../public/sequelize.png";
import logoPostgre from "../../../../public/postgre.png";
import logoFirebase from "../../../../public/firebase.png";
import logoMui from "../../../../public/mui.png";
import logoTailwind from "../../../../public/tailwind.png";
import logoRedux from "../../../../public/redux.png";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-1 items-center justify-center m-8 animate-fade-up animate-once animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
      <div className="grid  max-sm:grid-cols-3 content-center gap-2 space-x-3 max-md:grid-cols-4 max-lg:grid-cols-6 lg:grid-cols-12 lg:gap-1 ">
        <div className="w-16 ml-3 hover:scale-125">
          <Image src={logoReact} alt="logoReact"/>
        </div>
        <div className="w-16 hover:scale-125">
          <LogoJavascript />
        </div>
        <div className="w-16 hover:scale-125">
          <LogoCss3 />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoExpress} alt="logoExpress" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoSequelize} alt="logoSequelize" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoPostgre} alt="logoPostgre" />
        </div>
        <div className="w-16 hover:scale-125">
          <LogoHtml />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoMui} alt="logoMui" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoTailwind} alt="logoTailwind" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoNext} alt="logoNext" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoFirebase} alt="logoFirebase" />
        </div>
        <div className="w-16 hover:scale-125">
          <Image src={logoRedux} alt="logoRedux" />
        </div>
      </div>
    </div>
  );
}
