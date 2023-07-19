import Link from "next/link";

const MenuItems = () => {
  return (
    <nav className="text-[1.3rem] font-bold leading-[2.5rem] tracking-[0.2rem] ">
      <ul className="flex flex-col gap-[1.6rem] sm:flex-row sm:gap-[3.4rem]">
        <li>
          <Link
            className="transition-all duration-300 hover:text-[#D87D4A]"
            href={"/"}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-[#D87D4A]"
            href={"/headphones"}
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-[#D87D4A]"
            href={"/speakers"}
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            className="transition-all duration-300 hover:text-[#D87D4A]"
            href={"/earphones"}
          >
            EARPHONES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItems;
