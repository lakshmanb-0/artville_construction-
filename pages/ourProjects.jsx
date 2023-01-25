import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import { RiArrowDownCircleFill, RiArrowDownLine } from "react-icons/ri";

const ourProjects = () => {
  return (
    <>
      <Head>
        <title>Our Projects</title>
      </Head>
      <Navbar />
      <main className="max_width px-4 py-10">
        <h1 className="text-5xl pt-10 text-black">OUR PROJECTS</h1>
        <section className="ourProjects">
          <div className="header">
            <h1>City of dreams</h1>
            <h1>2022</h1>
          </div>
          <div className="gridTable">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              alt="image"
              width={1920}
              height={1080}
              className="rounded-full mx-auto w-[20rem] h-[20rem]"
            />
            <div className="flex flex-col">
              <h6>From 115 000 $</h6>
              <p>Square 52-124 km2</p>
              <span>
                Spaces are created using the latest and greatest technology.
                These houses will not become obsolete after many years.
              </span>
              <div className="flex gap-4 px-2 mt-auto h-[15rem] pt-4 mx-autos">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1633189993917-76940c971af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1577378663844-b674ad7e8695?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image"
              width={1920}
              height={1080}
              className="h-[30rem] md:col-span-2 lg:col-span-1"
            />
          </div>
          <button className="seeMoreBtn">LEARN MORE</button>
        </section>

        {/* new clouds  */}
        <section className="ourProjects">
          <div className="header">
            <h1>New clouds</h1>
            <h1>2021</h1>
          </div>
          <div className="gridTable">
            <Image
              src="https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <div className="flex flex-col">
              <h6>From 79 000 $</h6>
              <p>Square 48-112 km2</p>
              <span>
                The advantages of the residential complex are its own reservoir,
                stylish and ergonomic architecture, flats with terraces and
                private yards, and a park area with plants.
              </span>
              <button className="seeMoreBtn mt-auto pt-3">LEARN MORE</button>
            </div>
            <div className="flex h-[17rem] gap-4 px-2 md:col-span-2 lg:col-span-1 mx-auto">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1580628330485-5ff21de29e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="image"
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1629501517401-70bf9db5361a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="image"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new plaza  */}
        <section className="ourProjects">
          <div className="header">
            <h1>New Plaza</h1>
            <h1>2021</h1>
          </div>
          <div className="gridTable ">
            <Image
              src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
              alt="image"
              width={1920}
              height={1080}
              className=""
            />
            <div className="lg:col-span-2 flex flex-col">
              <h6>From 82 000 $</h6>
              <p>Square 48-86 km2</p>
              <span>
                A modern project, made in bright colors in environmentally
                friendly materials. Sea view and entertainment center within
                walking distance. Lots of space, fresh air. Nearby is a parking
                lot. Comfort+ and Premium class apartments are available.
              </span>
              <button className="seeMoreBtn mt-auto pt-3">LEARN MORE</button>
            </div>
          </div>
        </section>

        {/* modern life  */}
        <section className="ourProjects">
          <div className="header">
            <h1>Modern life</h1>
            <h1>2020</h1>
          </div>
          <div className="gridTable ">
            <Image
              src="https://images.pexels.com/photos/1829191/pexels-photo-1829191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={1920}
              height={1080}
              className="h-[30rem] lg:h-auto"
            />

            <div className="flex flex-col">
              <h6>From 122 000 $</h6>
              <p>Square 64-142 km2</p>
              <span>
                Modern City has everything that a large metropolis has to offer,
                everything is centered around you and tuned to your desires. The
                self-sufficient infrastructure of space takes into account all
                aspects of life. Provide quality education to your child, keep
                yourself in great shape, make new business contacts and create
                joint business projects, attend cultural events and master
                classes.
              </span>
              <button className="seeMoreBtn mt-auto pt-3">LEARN MORE</button>
            </div>
            <div className="md:col-span-2 lg:col-span-1 flex flex-col md:flex-row lg:flex-col">
              <div className="md:w-[15rem] md:h-[15rem] ml-auto mb-3">
                <Image
                  src="https://images.pexels.com/photos/273717/pexels-photo-273717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                  width={1920}
                  height={1080}
                  className="md:rounded-full"
                />
              </div>
              <div className="px-2 flex mx-auto gap-4 mt-auto h-[30rem] lg:h-auto">
                <div>
                  <Image
                    src="https://images.pexels.com/photos/612949/pexels-photo-612949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div>
                  <Image
                    src="https://images.pexels.com/photos/1570404/pexels-photo-1570404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <button className="mx-auto hover:scale-90 w-full grid place-items-center">
          <span>SEE MORE</span>
          <RiArrowDownLine />
        </button>
      </main>
      <Footer />
    </>
  );
};

export default ourProjects;
