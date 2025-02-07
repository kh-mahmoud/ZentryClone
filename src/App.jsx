import About from "./components/About";
import Contact from "./components/Contac";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";




const App = () => {
  return (
    <main >
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
