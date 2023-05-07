import Link from "next/link";

const MenuItems = () => {
  return (
    <nav className="text-[1.3rem] font-bold leading-[2.5rem] tracking-[0.2rem] ">
      <ul className="flex flex-col gap-[1.6rem] sm:flex-row sm:gap-[3.4rem]">
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/headphones"}>HEADPHONES</Link>
        </li>
        <li>
          <Link href={"/speakers"}>SPEAKERS</Link>
        </li>
        <li>
          <Link href={"/earphones"}>EARPHONES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItems;
