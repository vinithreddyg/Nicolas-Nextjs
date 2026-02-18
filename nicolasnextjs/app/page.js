import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import S3UrlsSection from '../components/S3UrlsSection';
import AboutSection from '../components/AboutSection';
import MobileButton from '../components/MobileButton';

export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <main className="page">
      <HeroSection />
      <ServiceSections />
      <S3UrlsSection />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
