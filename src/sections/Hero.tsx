import styles from "./Hero.module.css";

import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className={styles.section}>
      {/* Bg */}
      <div className={styles.background}>
        <img src="/hero-bg.jpg" alt="Hero image" />
      </div>

      {/*Content*/}
      <div className={styles.content}>
        <div>
          {/* Left Column - Text Content */}
          <div className={styles.leftColumn}>
            <span>
              <span />
              Software Engineer • .Net React
            </span>

            {/*Headline*/}
            <div className={styles.headline}>
              <h1>
                Delivering <span className={styles.primary}>technical</span>
                <br />
                solutions with
                <br />
                <span className={styles.italic}>quality.</span>
              </h1>
              <p>
                Hi, I'm Augustin Yu - a software engineer specializing in .Net
                and React. I build scalable, performant systems and applications
                that users love.
              </p>
            </div>

            {/*CTAs*/}
            <div className={styles.ctaButtonsContainer}>
              <Button>
                Contact Me <ArrowRight className={styles.ctaButtonIcon} />
              </Button>

              <Button>
                <Download className={styles.ctaButtonIcon} />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
        </div>
      </div>
    </section>
  );
};
