"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function MobileBanners() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const mobileBanners = [
    {
      id: 1,
      image: "/images/mobile-banner-1.png",
      alt: "Creative Design Portfolio - Mobile View",
      title: "DREAM. CREATE. INSPIRE",
      subtitle: "WITH ALAYRIX",
      description: "Transforming ideas into powerful visual stories",
    },
    {
      id: 2,
      image: "/images/mobile-banner-2.png",
      alt: "Magic begins here - Mobile Social Media",
      title: "MAGIC BEGINS HERE",
      subtitle: "Social Media Excellence",
      description: "Where creativity meets engagement",
    },
    {
      id: 3,
      image: "/images/mobile-banner-3.png",
      alt: "Content Creation - Mobile View",
      title: "WE BRING BRANDS TO LIFE",
      subtitle: "WITH INNOVATION",
      description: "Elevating your brand presence across all platforms",
    },
    {
      id: 4,
      image: "/images/mobile-banner-4.png",
      alt: "Brand Strategy - Mobile View",
      title: "BRAND • REACH • ENGAGE • GROW",
      subtitle: "THE FUTURE STARTS HERE",
      description: "Strategic content solutions for modern businesses",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileBanners.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [mobileBanners.length])

  return (
    <section className="relative min-h-screen overflow-hidden block md:hidden">
      <div className="relative w-full min-h-screen flex flex-col">
        {mobileBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#071d56] to-[#4A90E2]" />
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.alt}
              fill
              className="object-cover relative z-10"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-black/30 z-20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 px-6 py-8">
              <div className="text-center max-w-sm mx-auto">
                <h1 className="font-black tracking-tight leading-tight mb-3 text-white drop-shadow-lg text-2xl sm:text-3xl">
                  {banner.title}
                </h1>

                <h2 className="font-bold tracking-tight leading-tight drop-shadow-lg text-lg sm:text-xl mb-4 text-white/90">
                  {banner.subtitle}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xs mx-auto">
                  {banner.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
          {mobileBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
