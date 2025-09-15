"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Flowence allowed our practice leads to maintain a professional social presence without sacrificing client work. The platform is intuitive and impactful.",
    author: "Senior Executive",
    company: "Zernam Enterprise",
    industry: "Staffing & Recruitment",
  },
  {
    quote:
      "Alayrix made it effortless to showcase our expertise and maintain visibility in multiple languages. The impact on our stakeholder engagement is undeniable.",
    author: "Director",
    company: "Contract Community",
    industry: "Joint Venture & Contract Management",
  },
  {
    quote:
      "Flowence transformed how we communicate our expertise. Now, our thought leadership is consistent, multilingual, and measurable.",
    author: "CTO",
    company: "TechWired",
    industry: "Technology Consulting",
  },
  {
    quote:
      "With Alayrix, our leadership can now consistently share insights, reach the right audience, and track engagement—all without additional overhead.",
    author: "CEO",
    company: "BnR360",
    industry: "AI-Powered Recruitment",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by <span className="text-primary">Executives</span> and Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how leaders across industries are transforming their content strategy with Alayrix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote size={24} className="text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-foreground text-lg italic pl-6 text-pretty">"{testimonial.quote}"</p>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-primary font-medium">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
