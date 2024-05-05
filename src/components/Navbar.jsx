import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 sticky top-0">
      <div className="align-element py-2 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-5">
        <h2 className="text-3xl font-bold text-zinc-50">
          Web<span className="text-zinc-400">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide text-zinc-50 hover:text-zinc-400"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
