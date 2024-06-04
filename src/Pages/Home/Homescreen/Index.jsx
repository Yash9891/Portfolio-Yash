import Contact from "../Contact";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import Projects from "../Projects";
import Main from "../Main"
import Resume from "../Resume";
import Skills from "../Skills";
import Homepage2 from "../Homepage2";

export default function Index(){
    return (
        <>
        <Navbar/>
        <HeroSection/>
  <Homepage2/>
        <Skills/>
        <Projects/>
        <Main/>
        <Resume/>
        <Footer/>
      
        
        </>
    )
}