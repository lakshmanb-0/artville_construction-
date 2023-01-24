import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="max_width grid md:grid-cols-4 px-4 ">
        <div className="flex space-x-3 items-start col-span-2 mt-4">
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
      </footer>
      <span className="w-full text-center py-2 flex  justify-center text-lightblack/50">
        Copyright &#169; 2023 By Artville
      </span>
    </>
  );
};

export default Footer;
