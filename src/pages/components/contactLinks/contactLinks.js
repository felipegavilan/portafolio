import IconMail from "@/pages/assets/iconMail";
import IconGit from "@/pages/assets/iconGit";
import IconLinkedin from "@/pages/assets/iconLinkedin";
import IconTwitter from "@/pages/assets/iconTwitter";

export default function ContactLinks() {
  return (
    <div className="flex flex-row space-x-10  md:space-x-16 items-center animate-bounce animate-infinite animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
      <div className="hover:bg-gradient-to-r hover:from-violet-200 hover:to-fuchsia-400 hover:rounded ">
        <a
          href="https://www.linkedin.com/in/felipe-gavilan-b80348aa/"
          target="_blank"
        >
          <IconLinkedin />
        </a>
      </div>
      <div className="hover:bg-gradient-to-r hover:from-violet-200 hover:to-fuchsia-400 hover:rounded">
        <a href="https://github.com/felipegavilan" target="_blank">
          <IconGit />
        </a>
      </div>
      <div className="hover:bg-gradient-to-r hover:from-violet-200 hover:to-fuchsia-400 hover:rounded">
        <a
          href="mailto:felipegaviilan@gmail.com"
          target="_blank"
        >
          <IconMail />
        </a>
      </div>
    </div>
  );
}
