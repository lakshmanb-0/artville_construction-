import Image from "next/image";

export const LastNews = () => {
  return (
    <main className="max_width py-10">
      <h1 className="font-bold text-5xl px-4">LAST NEWS</h1>
      <section className="NewsSection">
        <div className="leftdiv">
          <p>25 September 2022</p>
          <Image
            src="https://images.unsplash.com/photo-1504450075628-39777da238ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="Loading..."
            width={1920}
            height={1080}
            className="newsImg"
          />
        </div>
        <div className="rightdiv">
          <p>New investor and development by 2023</p>
          <span>
            The effectiveness of a business largely depends on the team that the
            entrepreneur will recruit implement the business plan. In the
            overwhelming majority of cases, a powerful impetus is needed to
            implement what has been conceived, which involves well-coordinated
            work and great dedication of each team member. You have to work a
            lot more than you did before to make a startup work. You may later
            be able to relax, receiving a lot of money from a startup once
            created, but first you need to make serious efforts. Throughout the
            year, we have been working and communicating with our partners to
            make our work as high quality as possible. We have a large contract
            for planning and launching the construction of a new complex in
            2023. The sale of the first apartments is expected in a few months.
          </span>
        </div>
      </section>
      <section className="NewsSection">
        <div className="leftdiv">
          <p>8 July 2022</p>
          <Image
            src="https://images.unsplash.com/photo-1610637988384-3154e5644f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Loading..."
            width={1920}
            height={1080}
            className="newsImg"
          />
        </div>
        <div className="rightdiv">
          <p>Our partners opened a new shopping center</p>
          <span>
            In the north-east of the site is a new shopping center Multiplaza,
            which fit perfectly into commercial infrastructure. On July 8 the
            Center group of companies was open a new shopping centers with a
            total area of 120,000 square meters, the press service has said. The
            new shopping center will become the largest retail facilities in the
            city put into operation for last ten years. Their opening will
            create more than 1,200 new jobs, and annual contributions to local
            and state budgets, according to preliminary estimates.
          </span>
        </div>
      </section>
      <section className="NewsSection">
        <div className="leftdiv">
          <p>18 April 2022</p>
          <Image
            src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Loading..."
            width={1920}
            height={1080}
            className="newsImg"
          />
        </div>
        <div className="rightdiv">
          <p>
            The sale of elite apartments in the New Plaza complex has begun.
          </p>
          <span>
            {`Your attention is given to the best apartments in our complex "City
            of Dreams". Here, cosiness, comfort and safety do not end at the
            door of the apartment, but accompany you throughout the residential
            town. To do this, we have thought out the infrastructure well, made
            a lot of useful services and always keep in touch with the
            residents, everything for a comfortable life. A unique landscape and
            architectural project consisting of an amphitheater boulevard and a
            capsule park. Here the interests of all residents of the town are
            taken into account. The amphitheater boulevard is a sloping walking
            area with benches, lawns and trees. It is completed by an
            observation deck from which you can observe the landscapes
            surrounding the town and the capsule park.`}
          </span>
        </div>
      </section>
    </main>
  );
};
