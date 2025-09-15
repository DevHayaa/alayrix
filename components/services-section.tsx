"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Mail, Target } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white relative bg-floating-shapes">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0 mb-12 md:mb-16 animate-fade-in-up">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071d56] mb-4 text-balance leading-tight">
              Streamline Your Content,
              <br />
              <span className="text-[#071d56]">Amplify Your Impact</span>
            </h2>
          </div>
          <div className="lg:flex-shrink-0">
            <Link href="/services">
              <Button className="w-full lg:w-auto bg-gradient-to-r from-[#007fdc] to-[#01c2f7] text-white px-6 md:px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 backdrop-blur-sm">
                VIEW ALL SERVICES
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Content Creation */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 card-animate group relative overflow-hidden animate-slide-in-left animate-delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01c2f7]/5 to-[#38ceff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm animate-bounce-in animate-delay-200">
                <FileText className="h-8 w-8 text-blue-500 group-hover:animate-float" />
              </div>
              <h3 className="text-2xl font-bold text-[#071d56] mb-4">Multilingual Content</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Create and manage content in English, French, and Arabic seamlessly. Professional content that builds
                brand authority and engages your audience.
              </p>
              <Link href="/services">
                <Button
                  variant="ghost"
                  className="text-[#007fdc] hover:text-[#01c2f7] p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Flowence Platform */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 card-animate group relative overflow-hidden animate-scale-in animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01c2f7]/5 to-[#38ceff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm animate-bounce-in animate-delay-300">
                <Target className="h-8 w-8 text-blue-500 group-hover:animate-rotate-float" />
              </div>
              <h3 className="text-2xl font-bold text-[#071d56] mb-4">Flowence Platform</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Access a powerful publishing tool tailored for digital marketing agencies and content teams. Streamline
                your workflow and amplify your impact.
              </p>
              <Link href="/flowence">
                <Button
                  variant="ghost"
                  className="text-[#007fdc] hover:text-[#01c2f7] p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Tailored Solutions */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 card-animate group relative overflow-hidden animate-slide-in-right animate-delay-300 md:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-[#01c2f7]/5 to-[#38ceff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm animate-bounce-in animate-delay-400">
                <Mail className="h-8 w-8 text-blue-500 group-hover:animate-smooth-float" />
              </div>
              <h3 className="text-2xl font-bold text-[#071d56] mb-4">Tailored Solutions</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Solutions for both individuals and enterprises, customized to your workflow and brand identity. From
                executives to marketing teams.
              </p>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="text-[#007fdc] hover:text-[#01c2f7] p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
