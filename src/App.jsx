import {
  ScrollProgress,
  Navbar,
  Hero,
  TechStack,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030407] text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
