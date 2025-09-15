"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"general" | "demo">("general")

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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

      <section className="bg-white py-16 lg:py-24 mt-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#071d56] leading-tight">
                Ready to transform your{" "}
                <span className="bg-gradient-to-r from-[#007fdc] to-[#38ceff] bg-clip-text text-transparent">
                  content strategy?
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with our content experts and discover how Alayrix can elevate your professional presence and
                streamline your content creation process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-[#071d56]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#007fdc]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#007fdc]" />
                  </div>
                  <span className="font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#007fdc]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#007fdc]" />
                  </div>
                  <span className="font-medium">info@alayrix.com</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative flex justify-center items-center">
                  <div className="w-72 h-72 flex items-center justify-center">
                    {/* Main circle with subtle gradient */}
                    <div className="relative animate-float">
                      <img
                        src="/images/contact-hero.png"
                        alt="Contact envelope"
                        className="object-contain animate-bounce-slow hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                      />

                      {/* Simple floating elements around the envelope */}
                      <div className="absolute -top-4 -right-4 w-3 h-3 bg-[#38ceff] rounded-full animate-float opacity-80"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#01c2f7] rounded-full animate-float-delayed opacity-70"></div>
                      <div className="absolute top-1/2 -right-6 w-2 h-2 bg-[#007fdc] rounded-full animate-bounce opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gray-50/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-lg">Choose how you'd like to get started with Alayrix</p>

            {/* Form Type Selector */}
            <div className="flex justify-center mt-8 mb-8">
              <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
                <button
                  onClick={() => setActiveForm("general")}
                  className={`px-6 py-3 rounded-lg transition-all font-medium ${
                    activeForm === "general" ? "bg-[#007fdc] text-white shadow-md" : "text-[#071d56] hover:bg-gray-50"
                  }`}
                >
                  General Inquiries
                </button>
                <button
                  onClick={() => setActiveForm("demo")}
                  className={`px-6 py-3 rounded-lg transition-all font-medium ${
                    activeForm === "demo" ? "bg-[#007fdc] text-white shadow-md" : "text-[#071d56] hover:bg-gray-50"
                  }`}
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {activeForm === "general" ? (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Full Name*</label>
                    <Input
                      placeholder="Enter your full name"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Email Address*</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Company Name</label>
                    <Input
                      placeholder="Enter your company name (optional)"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Subject*</label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="services">Content Creation Services</SelectItem>
                        <SelectItem value="subscription">Individual Subscription</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#071d56] mb-3">Message*</label>
                  <Textarea
                    placeholder="Tell us about your content needs..."
                    rows={5}
                    className="border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg resize-none"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button className="bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] hover:to-[#007fdc] text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </div>
              </form>
            ) : (
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Full Name*</label>
                    <Input
                      placeholder="Enter your full name"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Work Email*</label>
                    <Input
                      type="email"
                      placeholder="Enter your work email"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Company Name*</label>
                    <Input
                      placeholder="Enter your company name"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Job Title*</label>
                    <Input
                      placeholder="Enter your job title"
                      className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">Company Size*</label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#071d56] mb-3">
                      How did you hear about us?
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="search">Search Engine</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Event/Conference</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#071d56] mb-3">Tell us about your use case</label>
                  <Textarea
                    placeholder="Describe your content creation challenges and goals..."
                    rows={5}
                    className="border-gray-200 focus:border-[#007fdc] focus:ring-[#007fdc] rounded-lg resize-none"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button className="bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] hover:to-[#007fdc] text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule a Demo
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="h-screen bg-gray-100 relative z-10 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-24 h-24 bg-[#007fdc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-[#007fdc]" />
          </div>
          <h3 className="text-2xl font-bold text-[#071d56] mb-4">Interactive Map</h3>
          <p className="text-lg">Alayrix Headquarters</p>
          <p className="text-gray-400">Tech District, California</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071d56] mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">We're here to help you transform your content strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#071d56] mb-3">Visit Us</h3>
              <p className="text-gray-600 leading-relaxed">
                123 Innovation Drive
                <br />
                Tech District, CA 94105
                <br />
                United States
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#071d56] mb-3">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                +1 (555) 123-4567
                <br />
                Mon - Fri: 9AM - 6PM PST
                <br />
                24/7 Support Available
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#071d56] mb-3">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">
                info@alayrix.com
                <br />
                support@alayrix.com
                <br />
                partnerships@alayrix.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
