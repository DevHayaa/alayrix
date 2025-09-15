"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Workflow, Users, BarChart3, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Multilingual Content Creation",
    description:
      "Create and manage content in English, French, and Arabic seamlessly with AI-powered translation and cultural adaptation.",
  },
  {
    icon: Workflow,
    title: "Flowence Platform",
    description:
      "Access a powerful publishing tool tailored for digital marketing agencies and content teams with centralized management.",
  },
  {
    icon: Users,
    title: "Tailored Solutions",
    description: "Solutions for both individuals and enterprises, customized to your workflow and brand identity.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track engagement, measure ROI, and optimize your content strategy with comprehensive analytics dashboards.",
  },
  {
    icon: Clock,
    title: "Time-Saving Automation",
    description: "Automate content scheduling, publishing, and management to focus on strategy and growth.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with custom branding options and dedicated support for enterprise clients.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Streamline Your Content, <span className="text-[#071d56]">Amplify Your Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to create, manage, and publish professional content that resonates with your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
