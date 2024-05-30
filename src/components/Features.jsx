import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

const Features = () => {
  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Features;
