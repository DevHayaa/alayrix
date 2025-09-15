"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, User, ArrowRight, CheckCircle } from "lucide-react"

const b2bBenefits = [
  "Streamline content creation across teams and platforms",
  "Maintain consistent branding and messaging",
  "Analytics and insights to measure engagement and ROI",
  "Custom workflows and approval processes",
  "Multi-client management capabilities",
]

const b2cBenefits = [
  "Build a professional social media presence cost-effectively",
  "Publish quality content consistently without hiring a team",
  "Gain visibility and credibility in your niche",
  "AI-powered content suggestions and optimization",
  "Flexible subscription plans that scale with your needs",
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Solutions for Both <span className="text-primary">Enterprises</span> and{" "}
            <span className="text-accent">Individual Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you're scaling content operations or building your personal brand, Alayrix has the right solution
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* B2B Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-background border-border">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 size={32} className="text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">For Enterprises & Agencies</CardTitle>
              <p className="text-muted-foreground">Comprehensive content solutions for teams and organizations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {b2bBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Request a Demo
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* B2C Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 bg-background border-border">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto p-4 bg-accent/10 rounded-full w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <User size={32} className="text-accent" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">For Practice Leads & Professionals</CardTitle>
              <p className="text-muted-foreground">Personal branding and thought leadership made simple</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {b2cBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                  Get Started
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
