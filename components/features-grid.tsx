"use client"

import { Button } from "@/components/ui/button"
import { Users, Building2 } from "lucide-react"

export function FeaturesGrid() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#071d56] mb-4 text-balance">Why Alayrix?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Tailored solutions for individuals and enterprises</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* B2C Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#01c2f7]/10">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-[#007fdc]" />
              <h3 className="text-2xl font-bold text-[#071d56]">For Individuals</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#01c2f7] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Access Premium Content Instantly</h4>
                  <p className="text-slate-600 text-sm">
                    Get high-quality, professional content ready for immediate use
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#38ceff] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Personalized Content Suggestions</h4>
                  <p className="text-slate-600 text-sm">
                    AI-powered recommendations tailored to your industry and goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#1c7dcd] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Flexible Subscription Plans</h4>
                  <p className="text-slate-600 text-sm">
                    Choose from various plans that fit your budget and content needs
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full mt-8 bg-gradient-to-r from-[#1c7dcd] to-[#38ceff] text-white py-3 rounded-full hover:shadow-lg transition-all duration-300">
              Subscribe Now
            </Button>
          </div>

          {/* B2B Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#007fdc]/10">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-8 w-8 text-[#007fdc]" />
              <h3 className="text-2xl font-bold text-[#071d56]">For Enterprises</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#007fdc] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Enterprise-Level Content Solutions</h4>
                  <p className="text-slate-600 text-sm">Scalable content strategies designed for large organizations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#01c2f7] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Flowence Platform Integration</h4>
                  <p className="text-slate-600 text-sm">Multi-client management with advanced workflow optimization</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#093b5f] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#071d56] mb-1">Measurable Results & Case Studies</h4>
                  <p className="text-slate-600 text-sm">Proven ROI with detailed analytics and success stories</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full mt-8 border-[#007fdc] text-[#007fdc] hover:bg-[#007fdc] hover:text-white py-3 rounded-full transition-all duration-300 bg-transparent"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
