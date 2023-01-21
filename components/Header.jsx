import Image from "next/image";

export const Header = () => {
  return (
    <main className="h-fit w-full pt-[5rem] mb-14 ">
      <h1 className=" text-[3rem] xl:text-7xl text-center px-3 text-black font-bold">
        WE BUILD LIKE FOR OURSELVES
      </h1>
      <Image
        src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        alt="header_banner"
        width={1920}
        height={1080}
        className="object-cover h-[25rem] lg:h-[35rem] my-4"
      />
      <div className="flex flex-col gap-8 justify-between px-4 md:flex-row items-end max-w-[1600px] mx-auto">
        <h6 className="text-xl max-w-[50rem]">
          We care about the comfort and safety of our customers. In the
          construction of houses we give preference to modern architecture. Your
          comfort and safety are our priority.
        </h6>
        <button className="seemorebtn">REQUEST A CALL</button>
      </div>
    </main>
  );
};
