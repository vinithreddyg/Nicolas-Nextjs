import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';
import getTrimmingImageUrls from '../public/lib/getTrimmingImageUrls';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const trimmingImages = await getTrimmingImageUrls();

  return (
    <main className="page">
      <HeroSection />
      <ServiceSections trimmingImages={trimmingImages} />
      <AboutSection />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
