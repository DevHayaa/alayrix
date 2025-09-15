import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, TrendingUp, Users, Target, Globe, Lightbulb, Mail, Play, PenTool } from "lucide-react"

export default function BlogPage() {
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

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#071d56] mb-6 animate-fade-in-up">
            Insights, Strategies,{" "}
            <span className="bg-gradient-to-r from-[#007fdc] to-[#01c2f7] bg-clip-text text-transparent">
              and Stories
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#093b5f] max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            for Modern Professionals
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-[#007fdc] border border-[#007fdc]/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Industry Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#071d56] mb-6">Discover Thought Leadership</h2>
            <p className="text-lg text-[#093b5f] max-w-2xl mx-auto">
              Explore expert analysis, trends, and strategies across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Content Marketing Strategies",
                description: "Effective storytelling and building authority",
                articles: [
                  "The Power of Consistent Content for Thought Leaders",
                  "Digital Storytelling for C-Suite and Practice Leads",
                ],
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Multilingual Content",
                description: "Create content for diverse audiences",
                articles: [
                  "Expanding Your Reach: Multilingual Content Strategies",
                  "Leveraging AI Tools for Multilingual Content Creation",
                ],
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Industry Trends",
                description: "Digital marketing innovations and practices",
                articles: [
                  "How Personal Branding Enhances Professional Influence",
                  "Measuring the ROI of Executive Content",
                ],
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Executive Perspective",
                description: "High-level insights for senior leaders",
                articles: ["Content Planning for Busy Executives", "5 Ways to Save Time on Executive Content Creation"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 border border-gray-100 rounded-2xl hover:border-[#007fdc]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 border-2 border-[#007fdc]/20 rounded-xl flex items-center justify-center text-[#007fdc] mb-4 group-hover:border-[#007fdc] group-hover:bg-[#007fdc] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#071d56] mb-2 group-hover:text-[#007fdc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#093b5f] text-sm mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.articles.map((article, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-[#1c7dcd] hover:text-[#007fdc] cursor-pointer transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {article}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-[#1c7dcd] border border-[#1c7dcd]/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Case Studies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#071d56] mb-6">Real Success Stories</h2>
            <p className="text-lg text-[#093b5f] max-w-2xl mx-auto">
              See how Alayrix and Flowence empower professionals and enterprises
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "Enterprise Success",
                title: "Elevating Practice Leads through Content: A B2B Marketing Success Story",
                description:
                  "A practice lead used Alayrix and Flowence to establish social media presence while managing a full client portfolio",
                impact: "120% follower increase",
                gradient: "from-[#007fdc] to-[#01c2f7]",
              },
              {
                category: "Individual Impact",
                title: "From Zero to Authority: How LinkedIn Engagement Tripled with Strategic Content",
                description:
                  "Cost-effective personal branding and online presence building using structured content creation",
                impact: "3x engagement growth",
                gradient: "from-[#1c7dcd] to-[#38ceff]",
              },
              {
                category: "Cross-Industry",
                title: "Client Inquiries Surge Through Visible Thought Leadership",
                description:
                  "Even individuals can leverage structured content creation to expand influence cost-effectively",
                impact: "Increased client inquiries",
                gradient: "from-[#093b5f] to-[#007fdc]",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-in-up overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  background: `linear-gradient(135deg, ${study.gradient.includes("007fdc") ? "rgba(0, 127, 220, 0.03)" : study.gradient.includes("1c7dcd") ? "rgba(28, 125, 205, 0.03)" : "rgba(9, 59, 95, 0.03)"} 0%, rgba(255, 255, 255, 0.8) 100%)`,
                  border: "1px solid rgba(0, 127, 220, 0.1)",
                }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${study.gradient}`}></div>
                <div className="text-sm font-medium text-[#007fdc] mb-3">{study.category}</div>
                <h3 className="text-xl font-bold text-[#071d56] mb-4 group-hover:text-[#007fdc] transition-colors leading-tight">
                  {study.title}
                </h3>
                <p className="text-[#093b5f] text-sm leading-relaxed mb-6">{study.description}</p>
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${study.gradient} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}
                >
                  <TrendingUp className="w-4 h-4" />
                  {study.impact}
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-[#007fdc] hover:text-white hover:bg-[#007fdc] group-hover:translate-x-1 transition-all border border-[#007fdc]/20 hover:border-[#007fdc]"
                >
                  Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-[#38ceff] border border-[#38ceff]/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Lightbulb className="w-4 h-4" />
              Content Creation Tips
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#071d56] mb-6">Practical Guidance</h2>
            <p className="text-lg text-[#093b5f] max-w-2xl mx-auto">
              For executives, marketers, and individual professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Target className="w-5 h-5" />,
                title: "Optimizing Social Presence",
                tip: "5 Ways to Save Time on Executive Content Creation",
                description: "Systematic approaches to reduce effort without compromising quality for busy executives",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Efficient Workflows",
                tip: "How to Turn Short Articles into High-Impact LinkedIn Posts",
                description: "Strategic approaches for crafting posts that drive engagement and thought leadership",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
                title: "Content That Converts",
                tip: "Measuring the ROI of Executive Content",
                description: "Track reach, engagement, and leads to quantify the value of your content efforts",
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "AI + Human Collaboration",
                tip: "Leveraging AI Tools for Multilingual Content Creation",
                description:
                  "Use AI-driven tools to produce high-quality, multilingual posts quickly while maintaining authenticity",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 border-l-4 border-[#007fdc]/20 hover:border-[#007fdc] pl-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-[#007fdc]/20 rounded-lg flex items-center justify-center text-[#007fdc] group-hover:border-[#007fdc] group-hover:bg-[#007fdc] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#071d56] group-hover:text-[#007fdc] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-[#1c7dcd] mb-2">{item.tip}</div>
                    <p className="text-[#093b5f] text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-[#071d56] mb-6">Stay Connected</h2>
            <p className="text-lg text-[#093b5f]">Join our community of modern professionals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Subscribe to Insights",
                description: "Get the latest articles, case studies, and tips delivered to your inbox",
                action: "Subscribe Now",
                gradient: "from-[#007fdc] to-[#01c2f7]",
              },
              {
                icon: <Play className="w-6 h-6" />,
                title: "Request a Demo",
                description: "Learn how Flowence can simplify content creation for your enterprise team",
                action: "Get Demo",
                gradient: "from-[#1c7dcd] to-[#38ceff]",
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Contribute Your Story",
                description: "Share your experiences and be featured in our resources",
                action: "Share Story",
                gradient: "from-[#38ceff] to-[#01c2f7]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-slide-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  background: "rgba(255, 255, 255, 0.8)",
                  border: "1px solid rgba(0, 127, 220, 0.1)",
                }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#071d56] group-hover:text-[#007fdc] transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-[#093b5f] text-sm leading-relaxed mb-6">{item.description}</p>
                <Button
                  className={`w-full bg-gradient-to-r ${item.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0`}
                >
                  {item.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
