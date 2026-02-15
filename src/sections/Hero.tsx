import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="">
      {/* Bg */}
      <div className="">
        <img src="/hero-bg.jpg" alt="Hero image" className="" />
        <div className="" />
      </div>
      {/* Green Dots*/}
      <div className="">
        {[
          ...Array(30).map((_item, _i) => (
            <div
              className=""
              style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          )),
        ]}
      </div>

      {/*Content*/}
      <div className="">
        <div className="">
          {/* Left Column - Text Content */}
          <div className="">
            <div className="">
              <span className="">
                <span className="" />
                Software Engineer • .Net React
              </span>
            </div>

            {/*Headline*/}
            <div className="">
              <h1 className="">
                Delivering <span className="">technical</span>
                <br />
                solutions with
                <br />
                <span className="">quality.</span>
              </h1>
              <p className="">
                Hi, I'm Augustin Yu - a software engineer specializing in .Net
                and React. I build scalable, performant systems and applications
                that users love.
              </p>
            </div>

            {/*CTAs*/}
            <div className="">
              <Button size="lg">
                Contact Me <ArrowRight className="" />
              </Button>

              <AnimatedBorderButton>
                <Download className="" />
                Download CV
              </AnimatedBorderButton>
            </div>
          </div>

          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  );
};
