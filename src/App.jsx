import {
  ScrollProgress,
  MouseGlow,
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
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#030407] text-white">
      <MouseGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
