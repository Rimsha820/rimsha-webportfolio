import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Nav from "./Componets/Navbar";
import Home from "./Pages/Home";
import Header from "./Componets/Header";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-white font-['Urbanist']"
      style={{ backgroundColor: "#fefcf9" }}
    >
      <Nav />
      <Header />
      <Home id="home" onClick={scrollToTop} />

      <section id="about" className="min-h-[80vh] px-5 py-5">
        <Projects />
      </section>

      <section id="education" className="min-h-[80vh] px-5 py-5 mt-10">
        <Education />
      </section>

      <section id="experience" className="min-h-[80vh] px-5 py-5">
        <Experience />
      </section>

      <section id="contact" className="min-h-[80vh] px-5 py-5">
        <Contact />
      </section>

      {showArrow && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-15 sm:bottom-5 right-3 sm:right-4 bg-[#ebb64d] hover:bg-[#d4a742] text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg cursor-pointer transition duration-300 z-50"
          title="Scroll to Top"
        >
          <FaArrowUp className="text-lg sm:text-xl md:text-2xl" />
        </div>
      )}
    </div>
  );
};

export default App;
