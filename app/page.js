import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import DisplayWorkImages from '../components/DisplayWorkImages';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';

export default function Page() {
  return (
    <main className="page">
      <HeroSection />
      <ServiceSections />
      <DisplayWorkImages />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
