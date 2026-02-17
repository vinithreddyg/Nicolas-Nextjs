import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import DisplayWorkImages from '../components/DisplayWorkImages';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';

export default async function Page() {
  const trimmingImages = await getTrimmingImageUrls();

  return (
    <main className="page">
      <HeroSection />
      <ServiceSections />
      <DisplayWorkImages images={trimmingImages} />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
