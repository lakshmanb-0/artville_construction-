import Image from "next/image";

export const LastProjects = () => {
  return (
    <main className="max_width px-5 mb-10">
      <h1 className="text-4xl text-center md:text-left mb-5 font-bold">
        OUR LAST PROJECTS
      </h1>
      <section className="grid justify-items-center  space-x-3 md:grid-cols-2 xl:grid-cols-3">
        <div className="text-xl text-lightblack ">
          In recent years, we have developed a number of projects that meet
          modern standards of beauty and convenience. At the same time, we are
          different from others. Our specialists think through every detail.
        </div>
        <div className="mt-10 border-b border-borderColor px-4 py-4 sm:border rounded max-w-[27rem]">
          <h6 className="text-xl font-semibold text-black ">CITY OF DREAMS</h6>
          <Image
            src="https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="City of Dreams"
            width={1000}
            height={200}
            className="object-cover rounded-full h-[20rem] w-[20rem] mx-auto my-5"
          />
          <h6 className="font-semibold text-lg">From 115 000$</h6>
          <p className="text-black">Square 52-124 km2</p>
          <p className="my-3 text-lg">
            Spaces are created using the latest and greatest technology. These
            houses will not become. obsolete after many years.
          </p>
        </div>
        <section className="flex flex-col md:col-span-2 xl:col-span-1 ">
          <div className="mt-10 border-b border-borderColor px-4 py-4 sm:border rounded max-w-[27rem] mb-10">
            <h6 className="text-xl font-semibold text-black ">NEW PLAZA</h6>
            <Image
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80"
              alt="NEW PLAZA"
              width={1000}
              height={200}
              className="object-cover rounded-full h-[20rem] w-[20rem] mx-auto my-5"
            />
            <h6 className="font-semibold text-lg">FROM 82 000$</h6>
            <p className="my-3 text-lg">
              A modern project, made in bright colors in environmentally
              friendly materials.
            </p>
          </div>
          <button className="seemorebtn hover:scale-95">SEE ALL</button>
        </section>
      </section>
    </main>
  );
};
