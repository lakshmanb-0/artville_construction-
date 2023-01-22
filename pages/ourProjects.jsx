import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
// import image from "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";

const ourProjects = () => {
  return (
    <>
      <Head>
        <title>Our Projects</title>
      </Head>
      <Navbar />
      <main className="max_width px-4">
        <h1 className="text-5xl pt-20 text-black">OUR PROJECTS</h1>
        <section>
          <div>
            <h1>City of Dreams</h1>
            <h1>2022</h1>
          </div>
          <div>
            <Image
              src=""
              alt="image"
              width={1920}
              height={1080}
              className="object-fit"
            />
            <div>
              <h6>From 115 000 $</h6>
              <p>Square 52-124 km2</p>
              <span>
                Spaces are created using the latest and greatest technology.
                These houses will not become obsolete after many years.
              </span>
              <div>
                <Image
                  src=""
                  alt="image"
                  width={1920}
                  height={1080}
                  className="object-fit"
                />
                <Image
                  src=""
                  alt="image"
                  width={1920}
                  height={1080}
                  className="object-fit"
                />
              </div>
            </div>
            <Image
              src=""
              alt="image"
              width={1920}
              height={1080}
              className="object-fit"
            />
          </div>
        </section>
        <section>
          <div>
            <h1>New clouds</h1>
            <h1>2021</h1>
          </div>
          <div>
            <Image
              src=""
              alt="image"
              width={1920}
              height={1080}
              className="object-fit"
            />
            <div>
              <h6>From 79 000 $</h6>
              <p>Square 48-112 km2</p>
              <span>
                The advantages of the residential complex are its own reservoir,
                stylish and ergonomic architecture, flats with terraces and
                private yards, and a park area with plants.
              </span>
            </div>
            <div>
              <Image
                src=""
                alt="image"
                width={1920}
                height={1080}
                className="object-fit"
              />
              <Image
                src=""
                alt="image"
                width={1920}
                height={1080}
                className="object-fit"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1>New Plaza</h1>
            <h1>2021</h1>
          </div>
          <div>
            <Image
              src=""
              alt="image"
              width={1920}
              height={1080}
              className="object-fit"
            />
            <div>
              <h6>From 82 000 $</h6>
              <p>Square 48-86 km2</p>
              <span>
                A modern project, made in bright colors in environmentally
                friendly materials. Sea view and entertainment center within
                walking distance. Lots of space, fresh air. Nearby is a parking
                lot. Comfort+ and Premium class apartments are available.
              </span>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1>Modern life</h1>
            <h1>2020</h1>
          </div>
          <div>
            <Image
              src=""
              alt="image"
              width={1920}
              height={1080}
              className="object-fit"
            />
            <div>
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
            </div>
            <div>
              <Image
                src=""
                alt="image"
                width={1920}
                height={1080}
                className="object-fit"
              />
              <div></div>
              <Image
                src=""
                alt="image"
                width={1920}
                height={1080}
                className="object-fit"
              />
              <Image
                src=""
                alt="image"
                width={1920}
                height={1080}
                className="object-fit"
              />
            </div>
          </div>
        </section>
        <button>SEE MORE</button>
      </main>
    </>
  );
};

export default ourProjects;
