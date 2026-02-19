import HeroSection from '../components/HeroSection';
import ServiceSections from '../components/ServiceSections';
import AboutSection from '../components/AboutSection';
import AppointmentSection from '../components/AppointmentSection';
import MobileButton from '../components/MobileButton';
import Header from '../components/Header';
import getTrimmingImageUrls from '../lib/getTrimmingImageUrls';
import getPatiosImageUrls from '../lib/getPatiosImageUrls';
import getLandscapeDesignMediaUrls from '../lib/getLandscapeDesignMediaUrls';
import getProfileImageUrl from '../lib/getProfileImageUrl';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export default async function Page() {
  const [trimmingImages, patiosImages, mulchImages, profileImageUrl] = await Promise.all([
    getTrimmingImageUrls(),
    getPatiosImageUrls(),
    getLandscapeDesignMediaUrls(),
    getProfileImageUrl(),
  ]);

  return (
    <main className="page" id="top">
      <Header profileImageUrl={profileImageUrl} />
      <HeroSection />
      <ServiceSections
        trimmingImages={trimmingImages}
        patiosImages={patiosImages}
        mulchImages={mulchImages}
      />
      <AppointmentSection />
      <AboutSection />
      <MobileButton />
    </main>
  );
}
