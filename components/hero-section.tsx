"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i2mFnVxUSReyrQUDV35A0poWZ7Nv4C.png",
      alt: "Creative Design Portfolio - Alayrix Showcase",
      title: "DREAM. CREATE. INSPIRE",
      subtitle: "WITH",
      showLogo: true,
      logoImage: "/images/alayrix-logo.png",
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOeauChzZmGhUJiRrAtx7wWfhyAL4M.png",
      alt: "Creative Content Showcase - Alayrix Portfolio",
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7wmTljDoXr6ctgugb6EuqPzOhySYaf.png",
      alt: "Magic begins here - Social Media Excellence",
      title: "WE BRING BRANDS TO LIFE",
      subtitle: "WITH INNOVATION.",
    },
    {
      id: 4,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6CC9ksEImtWSrO7rsfpePBamufw2Rp.png",
      alt: "Brand Reach Engage Grow - Alayrix Strategy",
      title: "THE FUTURE OF YOUR BRAND",
      subtitle: "STARTS HERE WITH",
      brand: "ALAYRIX.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen overflow-hidden pt-18 lg:pt-22">
      <div className="relative w-full min-h-screen flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#071d56] to-[#4A90E2]" />
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              className="w-full h-full object-cover relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = "none"
              }}
            />

            <div className="absolute inset-0 bg-black/20 z-20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-30 px-4 py-4 md:py-8 lg:py-12">
             

              {/* ✅ Slide Content */}
              <div
                className={`text-center px-4 ${
                  slide.id === 3 ? "mr-auto ml-8 md:ml-16 text-left max-w-2xl" : slide.id === 4 ? "mt-8 md:mt-16" : ""
                }`}
              >
                <h1
                  className={`font-black tracking-tight leading-tight mb-4 text-white drop-shadow-lg ${
                    slide.id === 1
                      ? "text-4xl md:text-6xl lg:text-7xl"
                      : slide.id === 2
                        ? "text-3xl md:text-5xl lg:text-6xl mt-8"
                        : slide.id === 3
                          ? "text-3xl md:text-5xl lg:text-6xl mt-8"
                          : "text-3xl md:text-5xl lg:text-5xl"
                  }`}
                >
                  {slide.title}
                </h1>

                {slide.id === 1 ? (
                  <div className="flex flex-col items-center">
                    <h2 className="font-black tracking-tight leading-tight drop-shadow-lg text-3xl md:text-5xl lg:text-6xl mb-2 text-white">
                      {slide.subtitle}
                    </h2>
                    {slide.showLogo && slide.logoImage && (
                      <img src={slide.logoImage || "/placeholder.svg"} alt="Alayrix Logo" className="drop-shadow-lg" />
                    )}
                  </div>
                ) : (
                  <>
                    <h2
                      className={`font-black tracking-tight leading-tight drop-shadow-lg ${
                        slide.id === 2
                          ? "text-4xl md:text-6xl lg:text-7xl text-white"
                          : slide.id === 3
                            ? "text-2xl md:text-4xl lg:text-5xl text-white"
                            : "text-2xl md:text-4xl lg:text-5xl mb-4 text-white"
                      }`}
                    >
                      {slide.subtitle}
                    </h2>

                    {slide.showLogo && slide.id !== 1 && (
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                          {slide.logoImage ? (
                            <img
                              src={slide.logoImage || "/placeholder.svg"}
                              alt="Alayrix Logo"
                              className="drop-shadow-lg"
                            />
                          ) : (
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#4A90E2] to-[#7BB3F0] rounded-lg flex items-center justify-center">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded transform rotate-45"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {slide.brand && (
                  <h3
                    className={`font-black tracking-tight leading-tight drop-shadow-lg ${
                      slide.id === 1
                        ? "text-xl md:text-3xl lg:text-4xl text-white"
                        : "text-2xl md:text-4xl lg:text-5xl text-white"
                    }`}
                  >
                    {slide.brand}
                  </h3>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ✅ Slide Dots */}
        <div className="absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
