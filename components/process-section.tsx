"use client"

import { motion } from "framer-motion"
import { FileText, Users, Rocket } from "lucide-react"

export function ProcessSection() {
  const processes = [
    {
      number: "01",
      title: "Content Strategy",
      description:
        "We analyze your brand voice, target audience, and business goals to create a tailored content strategy.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Content Creation",
      description:
        "Our expert team crafts compelling, multilingual content that resonates with your audience across all platforms.",
      icon: Users,
    },
    {
      number: "03",
      title: "Amplify & Optimize",
      description: "We distribute your content strategically and continuously optimize performance for maximum impact.",
      icon: Rocket,
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-12 right-12 opacity-10">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3] to-[#00C9FF] rounded-lg transform rotate-12"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-[#00C9FF] to-[#2196F3] rounded-lg transform -rotate-12"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-slate-600 mb-4 tracking-wider uppercase">Our Work Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            <span className="text-[#0B1635]">Content creation solutions</span>
            <br />
            <span className="text-[#2196F3]">for modern businesses.</span>
          </h2>

          <div className="flex items-center justify-center mt-8">
            <div className="w-12 h-px bg-slate-300"></div>
            <div className="w-2 h-2 bg-[#00C9FF] rounded-full mx-3"></div>
            <div className="w-12 h-px bg-slate-300"></div>
          </div>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative"
            >
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px">
                  <div className="absolute left-1/2 w-32 h-px border-t-2 border-dotted border-slate-300 transform translate-x-8"></div>
                </div>
              )}

              <div className="text-xs font-semibold text-[#2196F3] mb-4 tracking-wider">{process.number}</div>

              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#2196F3]/5 to-[#00C9FF]/5 rounded-full flex items-center justify-center border border-[#2196F3]/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2196F3]/10 to-[#00C9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <process.icon className="w-8 h-8 text-[#007fdc] relative z-10" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#0B1635] mb-4">{process.title}</h3>
              <p className="text-slate-700 leading-relaxed text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
