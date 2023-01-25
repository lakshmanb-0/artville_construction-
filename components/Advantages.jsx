import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Advantages = ({ data }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    data.id == 0 && setShow(true);
  }, []);
  return (
    <>
      <section className="grid sm:grid-cols-3 px-5 py-3 border-b sm:border-y border-borderColor gap-4 ">
        <p className="text-lg">{data.category}</p>
        <div className="flex items-center justify-between space-x-10 col-span-2">
          <h4 className="text-xl font-semibold">{data.heading}</h4>
          {show ? (
            <AiOutlineMinus
              onClick={() => setShow(!show)}
              className="text-3xl cursor-pointer active:scale-95"
            />
          ) : (
            <AiOutlinePlus
              onClick={() => setShow(!show)}
              className="text-3xl cursor-pointer active:scale-95"
            />
          )}
        </div>
      </section>

      {show && (
        <section className="grid lg:grid-cols-3 lg:px-3 gap-4 ">
          <Image
            src={data.image}
            alt={data.heading}
            width={1920}
            height={1080}
            className="w-full h-[20rem] object-cover"
          />

          <p className="px-5 lg:col-span-2">{data.overview}</p>
        </section>
      )}
    </>
  );
};

export default Advantages;
