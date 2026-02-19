import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';
import Header from '../components/Header';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function Page() {
  const trimmingImages = await getTrimmingImageUrls();

  return (
    <main className="page" id="top">
      <Header />
      <HeroSection />
      <ServiceSections trimmingImages={trimmingImages} />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
