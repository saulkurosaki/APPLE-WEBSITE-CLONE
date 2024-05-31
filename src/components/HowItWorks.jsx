import { chipImg } from "../utils";

const HowItWorks = () => {
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
