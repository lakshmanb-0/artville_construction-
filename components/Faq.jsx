import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = ({ data }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    data.id == 0 && setShow(true);
  }, []);

  return (
    <>
      <div className="flex justify-between my-3 px-1 py-2 border-y border-borderColor">
        <h4 className="text-lg font-semibold">{data.heading}</h4>
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
      {show && <p className="py-2">{data.overview}</p>}
    </>
  );
};

export default Faq;
