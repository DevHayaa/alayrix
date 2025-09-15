import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  BarChart3,
  Calendar,
  Globe,
  Edit3,
  CheckCircle,
  TrendingUp,
  Building2,
  User,
  Zap,
  Shield,
  Target,
  Headphones,
} from "lucide-react"

export default function FlowencePage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071d56] via-[#093b5f] to-[#1c7dcd] opacity-5"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#01c2f7] to-[#38ceff] opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] opacity-15 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-[#38ceff] to-[#01c2f7] opacity-20 animate-float"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-[#071d56] leading-tight">
                  <span className="block">Flowence</span>
                  <span className="block bg-gradient-to-r from-[#007fdc] to-[#38ceff] bg-clip-text text-transparent">
                    Your Central Hub
                  </span>
                  <span className="block text-3xl lg:text-4xl text-[#071d56] font-medium">
                    for Professional Content Creation
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  A powerful, easy-to-use platform for thought leaders and enterprises to manage, create, and publish
                  professional content across all channels.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] hover:to-[#007fdc] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#007fdc] text-[#007fdc] hover:bg-[#007fdc] hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative flex justify-center items-center mb-8">
                <img
                  src="/images/flowence-hero.png"
                  alt="3D Dashboard Interface"
                  className="object-contain animate-float max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Flowence Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#071d56] mb-6">What is Flowence?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A powerful, easy-to-use platform for thought leaders and enterprises
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#071d56] mb-2">For Executives & Enterprises</h3>
                    <p className="text-slate-600">
                      Manage multilingual content, streamline workflows, and maintain consistent messaging across all
                      channels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#01c2f7] to-[#38ceff] rounded-xl flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#071d56] mb-2">For Individual Practice Leads</h3>
                    <p className="text-slate-600">
                      Schedule, optimize, and publish professional content with minimal effort, enhancing personal
                      branding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#1c7dcd] to-[#093b5f] rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#071d56] mb-2">Seamless Integration</h3>
                    <p className="text-slate-600">
                      Works with LinkedIn, X (Twitter), Instagram, and other digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-[#007fdc]/10 to-[#1c7dcd]/10 rounded-xl">
                    <Users className="h-8 w-8 text-[#007fdc] mx-auto mb-2" />
                    <p className="font-semibold text-[#071d56]">Team Collaboration</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#01c2f7]/10 to-[#38ceff]/10 rounded-xl">
                    <Globe className="h-8 w-8 text-[#007fdc] mx-auto mb-2" />
                    <p className="font-semibold text-[#071d56]">Multi-Platform</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#38ceff]/10 to-[#01c2f7]/10 rounded-xl">
                    <BarChart3 className="h-8 w-8 text-[#007fdc] mx-auto mb-2" />
                    <p className="font-semibold text-[#071d56]">Analytics</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-[#1c7dcd]/10 to-[#093b5f]/10 rounded-xl">
                    <Shield className="h-8 w-8 text-[#007fdc] mx-auto mb-2" />
                    <p className="font-semibold text-[#071d56]">Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#071d56] mb-6">All the Tools You Need in One Place</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive content management from creation to analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Edit3,
                title: "Content Creation",
                description: "Draft blogs, articles, posts, and videos directly in Flowence.",
                gradient: "from-[#007fdc] to-[#1c7dcd]",
              },
              {
                icon: CheckCircle,
                title: "Approval Workflows",
                description: "Assign tasks, review drafts, and approve content before publishing.",
                gradient: "from-[#01c2f7] to-[#38ceff]",
              },
              {
                icon: BarChart3,
                title: "Analytics & Insights",
                description: "Track engagement, impressions, and performance metrics.",
                gradient: "from-[#1c7dcd] to-[#093b5f]",
              },
              {
                icon: Target,
                title: "Brand Customization",
                description: "Apply corporate branding, colors, and templates for enterprise users.",
                gradient: "from-[#38ceff] to-[#01c2f7]",
              },
              {
                icon: Globe,
                title: "Multi-Language Support",
                description: "Create and publish content in English, French, and Arabic with ease.",
                gradient: "from-[#093b5f] to-[#071d56]",
              },
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Plan and automate posts across multiple platforms seamlessly.",
                gradient: "from-[#007fdc] to-[#01c2f7]",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#071d56] mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#071d56] mb-6">From Concept to Publish — Simplified</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four simple steps to transform your content strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create",
                description: "Draft content or request AI-assisted creation tailored to your audience.",
                icon: Edit3,
                color: "#007fdc",
              },
              {
                step: "02",
                title: "Review",
                description: "Collaborate with team members or approve drafts individually.",
                icon: CheckCircle,
                color: "#01c2f7",
              },
              {
                step: "03",
                title: "Schedule",
                description: "Plan posts across multiple platforms with a single click.",
                icon: Calendar,
                color: "#1c7dcd",
              },
              {
                step: "04",
                title: "Publish & Monitor",
                description: "Automatic publishing and performance tracking in one dashboard.",
                icon: TrendingUp,
                color: "#38ceff",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#007fdc] to-[#38ceff] opacity-30 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 z-10">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>
                    <step.icon className="h-8 w-8 mx-auto mb-4" style={{ color: step.color }} />
                    <h3 className="text-xl font-semibold text-[#071d56] mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#071d56] mb-6">
              Efficiency, Scale, and Professional Presence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">All in one platform — tailored for your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enterprise Benefits */}
            <div className="bg-gradient-to-br from-[#007fdc]/5 to-[#1c7dcd]/5 rounded-2xl p-8 animate-slide-in-left">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#071d56]">For Enterprises</h3>
              </div>

              <div className="space-y-6">
                {[
                  "Centralized management of all content and teams",
                  "Improved efficiency with approval workflows and scheduling",
                  "Analytics-driven insights to measure ROI on content strategy",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#007fdc] flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Benefits */}
            <div className="bg-gradient-to-br from-[#01c2f7]/5 to-[#38ceff]/5 rounded-2xl p-8 animate-slide-in-right">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#01c2f7] to-[#38ceff] rounded-xl flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#071d56]">For Individuals</h3>
              </div>

              <div className="space-y-6">
                {[
                  "Easy-to-use platform to maintain a professional presence",
                  "Cost-effective solution compared to agencies",
                  "Schedule and publish consistently without technical expertise",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#01c2f7] flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#071d56] to-[#093b5f] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-[#01c2f7] to-[#38ceff] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Experience Flowence for Your Team</h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Book a walkthrough for your enterprise or agency with custom branding options and dedicated onboarding
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#01c2f7] to-[#38ceff] hover:from-[#38ceff] hover:to-[#01c2f7] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#071d56] px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-transparent"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
