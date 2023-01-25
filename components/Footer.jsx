import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max_width pt-10 px-4">
      <section className="mb-8 space-y-4">
        <h1 className="font-bold text-5xl ">ANY QUESTION?</h1>
        <div className="flex items-center gap-7 text-sm">
          <input
            type="email"
            placeholder="Number or Email"
            className="outline-0 border-b border-borderColor placeholder:text-lightBlack py-1"
          />
          <button className="py-1 text-black border-b border-black hover:scale-95">
            REQUEST A CALL
          </button>
        </div>
      </section>
      <section className="grid md:grid-cols-4">
        <div className="flex space-x-3 col-span-2">
          <div className="rounded-full bg-red h-8 w-8 " />
          <h1 className="text-2xl text-black">ARTVILLE</h1>
        </div>
        <div className="footer">
          <ul>
            <Link href="/">HOME</Link>
            <Link href="/aboutUs">ABOUT US</Link>
            <Link href="/ourProjects">OUR PROJECTS</Link>
          </ul>
          <ul>
            <Link href="/plaza">PLAZA</Link>
            <Link href="/contacts">CONTACTS</Link>
          </ul>
          <ul>
            <li>FACEBOOK</li>
            <li>INSTAGRAM</li>
            <li>LINKEDIN</li>
          </ul>
        </div>
      </section>
      <span className="w-full py-2 flex justify-center text-lightBlack/50">
        Copyright &#169; 2023 By Artville
      </span>
    </footer>
  );
};

export default Footer;
