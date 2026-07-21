import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustBar from "./components/TrustBar/TrustBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Doctors from "./components/Doctors/Doctors";
import BeforeAfter from "./components/BeforeAfter/BeforeAfter";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Appointment from "./components/Appointment/Appointment";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <TrustBar />

      <About/>

      <Services/>

      <WhyChooseUs />

      <Doctors />

      <BeforeAfter />

      <Testimonials />

      <FAQ />

      <Appointment />

      <Contact />

      <Footer />
    </>
  );
}

export default App;