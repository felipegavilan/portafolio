import { LogoJavascript, LogoHtml, LogoCss3 } from "@/pages/assets/logos";
import logoReact from '../../../../public/react.webp'
import logoNext from '../../../../public/nextjs.webp'
import logoExpress from '../../../../public/express.png'
import logoSequelize from '../../../../public/sequelize.png'
import logoPostgre from '../../../../public/postgre.png'
import logoFirebase from '../../../../public/firebase.png'
import logoMui from '../../../../public/mui.png'
import logoTailwind from '../../../../public/tailwind.png'
import logoRedux from '../../../../public/redux.png'
import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-1 items-center justify-center m-4">
        <div className="grid grid-cols-3 content-center gap-2  space-x-3 md:grid-cols-6 lg:grid-cols-12 lg:gap-1 ">
          <div className="w-16 ml-3">
            <Image src={logoReact} alt="logoReact" />
          </div>
          <div className="w-16">
            <LogoJavascript />
          </div>
          <div className="w-16">
            <LogoCss3 />
          </div>
          <div className="w-16">
          <Image src={logoExpress} alt="logoExpress" />
          </div>
          <div className="w-16">
          <Image src={logoSequelize} alt="logoSequelize" />
          </div>
          <div className="w-16">
          <Image src={logoPostgre} alt="logoPostgre" />
          </div>
          <div className="w-16">
            <LogoHtml />
          </div>
          <div className="w-16">
          <Image src={logoMui} alt="logoMui" />
          </div>
          <div className="w-16">
          <Image src={logoTailwind} alt="logoTailwind" />
          </div>
          <div className="w-16">
          <Image src={logoNext} alt="logoNext" />
          </div>
          <div className="w-16">
          <Image src={logoFirebase} alt="logoFirebase" />
          </div>
          <div className="w-16">
          <Image src={logoRedux} alt="logoRedux" />
          </div>
        </div>
    </div>
  );
}
