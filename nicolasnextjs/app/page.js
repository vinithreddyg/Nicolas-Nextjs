import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import AboutSection from '../components/AboutSection';
import AppointmentSection from '../components/AppointmentSection';
import MobileButton from '../components/MobileButton';
import Header from '../components/Header';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';
import getPatiosImageUrls from '../lib/getPatiosImageUrls';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function Page() {
  const [trimmingImages, patiosImages] = await Promise.all([
    getTrimmingImageUrls(),
    getPatiosImageUrls(),
  ]);

  return (
    <main className="page" id="top">
      <Header />
      <HeroSection />
      <ServiceSections trimmingImages={trimmingImages} patiosImages={patiosImages} />
      <AppointmentSection />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
