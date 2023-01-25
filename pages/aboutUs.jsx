import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar />
      <main className="max_width py-10">
        <h1 className="pt-10 text-5xl font-bold py-5 tracking-wider px-4">
          ABOUT US
        </h1>
        <header>
          <section className="grid lg:grid-cols-3 gap-3">
            <div className="h-[20rem] gap-4 px-4 flex mt-auto order-2 lg:order-1 mx-auto col-span-2 lg:col-span-1">
              <div>
                <Image
                  src="https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <Image
                  src="https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="col-span-2 order-1 h-[13rem] lg:h-[25rem]">
              <Image
                src="https://images.pexels.com/photos/12001581/pexels-photo-12001581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                width={1920}
                height={1080}
              />
            </div>
          </section>
          <section className="grid lg:grid-cols-3 p-4 ">
            <div />
            <p className="lg:col-span-2 text-lg">
              In order for you to learn as much as possible about us, we will
              tell you how we approached the creation of one of our projects. We
              are convinced that the quality of our work is based on how we
              approach work.
            </p>
          </section>
        </header>

        {/* //places */}
        <section className="grid md:grid-cols-3 py-5 gap-4 px-4">
          <h1 className="font-bold border-t border-borderColor py-3">
            Historical places
          </h1>
          <div className="space-y-5">
            <div className="h-[15rem] md:h-[20rem] lg:h-auto">
              <Image
                src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                width={1920}
                height={1080}
              />
            </div>
            <p>
              {`One of our favorite projects involves two restored historic
            buildings of different but complementary architectural styles, one
            Art Deco and the other New Edwardian. These styles were not chosen
            by chance. The majestic buildings have been interconnected since the
            last century, and the building's competent architects have kept the
            original facades as largely intact this as possible.`}
            </p>
          </div>
          <Image
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
            width={1920}
            height={1080}
          />
        </section>

        {/* chic  */}
        <section className="grid md:grid-cols-3 py-5 px-4 gap-4 ">
          <h1 className="font-bold border-t border-borderColor py-3">
            Chic in the interiors of houses
          </h1>
          <div className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              <p className="">
                {`The maestro behind the hotel's design. Exposed steel piping and raw
            concrete salute the original buildings' legacies and are brilliantly
            combined and contrasted with subdued tones, such as dark olive-
            colored chesterfield sofas and black high-end designer lighting seen
            on the rooftop, alongside contemporary artworks and assorted African
            curios of decades of past. Verdant plants and warm lighting help
            strike a perfect balance between comfort and cool.`}
              </p>
              <div className="h-[15rem] md:h-full">
                <Image
                  src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
              <Image
                src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                width={1920}
                height={1080}
                className="md:col-span-2"
              />
              <Image
                src="https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>

        {/* high live  */}
        <section className="grid md:grid-cols-3 px-4 gap-4 py-5">
          <h1 className="font-bold border-t border-borderColor py-3">
            High living spaces
          </h1>
          <section className=" gap-4 md:col-span-2">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="space-y-4 flex flex-col justify-between">
                <p>
                  {`Defining design aspects of the public areas move into spacious
              studios and one- and two-bedroom suites. Each room has high
              ceilings providing extra space for paintings and textured concrete
              columns. While amenities such as Bluetooth speakers and a 3-way
              pillow menu are contemporary, rotary telephones, velvet sofas,
              stylish drink carts from local design firms, and Victorian-style
              chinaware suggest that the room's aesthetic is also led`}
                </p>
                <div>
                  <Image
                    src="https://images.pexels.com/photos/443378/pexels-photo-443378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="img"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div>
                <Image
                  src="https://images.pexels.com/photos/1570404/pexels-photo-1570404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="img"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="h-[20rem] pt-5">
              <Image
                src="https://images.pexels.com/photos/1633970/pexels-photo-1633970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="img"
                width={1920}
                height={1080}
              />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default aboutUs;
