import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import sample from "../public/sample_pic.jpg";

const aboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="max_width my-10">
        <h1 className="pt-10 text-5xl font-bold py-5 tracking-wider px-4">
          ABOUT US
        </h1>
        <header className="">
          <section className="grid lg:grid-cols-3 gap-3">
            <div className="col-span-2 lg:col-span-1 h-[15rem] max-w-full gap-4 px-4 flex mt-auto order-2 lg:order-1 mx-auto">
              <div>
                <Image
                  src={sample}
                  alt="img"
                  width={1920}
                  height={1080}
                  className=" w-full h-full"
                />
              </div>
              <div>
                <Image
                  src={sample}
                  alt="img"
                  width={1920}
                  height={1080}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="col-span-2 order-1 h-[13rem] lg:h-[25rem]">
              <Image
                src={sample}
                alt="img"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
          </section>
          <section className="grid lg:grid-cols-3 p-4 ">
            <div className="hidden lg:inline" />
            <p className="col-span-2 text-lg">
              In order for you to learn as much as possible about us, we will
              tell you how we approached the creation of one of our projects. We
              are convinced that the quality of our work is based on how we
              approach work.
            </p>
          </section>
        </header>

        {/* //places */}
        <section className="grid lg:grid-cols-3 my-10 gap-8 px-5">
          <h1 className="font-bold border-t border-borderColor py-3">
            Historical places
          </h1>
          <div className="space-y-5">
            <div className="h-[15rem] lg:h-auto">
              <Image src={sample} alt="img" width={1920} height={1080} />
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
          <Image src={sample} alt="img" width={1920} height={1080} />
        </section>

        {/* chic  */}
        <section className="grid lg:grid-cols-3 px-5 gap-4 ">
          <h1 className="font-bold border-t border-borderColor py-3">
            Chic in the interiors of houses
          </h1>
          <div className="lg:col-span-2 flex flex-col">
            <div className="grid lg:grid-cols-2 gap-4">
              <p className="">
                {`The maestro behind the hotel's design. Exposed steel piping and raw
            concrete salute the original buildings' legacies and are brilliantly
            combined and contrasted with subdued tones, such as dark olive-
            colored chesterfield sofas and black high-end designer lighting seen
            on the rooftop, alongside contemporary artworks and assorted African
            curios of decades of past. Verdant plants and warm lighting help
            strike a perfect balance between comfort and cool.`}
              </p>
              <div className="h-[15rem] lg:h-full">
                <Image src={sample} alt="img" width={1920} height={1080} />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-5">
              <Image
                src={sample}
                alt="img"
                width={1920}
                height={1080}
                className="md:col-span-2"
              />
              <Image src={sample} alt="img" width={1920} height={1080} />
            </div>
          </div>
        </section>

        {/* high live  */}
        <section className="grid lg:grid-cols-3 px-5 gap-4 my-5">
          <h1 className="font-bold border-t border-borderColor py-3">
            High living spaces
          </h1>
          <section className="flex flex-col gap-4 lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="flex flex-col space-y-4">
                <p>
                  {`Defining design aspects of the public areas move into spacious
              studios and one- and two-bedroom suites. Each room has high
              ceilings providing extra space for paintings and textured concrete
              columns. While amenities such as Bluetooth speakers and a 3-way
              pillow menu are contemporary, rotary telephones, velvet sofas,
              stylish drink carts from local design firms, and Victorian-style
              chinaware suggest that the room's aesthetic is also led`}
                </p>
                <div className="h-[17rem] lg:h-auto">
                  <Image src={sample} alt="img" width={1920} height={1080} />
                </div>
              </div>
              <div>
                <Image src={sample} alt="img" width={1920} height={1080} />
              </div>
            </div>
            <div className="h-[20rem]">
              <Image src={sample} alt="img" width={1920} height={1080} />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default aboutUs;
