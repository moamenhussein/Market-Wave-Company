import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import TarekDetails from "./Components/experience/TarekDetails";
import Error from "./pages/error/Error";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
    <ScrollToTop smooth />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tarekDetils" element={<TarekDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
