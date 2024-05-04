import heroImg from "../assets/static-assets-animate.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-zinc-50">
            I'm Felipe
          </h1>
          <p className="mt-4 text-3xl text-zinc-300 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-4 text-3xl text-zinc-300 capitalize tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/Flying-Spaghetti-Monster69"
              target="_blank"
            >
              <FaGithubSquare className="h-8 w-8 text-zinc-50 hover:text-zinc-300 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-garzon-melguizo-0826971b5"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-zinc-50 hover:text-zinc-300 duration-300" />
            </a>
            <a href="https://twitter.com/FelipeG10017424" target="_blank">
              <FaTwitterSquare className="h-8 w-8 text-zinc-50 hover:text-zinc-300 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
