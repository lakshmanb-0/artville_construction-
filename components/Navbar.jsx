import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { navAnimate } from "../motion";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const Path = router.asPath;
  const navbar = ["home", "about Us", "our Projects", "plaza", "contacts"];

  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth <= 1023 && setHamburger(true);
    window.onresize = function () {
      if (window.innerWidth <= 1023) {
        setHamburger(true);
      } else {
        setHamburger(false);
        setNav(false);
      }
    };
  }, []);

  return (
    <motion.div
      variants={navAnimate}
      initial="hidden"
      whileInView="show"
      className="fixed top-0 bg-white z-50 w-full "
    >
      <nav className="border-b-2 border-borderColor flex justify-between items-center max_width px-4 py-4 ">
        <div className="flex space-x-3 items-center">
          <div className="rounded-full bg-red h-8 w-8 " />
          <Link href="/" className="text-2xl text-black">
            ARTVILLE
          </Link>
        </div>
        {hamburger && !nav ? (
          <RiMenu3Line
            onClick={() => setNav(!nav)}
            className="cursor-pointer flex text-2xl"
          />
        ) : nav ? (
          <RiCloseLine
            onClick={() => setNav(!nav)}
            className="cursor-pointer flex text-3xl"
          />
        ) : (
          ""
        )}

        <div
          className={
            nav
              ? `absolute right-0 top-[100%] bg-white space-y-3 p-5 pl-6 shadow-lg flex flex-col`
              : `hidden gap-12 justify-between lg:flex`
          }
        >
          {navbar.map((item) => (
            <Link
              href={item == "home" ? "/" : `/${item.replace(" ", "")}`}
              key={item}
              className={`navLi ${
                Path == "/" && item == "home"
                  ? "font-bold"
                  : item.replace(" ", "") === Path.replace("/", "") &&
                    "font-bold"
              }`}
            >
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
