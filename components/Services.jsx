import Image from "next/image";
import { useState } from "react";
import { services } from "../Data/data";

const Services = () => {
  const [show, setShow] = useState("QUALITY");

  const handleData = (event) => {
    services.map((item) => {
      item.name === event && setShow(event);
    });
  };
  return (
    <main className="max_width px-4 py-10 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
      <section className="lg:col-span-2">
        <h1 className="text-5xl mb-5">SERVICES</h1>
        <div className="flex justify-between md:flex-col border-y border-borderColor">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={(e) => handleData(e.target.textContent)}
              className={`cursor-pointer md:border-y border-borderColor py-2 ${
                item.name == show && "text-black font-bold border-black"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </section>

      {services.map(
        (item) =>
          item.name === show && (
            <section key={item.id} className="md:col-span-2">
              <p className=" mb-5">{item.overview}</p>
              <Image
                src={item.image}
                alt="Loading..."
                width={1920}
                height={1080}
                className="h-[20rem]"
              />
            </section>
          )
      )}
    </main>
  );
};

export default Services;
