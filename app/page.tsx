import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MobileBanners } from "@/components/mobile-banners"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesGrid } from "@/components/features-grid"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseBanner } from "@/components/why-choose-banner"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-up opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                i % 4 === 0
                  ? "bg-[#2196F3]"
                  : i % 4 === 1
                    ? "bg-[#00C9FF]"
                    : i % 4 === 2
                      ? "bg-[#007fdc]"
                      : "bg-[#38ceff]"
              }`}
            />
          </div>
        ))}
      </div>

      <Header />
      <div className="hidden md:block">
        <HeroSection />
      </div>
      <div className="block md:hidden">
        <MobileBanners />
      </div>
      <ServicesSection />
      <AboutSection />
      <WhyChooseBanner />
      <FeaturesGrid />
      <ProcessSection />
      <Footer />
    </main>
  )
}
