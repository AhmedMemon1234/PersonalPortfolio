import AboutSection from "./About/page";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContactSection from "./Contact/page";
import HeroSection from "./Herosection/Hero";
import ProjectsSection from "./Projects/page";
import SkillsSection from "./Skills/page";

export default function Home(){
  return(
    <div>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}