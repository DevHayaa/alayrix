"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-[#01c2f7] rounded-full" />
              <span className="text-[#01c2f7] font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071d56] mb-4 md:mb-6 text-balance leading-tight">
              Effortless Content Creation
              <span className="text-[#093b5f]"> for Leaders </span>
              and Enterprises
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Alayrix empowers senior executives, marketers, and businesses with high-quality, multilingual
              content—simplifying creation, management, and publishing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#1c7dcd] to-[#38ceff] text-white px-6 md:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-[#007fdc] text-[#007fdc] hover:bg-[#007fdc] hover:text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-72 md:w-80 h-72 md:h-80 flex items-center justify-center">
              <div className="relative group">
                <img
                  src="/images/web-development.png"
                  alt="Web Development Platform"
                  className="w-64 md:w-72 h-auto animate-float hover:scale-105 transition-all duration-500 drop-shadow-2xl"
                />

                {/* Floating particles around the image */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#01c2f7] rounded-full animate-bounce opacity-70" />
                <div
                  className="absolute -bottom-6 -left-6 w-2 h-2 bg-[#38ceff] rounded-full animate-bounce opacity-60"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/4 -left-8 w-2.5 h-2.5 bg-[#007fdc] rounded-full animate-bounce opacity-50"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-1/3 -right-6 w-2 h-2 bg-[#1c7dcd] rounded-full animate-bounce opacity-60"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#01c2f7]/10 to-[#38ceff]/10 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
