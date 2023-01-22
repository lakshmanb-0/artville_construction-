import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setnav] = useState(false);
  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth <= 1023 && setHamburger(true);
    window.onresize = function () {
      if (window.innerWidth <= 1023) {
        setHamburger(true);
      } else {
        setHamburger(false);
        setnav(false);
      }
    };
  }, []);

  return (
    <main className="fixed top-0 bg-white z-50 w-full ">
      <nav className="border-b-2 border-borderColor flex justify-between items-center max_width px-4 py-4 ">
        <div className="flex space-x-3 items-center">
          <div className="rounded-full bg-red h-8 w-8 " />
          <h1 className="text-2xl text-black">ARTVILLE</h1>
        </div>
        {hamburger && !nav ? (
          <RiMenu3Line
            onClick={() => setnav(!nav)}
            className="cursor-pointer flex text-2xl"
          />
        ) : (
          ""
        )}
        {/* close icon  */}
        {nav && (
          <RiCloseLine
            onClick={() => setnav(!nav)}
            className="cursor-pointer flex text-3xl"
          />
        )}

        <ul
          className={
            nav
              ? `absolute right-0 top-[100%] bg-white space-y-3 p-5 pl-6 shadow-lg `
              : ` hidden  gap-12 justify-between lg:flex`
          }
        >
          <li className="navli">ABOUT US</li>
          <li className="navli">OUR PROJECTS</li>
          <li className="navli">GALLERY</li>
          <li className="navli">PARTNERS</li>
          <li className="navli">CONTACTS</li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
