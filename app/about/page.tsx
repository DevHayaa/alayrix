import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Target,
  Globe,
  Zap,
  Shield,
  Brain,
  Star,
  Award,
  Lightbulb,
  Rocket,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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

      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38ceff]/5 via-transparent to-[#007fdc]/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#38ceff]/20 to-[#007fdc]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-[#01c2f7]/20 to-[#1c7dcd]/20 rounded-full blur-2xl animate-bounce"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="slide-in-left text-center lg:text-left">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
                style={{ color: "#071d56" }}
              >
                Redefining Content for{" "}
                <span className="bg-gradient-to-r from-[#007fdc] to-[#38ceff] bg-clip-text text-transparent">
                  Leaders
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                At Alayrix, we empower senior executives and ambitious professionals to communicate their ideas
                effectively through high-quality, multilingual content. Our mission is to simplify content creation
                while delivering measurable impact.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] to-[#007fdc] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>

            <div className="slide-in-right relative order-first lg:order-last">
              <div className="relative flex justify-center items-center">
                <img
                  src="/images/about-hero.png"
                  alt="3D UI Design and User Experience"
                  className=" object-contain animate-float"
                />

                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#01c2f7] rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#38ceff] rounded-full animate-float-delayed opacity-80"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-[#1c7dcd] rounded-full animate-float opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#071d56" }}>
              Why Choose Alayrix?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: "#007fdc" }} />,
                title: "Human Expertise + Technology",
                description:
                  "We combine human expertise and technology to deliver content that resonates with your audience.",
              },
              {
                icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: "#007fdc" }} />,
                title: "Multilingual Support",
                description:
                  "Our multilingual support ensures your message reaches the right audience in English, French, or Arabic.",
              },
              {
                icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: "#007fdc" }} />,
                title: "Executive-Focused",
                description:
                  "Designed for executives, practice leads, and teams, we make content management simple and professional.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="card-hover bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: "#071d56" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#071d56" }}>
              Meet the Minds Behind Alayrix
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines expertise in content strategy, digital marketing, and enterprise solutions to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="slide-in-left">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#007fdc]/5 to-[#38ceff]/5 p-6 sm:p-8 rounded-2xl border border-[#007fdc]/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: "#093b5f" }}>
                      Leadership Team
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our founders and executives bring decades of experience in content strategy, digital marketing, and
                    enterprise solutions, ensuring every project meets the highest standards of quality and
                    professionalism.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#38ceff]/5 to-[#01c2f7]/5 p-6 sm:p-8 rounded-2xl border border-[#38ceff]/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#38ceff] to-[#01c2f7] rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: "#093b5f" }}>
                      Core Team
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our professionals power Flowence and Alayrix content operations, specializing in multilingual
                    content, social media strategy, and executive-level content creation that drives real business
                    results.
                  </p>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#007fdc]/10 to-[#38ceff]/10 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-4">
                      <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#071d56" }}>
                      Expert Team
                    </h3>
                    <p className="text-gray-600">Specialized professionals across multiple domains</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Brain className="h-5 w-5" />, title: "Content Strategy", count: "5+" },
                      { icon: <Globe className="h-5 w-5" />, title: "Multilingual", count: "8+" },
                      { icon: <TrendingUp className="h-5 w-5" />, title: "Digital Marketing", count: "6+" },
                      { icon: <Rocket className="h-5 w-5" />, title: "Tech Innovation", count: "4+" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-2 text-white">
                          {item.icon}
                        </div>
                        <div className="text-lg font-bold" style={{ color: "#071d56" }}>
                          {item.count}
                        </div>
                        <div className="text-xs text-gray-600">{item.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#071d56]/5 to-[#38ceff]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#071d56" }}>
              How We Support Executive Content Creation
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="slide-in-left">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full flex items-center justify-center mr-4">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: "#071d56" }}>
                    For Enterprises (B2B)
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#007fdc] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Centralized platform for teams to draft, review, and publish content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#007fdc] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Maintain brand consistency and manage multilingual campaigns efficiently
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#007fdc] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Analytics to measure engagement and ROI for strategic optimization
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#38ceff] to-[#01c2f7] rounded-full flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold" style={{ color: "#071d56" }}>
                    For Individual Leaders (B2C)
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#38ceff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Build professional online presence without the cost of a full team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#38ceff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Access pre-designed templates and easy publishing tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#38ceff] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">
                      Focus on thought leadership while we handle technical aspects
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#071d56" }}>
              What Makes Alayrix Different
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages that set us apart in the content creation landscape
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Executive-Focused Content",
                description: "Crafted to reflect senior-level insight, ensuring executives are seen as authorities.",
                color: "from-[#007fdc] to-[#1c7dcd]",
                bgColor: "from-[#007fdc]/5 to-[#1c7dcd]/5",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Multilingual, Global Reach",
                description: "Publish seamlessly in English, French, and Arabic with cultural nuance.",
                color: "from-[#38ceff] to-[#01c2f7]",
                bgColor: "from-[#38ceff]/5 to-[#01c2f7]/5",
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                title: "Integrated Platform — Flowence",
                description: "An all-in-one solution from creation to publishing, with analytics & insights.",
                color: "from-[#1c7dcd] to-[#007fdc]",
                bgColor: "from-[#1c7dcd]/5 to-[#007fdc]/5",
              },
              {
                icon: <CheckCircle className="h-6 w-6" />,
                title: "Cost-Effective Excellence",
                description: "High-quality content at a fraction of the cost for both enterprises and individuals.",
                color: "from-[#007fdc] to-[#38ceff]",
                bgColor: "from-[#007fdc]/5 to-[#38ceff]/5",
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Tailored for Your Brand",
                description: "Custom branding & style guides and tools for executive & team collaboration.",
                color: "from-[#01c2f7] to-[#1c7dcd]",
                bgColor: "from-[#01c2f7]/5 to-[#1c7dcd]/5",
              },
              {
                icon: <Lightbulb className="h-6 w-6" />,
                title: "Human + AI-Enhanced Creativity",
                description: "AI-powered suggestions refined by human expertise for professional authenticity.",
                color: "from-[#38ceff] to-[#007fdc]",
                bgColor: "from-[#38ceff]/5 to-[#007fdc]/5",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.bgColor} p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-[#007fdc] transition-colors duration-300"
                  style={{ color: "#071d56" }}
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#38ceff]/5 to-[#007fdc]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#38ceff] to-[#007fdc] rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-[#01c2f7] to-[#1c7dcd] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-gradient-to-br from-[#1c7dcd] to-[#01c2f7] rounded-full animate-bounce"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-6">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6" style={{ color: "#071d56" }}>
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join executives and enterprises worldwide who trust Alayrix to elevate their content and amplify their
              voice.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="slide-in-left">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#007fdc] to-[#1c7dcd] rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#071d56" }}>
                      For Enterprise Teams
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Streamline your content workflow with Flowence platform and see measurable ROI
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#38ceff] to-[#01c2f7] rounded-full flex items-center justify-center">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#071d56" }}>
                      For Individual Leaders
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Build your professional presence without the complexity or cost of a full team
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1c7dcd] to-[#007fdc] rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#071d56" }}>
                      Global Multilingual Support
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Reach audiences worldwide with content in English, French, and Arabic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#38ceff]/20 to-[#007fdc]/20 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#007fdc] to-[#38ceff] rounded-full mb-4">
                      <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: "#071d56" }}>
                      Start Your Journey Today
                    </h3>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                      Experience the power of professional content creation with Alayrix
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#007fdc] to-[#1c7dcd] hover:from-[#1c7dcd] to-[#007fdc] text-white py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                        <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Request Enterprise Demo
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-[#38ceff] to-[#01c2f7] hover:from-[#01c2f7] to-[#38ceff] text-white mt-2 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                        <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Start Individual Plan
                      </Button>
                    </Link>
                    <div className="text-center pt-4">
                      <p className="text-xs sm:text-sm text-gray-500">
                        Free consultation available • No commitment required
                      </p>
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
