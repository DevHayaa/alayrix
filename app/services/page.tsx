import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  FileText,
  Video,
  Share2,
  Users,
  Zap,
  Globe,
  BarChart3,
  Settings,
  CheckCircle,
  Star,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />

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

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38ceff]/5 via-transparent to-[#007fdc]/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#38ceff]/20 to-[#007fdc]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-[#01c2f7]/20 to-[#1c7dcd]/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left order-2 lg:order-1">
              <div className="relative flex justify-center items-center">
                <img
                  src="/images/service-hero.png"
                  alt="Mobile Development Services"
                  className="object-contain animate-float"
                />

                {/* Floating elements around 3D image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#01c2f7] rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#38ceff] rounded-full animate-float-delayed opacity-80"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#1c7dcd] rounded-full animate-float opacity-80"></div>
              </div>
            </div>

            <div className="slide-in-right text-center lg:text-left order-1 lg:order-2">
              <h1 className="text-4xl md:text-4xl font-bold mb-6 text-balance" style={{ color: "#071d56" }}>
                Content Solutions for{" "}
                <span className="bg-gradient-to-r from-[#007fdc] to-[#38ceff] bg-clip-text text-transparent">
                  Leaders
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-[#01c2f7] to-[#1c7dcd] bg-clip-text text-transparent">
                  Professionals
                </span>
                , and{" "}
                <span className="bg-gradient-to-r from-[#38ceff] to-[#007fdc] bg-clip-text text-transparent">
                  Ambitious Thought Leaders
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto lg:mx-0 leading-relaxed mb-8">
                High-quality multilingual content tailored to your voice and audience, designed to amplify your
                professional presence and thought leadership across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] hover:to-[#007fdc] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-0">
                    Start Creating Content
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    className="border-2 border-[#007fdc] text-[#007fdc] hover:bg-[#007fdc] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 bg-transparent"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#071d56" }}>
              Content Creation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-Quality Multilingual Content Tailored to Your Voice and Audience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: FileText,
                title: "Articles & Blogs",
                description:
                  "Professional articles and blog posts that establish your thought leadership and drive engagement",
                color: "#007fdc",
                bgColor: "#007fdc10",
              },
              {
                icon: Video,
                title: "Video Content",
                description:
                  "Engaging video scripts and multimedia content designed for maximum impact across platforms",
                color: "#007fdc",
                bgColor: "#007fdc10",
              },
              {
                icon: Share2,
                title: "Social Media",
                description:
                  "Strategic social media content optimized for LinkedIn, Twitter/X, and other professional networks",
                color: "#007fdc",
                bgColor: "#007fdc10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group slide-in-up hover:scale-105 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}80)` }}
                    ></div>
                    <item.icon className="w-10 h-10 relative z-10" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: "#071d56" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
                  <div className="mt-6 text-center">
                    <Link href="/contact">
                      <Button
                        variant="ghost"
                        className="text-sm font-medium hover:bg-transparent"
                        style={{ color: item.color }}
                      >
                        Learn More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Multilingual Content",
                desc: "English, French, and Arabic content for global reach",
                color: "#007fdc",
              },
              {
                icon: Target,
                title: "Executive Focus",
                desc: "Tailored strategies for senior leaders and executives",
                color: "#007fdc",
              },
              {
                icon: Users,
                title: "Individual Practice Leads",
                desc: "Cost-effective solutions for professionals",
                color: "#007fdc",
              },
              {
                icon: Settings,
                title: "Custom Requests",
                desc: "Personalized content aligned with your brand",
                color: "#007fdc",
              },
              {
                icon: Zap,
                title: "Fast & Reliable",
                desc: "Save time without sacrificing quality",
                color: "#007fdc",
              },
              {
                icon: CheckCircle,
                title: "Ready to Publish",
                desc: "Content optimized for immediate use",
                color: "#007fdc",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group slide-in-right bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2" style={{ color: "#071d56" }}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#38ceff]/5 to-[#007fdc]/5 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#38ceff]/10 to-[#007fdc]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[#01c2f7]/10 to-[#1c7dcd]/10 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#01c2f7] to-[#38ceff] rounded-full mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#071d56" }}>
                B2C – Individual Subscription Service
              </h2>
              <p className="text-xl mb-8" style={{ color: "#093b5f" }}>
                Your Professional Presence, Simplified
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Star,
                    title: "Exclusive Access",
                    desc: "Premium content and insights available to subscribers",
                    color: "#007fdc",
                  },
                  {
                    icon: Settings,
                    title: "Flexible Plans",
                    desc: "Monthly and annual subscription tiers for individuals",
                    color: "#007fdc",
                  },
                  {
                    icon: Target,
                    title: "Personal Branding",
                    desc: "Professional content tailored to enhance your presence",
                    color: "#007fdc",
                  },
                  {
                    icon: Zap,
                    title: "Ease of Use",
                    desc: "Simple workflow without dealing with complex systems",
                    color: "#007fdc",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: "#071d56" }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/pricing">
                <Button className="mt-8 px-8 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-[#01c2f7] to-[#38ceff] hover:from-[#38ceff] to-[#01c2f7]">
                  Subscribe Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38ceff]/20 to-[#007fdc]/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#01c2f7] to-[#38ceff] rounded-full mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#071d56" }}>
                      Individual Dashboard
                    </h3>
                    <p className="text-gray-600">Your content management simplified</p>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="flex justify-between items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#38ceff10" }}
                    >
                      <span className="font-medium" style={{ color: "#071d56" }}>
                        Content Queue
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full text-white bg-gradient-to-r from-[#007fdc] to-[#1c7dcd]">
                        5 Ready
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#01c2f710" }}
                    >
                      <span className="font-medium" style={{ color: "#071d56" }}>
                        This Month
                      </span>
                      <span className="text-sm font-medium" style={{ color: "#007fdc" }}>
                        12 Posts Published
                      </span>
                    </div>
                    <div
                      className="flex justify-between items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#1c7dcd10" }}
                    >
                      <span className="font-medium" style={{ color: "#071d56" }}>
                        Engagement
                      </span>
                      <span className="text-sm font-medium" style={{ color: "#007fdc" }}>
                        ↗ 24% Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#007fdc]/20 to-[#1c7dcd]/20 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#071d56" }}>
                      Enterprise Dashboard
                    </h3>
                    <p className="text-gray-600">Multi-team content management</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#071d56]/5 to-[#007fdc]/5 hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] bg-clip-text text-transparent">
                        150+
                      </div>
                      <div className="text-sm text-gray-600">Content Pieces</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#007fdc]/5 to-[#38ceff]/5 hover:scale-105 transition-transform duration-300">
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#01c2f7] to-[#38ceff] bg-clip-text text-transparent">
                        8
                      </div>
                      <div className="text-sm text-gray-600">Active Teams</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#38ceff10" }}
                    >
                      <span className="text-sm font-medium" style={{ color: "#071d56" }}>
                        Content Approval
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full text-white bg-gradient-to-r from-[#007fdc] to-[#1c7dcd]">
                        3 Pending
                      </span>
                    </div>
                    <div
                      className="flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: "#01c2f710" }}
                    >
                      <span className="text-sm font-medium" style={{ color: "#071d56" }}>
                        Analytics Report
                      </span>
                      <span className="text-xs font-medium" style={{ color: "#007fdc" }}>
                        Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#071d56" }}>
                B2B – Enterprise Solutions
              </h2>
              <p className="text-xl mb-8" style={{ color: "#093b5f" }}>
                Enterprise-Grade Content Management for Marketing Teams and Agencies
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Subscription Models",
                    desc: "Tailored packages for enterprises and agencies",
                    color: "#007fdc",
                  },
                  {
                    icon: Settings,
                    title: "Flowence Integration",
                    desc: "Seamlessly create, manage, and publish content",
                    color: "#007fdc",
                  },
                  {
                    icon: BarChart3,
                    title: "Scalable Solutions",
                    desc: "Multi-language content and team workflows",
                    color: "#007fdc",
                  },
                  {
                    icon: CheckCircle,
                    title: "Custom Features",
                    desc: "Brand customization and analytics dashboards",
                    color: "#007fdc",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: "#071d56" }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="mt-8 px-8 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] to-[#007fdc]">
                  Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#38ceff]/5 to-[#007fdc]/10 relative overflow-hidden">
        {/* Animated colorful circles like About page */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#38ceff] to-[#007fdc] rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-[#01c2f7] to-[#1c7dcd] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-gradient-to-br from-[#1c7dcd] to-[#01c2f7] rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-[#38ceff] to-[#01c2f7] rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-8 animate-float">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#071d56" }}>
              Start Publishing with Alayrix Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect solution for your content needs and begin your journey to enhanced professional
              presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: "#071d56" }}>
                      For Individuals
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Subscribe now and access premium content to build your professional brand with ease and
                      authenticity
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#38ceff] to-[#01c2f7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: "#071d56" }}>
                      For Enterprises
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      See how Flowence can streamline your content creation and publishing workflow for maximum ROI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1c7dcd] to-[#007fdc] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3" style={{ color: "#071d56" }}>
                      Global Reach
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Multilingual content in English, French, and Arabic to connect with audiences worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38ceff]/20 to-[#007fdc]/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-6">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#071d56" }}>
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-600 mb-8">Choose your path and transform your content strategy today</p>
                  </div>

                  <div className="space-y-4">
                    <Link href="/pricing">
                      <Button className="w-full bg-gradient-to-r from-[#01c2f7] to-[#38ceff] hover:from-[#38ceff] hover:to-[#01c2f7] text-white py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Target className="mr-2 h-5 w-5" />
                        Subscribe Now - Individual
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] hover:to-[#007fdc] text-white py-4 rounded-full mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Users className="mr-2 h-5 w-5" />
                        Request Demo - Enterprise
                      </Button>
                    </Link>
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-500"> Free consultation available • No commitment required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
