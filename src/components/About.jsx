import aboutSvg from "../assets/hand-coding-animate.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-zinc-600 mt-8 leading-loose">
            As a React-focused front-end developer, I'm passionate about
            crafting beautiful, interactive experiences while constantly
            learning and exploring the evolving web development landscape.
            Building user interfaces with React is my playground, and I thrive
            on transforming ideas into dynamic applications. Collaboration and
            knowledge sharing are crucial to me, and my love for continuous
            learning ensures I bring fresh perspectives and innovative solutions
            to every project.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
