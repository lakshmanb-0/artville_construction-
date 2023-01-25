import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import sample from "../public/sample_pic.jpg";
import Services from "../components/Services";
import Faq from "../components/Faq";
import { question } from "../Data/data";
import Head from "next/head";

const plaza = () => {
  return (
    <>
      <Head>
        <title>Plaza</title>
      </Head>
      <Navbar />
      <main className="max_width py-10">
        <h1 className="pt-10 mb-5 px-4 font-bold text-4xl">PLAZA CITY</h1>
        <div className="h-[15rem] md:h-[27rem]">
          <Image src={sample} alt="image" width={1920} height={1080} />
        </div>
        {/* project of decade  */}
        <section className="py-8 grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
          <div className="md:max-w-[20rem]">
            <h1 className="font-bold px-2 text-2xl mb-3 ">
              THE BEST PROJECT OF THE DECADE!
            </h1>
            <p>
              Own production facilities with a quality laboratory, a scientific
              base, and strict internal quality standards ensure sustainable
              unsurpassed quality houses and prompt response to all the
              challenges that we face. To create a complete complex, we have
              everything- from bricks to brilliant architects.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="py-8 border-y border-borderColor grid grid-cols-2 ">
              <h6 className="text-5xl font-semibold lg:text-6xl">120</h6>
              <p>leisure facilities located nearby</p>
            </div>
            <div className="py-8 border-y border-borderColor grid grid-cols-2 ">
              <h6 className="text-5xl font-semibold lg:text-6xl">1000</h6>
              <p>more than a thousand apartments</p>
            </div>
            <div className="py-8 border-y border-borderColor grid grid-cols-2 ">
              <h6 className="text-5xl font-semibold lg:text-6xl">17</h6>
              <p>buildings in the same residential complex</p>
            </div>
          </div>
        </section>
        <Services />
        {/* specialists  */}
        <section className="px-4">
          <h1 className="font-bold mb-4 text-4xl ">OUR SPECIALISTS</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div />
            <div className="col-span-2 flex gap-4 mx-auto">
              <div>
                <div className="h-[18rem] mb-2">
                  <Image
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
                <h1 className="font-bold ">Marvin McKinney</h1>
                <p className="text-sm">Chief Executive of ArtiVile</p>
              </div>
              <div>
                <div className="h-[18rem] mb-2">
                  <Image
                    src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
                <h1 className="font-bold ">Esther Howard</h1>
                <p className="text-sm">Main architecture</p>
              </div>
              <div>
                <div className="h-[18rem] mb-2">
                  <Image
                    src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    width={1920}
                    height={1080}
                  />
                </div>
                <h1 className="font-bold ">Jenny Wilson</h1>
                <p className="text-sm">Communications Manage</p>
              </div>
            </div>
          </div>
        </section>

        {/* faq  */}
        <section className="py-10 px-4">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <div className="grid md:grid-cols-3 ">
            <div />
            <div className="md:col-span-2">
              {question.map((ques) => (
                <Faq key={ques.id} data={ques} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default plaza;
