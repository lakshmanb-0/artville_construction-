import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const contacts = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <main className="max_width py-10">
        <h1 className="pt-10 font-bold text-4xl px-4">CONTACTS</h1>
        <div className="h-[75vh] my-8">
          <Image
            src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image"
            width={1920}
            height={1080}
          />
        </div>
        <section className="max_width px-4">
          <div className="contactDiv">
            <h1>Sales department</h1>
            <div>
              <p>Parker Rd. 2, 4793 Oslo</p>
              <p>Every day 9:00-20:00</p>
            </div>
            <div>
              <p>(+33)6 55 59 32 88</p>
              <p>(+33)7 75 55 45 48</p>
            </div>
            <p>artvillesales739@gmail.com</p>
            <button>SHOW MAP</button>
          </div>
          <div className="contactDiv">
            <h1>For advertising</h1>
            <div>
              <p>Elvia Elviaveien 6, 9403 Oslo</p>
              <p>Mn-Fr 9:00-19:00</p>
            </div>
            <div>
              <p>(+33)7 00 55 54 79</p>
              <p>+37949304037854</p>
            </div>
            <p>artvillforadvertisin@gmail.com</p>
            <button>SHOW MAP</button>
          </div>
          <div className="contactDiv">
            <h1>Main office</h1>
            <div>
              <p>Elviaveien 9, 6103 Oslo</p>
              <p>Mn-St 8:00-19:00</p>
            </div>
            <div>
              <p>(+33)7 55 55 49 84</p>
              <p>(+33)7 35 55 45 43</p>
            </div>
            <p>hellomainoffice@gmail.com</p>
            <button>SHOW MAP</button>
          </div>
          <div className="contactDiv">
            <h1>Partners</h1>
            <div>
              <p>Elvia Elviaveien 9, 8494 Oslo</p>
              <p>Mn-Fr 9:00-15:00</p>
            </div>
            <div>
              <p>(+33)7 35 55 50 46</p>
              <p>(+33)6 55 59 16 45</p>
            </div>
            <p>partnersforartvill@gmail.com</p>
            <button>SHOW MAP</button>
          </div>
          <div className="contactDiv">
            <h1>Service-center</h1>
            <div>
              <p>Khalil Grove 3, 7584 Oslo</p>
              <p>Mn-St 10:00-17:00</p>
            </div>
            <div>
              <p>(+33)6 55 51 05 09</p>
              <p>(+33)7 00 55 56 79</p>
            </div>
            <p>serviceartville@gmail.com</p>
            <button>SHOW MAP</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default contacts;
