import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CertificateSection from './sections/CertificateSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Navbar from './components/Navbar';

export default function Home(){

  return (
    <main className="w-full p-4">

      
      <HeroSection />
      <AboutSection />
      <CertificateSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />



    </main>
  );
}
