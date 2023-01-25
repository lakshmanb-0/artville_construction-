const Offer = () => {
  return (
    <main className="max_width px-4 py-10">
      <h1 className="text-4xl font-bold">WHAT DO WE OFFER</h1>
      <section className="grid lg:grid-cols-2 gap-4">
        <p className="text-lg ">
          {`New technologies and thoughtful design that's about us! Take a look at
        this`}
        </p>
        <article className="grid sm:grid-cols-2 bg-borderColor gap-[1px]">
          <div className="offer_div ">
            <h6>BIG CHOICE</h6>
            <div>
              <h1>120</h1>
              <p>and more apartments in each complex</p>
            </div>
          </div>
          <div className="offer_div">
            <h6>DIVERSITY</h6>
            <div>
              <h1>8</h1>
              <p>residential complexes in recent years</p>
            </div>
          </div>
          <div className="offer_div">
            <h6>PROFESSIONALISM</h6>
            <div>
              <h1>17</h1>
              <p>years on the market</p>
            </div>
          </div>
          <div className="offer_div">
            <h6>CONFIDENCE</h6>
            <div>
              <h1>1000</h1>
              <p>more than 1000 families settled</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
export default Offer;
