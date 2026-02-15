import styles from "./App.module.css";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
