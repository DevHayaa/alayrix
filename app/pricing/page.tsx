"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Check, Users, Zap, Shield, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const pricingData = {
    monthly: {
      starter: { price: 10, yearlyPrice: null },
      pro: { price: 20, yearlyPrice: null },
      executive: { price: 50, yearlyPrice: null },
    },
    yearly: {
      starter: { price: 108, yearlyPrice: 120 },
      pro: { price: 216, yearlyPrice: 240 },
      executive: { price: 540, yearlyPrice: 600 },
    },
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Particles Background */}
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

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-[#071d56] mb-6 leading-tight">
                Choose the Plan That{" "}
                <span className="bg-gradient-to-r from-[#2196F3] to-[#00C9FF] bg-clip-text text-transparent">
                  Fits Your Goals
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're an individual building your brand or a team scaling content operations, Alayrix offers
                flexible plans to empower your journey.
              </p>
            </div>
          </div>
        </section>

        {/* B2C Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-4">For Individuals</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                Ideal for executives, practice leads, and professionals who want a consistent, high-quality content
                presence.
              </p>

              <div className="flex justify-center mb-8">
                <ToggleGroup
                  type="single"
                  value={billingPeriod}
                  onValueChange={(value) => value && setBillingPeriod(value as "monthly" | "yearly")}
                  className="bg-white border border-slate-200 rounded-xl p-1"
                >
                  <ToggleGroupItem
                    value="monthly"
                    className="px-6 py-2 rounded-lg data-[state=on]:bg-[#2196F3] data-[state=on]:text-white"
                  >
                    Monthly
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="yearly"
                    className="px-6 py-2 rounded-lg data-[state=on]:bg-[#2196F3] data-[state=on]:text-white"
                  >
                    Yearly
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Save 10%</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Starter Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30 group">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#071d56] mb-2">Starter</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#2196F3]">
                      ${pricingData[billingPeriod].starter.price}
                    </span>
                    <span className="text-slate-500">{billingPeriod === "monthly" ? "/month" : "/year"}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <div className="text-sm text-green-600 mb-6">
                      Save ${pricingData.yearly.starter.yearlyPrice! - pricingData.yearly.starter.price} annually
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />1 post/month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Basic design
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Standard hashtags
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white rounded-xl py-3">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30 group">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#071d56] mb-2">Pro</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#2196F3]">${pricingData[billingPeriod].pro.price}</span>
                    <span className="text-slate-500">{billingPeriod === "monthly" ? "/month" : "/year"}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <div className="text-sm text-green-600 mb-6">
                      Save ${pricingData.yearly.pro.yearlyPrice! - pricingData.yearly.pro.price} annually
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />2 posts/month
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Enhanced design
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Basic analytics
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white rounded-xl py-3">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Executive Plan - Popular */}
              <div className="bg-gradient-to-br from-[#2196F3] to-[#00C9FF] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    Popular
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Executive</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">${pricingData[billingPeriod].executive.price}</span>
                    <span className="text-white/80">{billingPeriod === "monthly" ? "/month" : "/year"}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <div className="text-sm text-white/90 mb-6">
                      Save ${pricingData.yearly.executive.yearlyPrice! - pricingData.yearly.executive.price} annually
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    Weekly posts
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    Premium design
                  </li>
                  <li className="flex items-center text-white">
                    <Check className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                    Monthly analytics + support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-white text-[#2196F3] hover:bg-white/90 rounded-xl py-3 font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>

              {/* Custom Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30 group">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#071d56] mb-2">Custom</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-[#2196F3]">Custom</span>
                    <span className="text-slate-500 block text-sm">Pricing</span>
                  </div>
                  <div className="text-sm text-[#007fdc] mb-6">Tailored to your needs</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Tailored frequency
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Advanced content types
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Dedicated manager
                  </li>
                </ul>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white rounded-xl py-3 bg-transparent"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-4">For Teams & Enterprises</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Designed for agencies and businesses using Flowence for multi-client, multilingual content management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30">
                <div className="text-center mb-8">
                  <Users className="w-12 h-12 text-[#2196F3] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#071d56] mb-4">Team</h3>
                  <p className="text-slate-600">Perfect for small teams getting started</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Multi-user access
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Content workflows
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white rounded-xl py-3">
                    Request Quote
                  </Button>
                </Link>
              </div>

              {/* Agency Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30">
                <div className="text-center mb-8">
                  <Zap className="w-12 h-12 text-[#2196F3] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#071d56] mb-4">Agency</h3>
                  <p className="text-slate-600">Advanced features for growing agencies</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Team features +
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Multi-client management
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Advanced reporting
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white rounded-xl py-3">
                    Request Quote
                  </Button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#2196F3]/30">
                <div className="text-center mb-8">
                  <Shield className="w-12 h-12 text-[#2196F3] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#071d56] mb-4">Enterprise</h3>
                  <p className="text-slate-600">Complete solution for large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Agency features +
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Custom branding
                  </li>
                  <li className="flex items-center text-slate-600">
                    <Check className="w-5 h-5 text-[#2196F3] mr-3 flex-shrink-0" />
                    Dedicated support
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white rounded-xl py-3">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* B2B CTA */}
            <div className="text-center mt-12">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#071d56] to-[#093b5f] hover:from-[#093b5f] hover:to-[#071d56] text-white px-8 py-4 rounded-xl text-lg font-semibold">
                  <Users className="w-5 h-5 mr-2" />
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#071d56] mb-3">Can I change plans later?</h3>
                <p className="text-slate-600">Yes! Upgrade or downgrade anytime to fit your evolving needs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#071d56] mb-3">Is there a contract?</h3>
                <p className="text-slate-600">
                  Monthly plans are flexible. Annual plans require commitment but save 10%.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#071d56] mb-3">Do you offer refunds?</h3>
                <p className="text-slate-600">We offer a 14-day money-back guarantee for annual subscriptions.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[#071d56] mb-3">How do I request a custom plan?</h3>
                <p className="text-slate-600">Click "Request Quote" or contact us at enterprise@alayrix.com.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-6">Still Not Sure?</h2>
            <p className="text-xl text-slate-600 mb-12">
              We're here to help you find the perfect plan for your content goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white px-8 py-4 rounded-xl font-semibold">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-8 py-4 rounded-xl font-semibold bg-transparent"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
