import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <main className="page">
      <HeroSection />
      <ServiceSections />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
