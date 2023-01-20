function Navbar() {
  return (
    <main className="fixed top-0 bg-white z-50 w-full ">
      <nav className="border-b-2 border-lightblack flex justify-between items-center max-w-[1600px] mx-auto px-4 py-4">
        <div className="flex space-x-3 items-center">
          <div className="rounded-full bg-red h-8 w-8 " />
          <h1 className="text-2xl text-black">ARTVILLE</h1>
        </div>
        <ul className="flex gap-12 justify-between">
          <li className="navli hover:scale-125  ">ABOUT US</li>
          <li className="navli hover:scale-125  ">OUR PROJECTS</li>
          <li className="navli hover:scale-125  ">GALLEY</li>
          <li className="navli hover:scale-125  ">PARTNERS</li>
          <li className="navli hover:scale-125  ">CONTACTS</li>
        </ul>
      </nav>
    </main>
  );
}

export default Navbar;
