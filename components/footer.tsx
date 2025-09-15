import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#071d56] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071d56] via-[#093b5f] to-[#0B1635] opacity-90"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-2 h-2 bg-[#01c2f7] rounded-full animate-float opacity-60"
          style={{ left: "10%", animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-1 h-1 bg-[#38ceff] rounded-full animate-float opacity-40"
          style={{ left: "20%", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-3 h-3 bg-[#007fdc] rounded-full animate-float opacity-30"
          style={{ left: "80%", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute w-1.5 h-1.5 bg-[#1c7dcd] rounded-full animate-float opacity-50"
          style={{ left: "90%", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="">
            <Image
              src="/images/alayrix-logo.png"
              alt="Alayrix"
              width={140}
              height={65}
              className=""
            />
            <p className="text-gray-200 text-sm mb-12 leading-relaxed">
              Empowering executives and enterprises with professional, multilingual content creation and management
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-[#01c2f7] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} className="text-gray-200 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-[#01c2f7] transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} className="text-gray-200 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-[#01c2f7] transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} className="text-gray-200 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="group p-2 rounded-full bg-white/10 hover:bg-[#01c2f7] transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} className="text-gray-200 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#01c2f7] to-[#38ceff]"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/flowence"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Flowence Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg relative">
              Solutions
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-[#01c2f7] to-[#38ceff]"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/enterprise"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="/individual"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Individual
                </Link>
              </li>
              <li>
                <Link
                  href="/agencies"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-200 hover:text-[#01c2f7] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2024 Alayrix. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-300 hover:text-[#01c2f7] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-300 hover:text-[#01c2f7] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-[#01c2f7] text-sm transition-colors">
              FAQs
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
