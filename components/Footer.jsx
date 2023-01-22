const Footer = () => {
  return (
    <footer className="max_width grid md:grid-cols-4 px-4 ">
      <div className="flex space-x-3 items-start col-span-2 mt-4">
        <div className="rounded-full bg-red h-8 w-8 " />
        <h1 className="text-2xl text-black">ARTVILLE</h1>
      </div>
      <div className="footer">
        <ul>
          <li>ABOUT US</li>
          <li>OUR PROJECTS</li>
          <li>GALLERY</li>
        </ul>
        <ul>
          <li>SALES</li>
          <li>PARTNERS</li>
          <li>CONTACTS</li>
        </ul>
        <ul>
          <li>FACEBOOK</li>
          <li>INSTAGRAM</li>
          <li>LINKEDIN</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
