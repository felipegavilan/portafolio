import IconFacebook from "@/pages/assets/iconFacebook";
import IconGit from "@/pages/assets/iconGit";
import IconLinkedin from "@/pages/assets/iconLinkedin";
import IconTwitter from "@/pages/assets/iconTwitter";

export default function ContactLinks() {
  return (
    <div className="flex flex-row space-x-10 pt-4 md:space-x-16 items-center mb-10 animate-bounce animate-infinite animate-duration-1000 animate-delay-[10ms] animate-ease-in-out">
      <div className="hover:bg-blue-200 hover:rounded ">
        <a
          href="https://www.linkedin.com/in/felipe-gavilan-b80348aa/"
          target="_blank"
        >
          <IconLinkedin />
        </a>
      </div>
      <div className="hover:bg-blue-200 hover:rounded">
        <a 
        href="https://github.com/felipegavilan"
        target="_blank">
          <IconGit />
        </a>
      </div>
      <div className="hover:bg-blue-200 hover:rounded">
        <a 
        href="https://www.facebook.com/felipegaviilan"
        target="_blank"
        className="hover:bg-blue-200 hover:rounded"
        >
          <IconFacebook />
        </a>
      </div>
      <div className="hover:bg-blue-200 hover:rounded">
        <a 
        href="https://twitter.com/felipegaviilann"
        target="_blank">
          <IconTwitter />
        </a>
      </div>
    </div>
  );
}
