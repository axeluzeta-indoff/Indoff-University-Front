import CarouselSection from "./CarouselSection";
import ContactSection from "./ContactSection";
import CoursesSection from "./CoursesSection";
import HeroSection from "./HeroSection";
import InstructorsSection from "./IntructorsSection";
import WhyCoursesSection from "./WhyCoursesSection";
import WhySection from "./WhySection";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <HeroSection />
      <WhySection />
      <CarouselSection />
      <CoursesSection />
      <WhyCoursesSection />
      <InstructorsSection/>
      <ContactSection />
    </main>
  );
}
