import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [show, setShow] = useState("QUALITY");

  const data = [
    {
      id: 1,
      name: "QUALITY",
      overview:
        "The quality, functional and operational features of a new building depend on the material from which it is built. The building material affects the possibility of implementing standard and non-standard layouts, the number of floors of the building and other architectural features. When choosing an apartment in a new building, pay special attention to what the building is made of PROFESSIONALISM",
      image:
        "https://images.unsplash.com/photo-1484861671664-4ebd42ced711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      name: "LEISURE",
      overview: `As a commercial framing contractor, Quality Buildings utilizes the most advanced technology to stay on the cutting edge of innovation and create a better, more efficient, and safer way to get a project done. By using pre-fabricated building components, you benefit from simultaneous construction. As the grading and foundation crews are working to prepare the site, we are working too, which reduces the downtime and ultimately the cost throughout the construction project.`,
      image:
        "https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 3,
      name: "BIG SPACE",
      overview:
        "Building things for space is a uniquely complicated challenge. All of the tools and supplies required need to be small enough to fit on a rocket and strong enough that they won’t break. Likewise, the heavy machinery we would typically use for construction projects, like carry deck cranes and scissor lifts, aren’t outfitted to work anywhere other than Earth.",
      image:
        "https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    },
    {
      id: 4,
      name: "PARKS",
      overview:
        "Parks and recreation facilities provide essential services that positively impact our community’s economic, environmental, and social well-being. North Point Builders understands that these parks and recreational spaces increase property value, promote environmental conservation, and enhance physical and mental wellness",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  const handleData = (event) => {
    data.map((item) => {
      item.name === event && setShow(event);
    });
  };
  return (
    <main className="max_width px-4 mb-10 grid md:grid-cols-3 lg:grid-cols-4 gap-8 lg:mt-5">
      <section className="lg:col-span-2">
        <h1 className="text-5xl mb-5">SERVICES</h1>
        <div className="flex justify-between md:flex-col h-fit border-y border-borderColor md:border-y">
          {data.map((item) => (
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

      {data.map(
        (item) =>
          item.name === show && (
            <section key={item.id} className="md:col-span-2">
              <p className=" mb-5">{item.overview}</p>
              <Image
                src={item.image}
                alt="Loading..."
                width={1920}
                height={1080}
                className="object-cover w-full h-[20rem]"
              />
            </section>
          )
      )}
    </main>
  );
};

export default Services;
