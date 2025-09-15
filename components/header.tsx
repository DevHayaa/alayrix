"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("EN")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-[#0B1635]/98 backdrop-blur-xl shadow-2xl border-b border-cyan-400/20"
          : "bg-[#0B1635]/95 backdrop-blur-lg"
      }`}
      style={{
        boxShadow: isScrolled
          ? "0 8px 32px rgba(0, 201, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
          : "0 4px 20px rgba(11, 22, 53, 0.4)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              <Image
                src="/alayrix-logo.png"
                alt="Alayrix"
                width={150}
                height={48}
                className="transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                style={{
                  filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 20px rgba(0, 201, 255, 0.3))",
                }}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-cyan-400/40 rounded-xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
              <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#2196F3]/20 to-[#00C9FF]/20 rounded-2xl blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-700 scale-125"></div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/flowence", label: "Flowence Platform" },
              { href: "/blog", label: "Blog" },
              { href: "/pricing", label: "Pricing" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white hover:text-[#00C9FF] font-medium text-sm tracking-wide transition-all duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2196F3] to-[#00C9FF] group-hover:w-full transition-all duration-500 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400/60 blur-sm group-hover:w-full transition-all duration-500 ease-out"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#00C9FF] hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 px-3 py-2 rounded-lg"
                >
                  <Globe size={16} className="mr-2" />
                  {selectedLanguage}
                  <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-[#132347]/98 backdrop-blur-xl border border-cyan-400/20 shadow-2xl z-[9999]"
                align="end"
                sideOffset={8}
                side="bottom"
                avoidCollisions={true}
                collisionPadding={10}
              >
                <DropdownMenuItem
                  onClick={() => setSelectedLanguage("EN")}
                  className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                >
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedLanguage("FR")}
                  className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                >
                  Français (FR)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedLanguage("AR")}
                  className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                >
                  العربية (AR)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="relative bg-gradient-to-r from-[#2196F3] via-[#1976D2] to-[#00C9FF] hover:from-[#1976D2] hover:via-[#2196F3] hover:to-[#00E5FF] text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 border border-cyan-400/30 overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Sign In</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C9FF]/30 to-[#2196F3]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150"></div>
            </Button>
          </div>

          <button
            className="lg:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
            ) : (
              <Menu size={24} className="text-white group-hover:text-cyan-400 transition-colors duration-300" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#132347]/98 backdrop-blur-xl border-t border-cyan-400/20 shadow-2xl">
            <nav className="flex flex-col space-y-1 p-6">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/flowence", label: "Flowence Platform" },
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-white hover:text-[#00C9FF] hover:bg-white/5 transition-all duration-300 font-medium py-3 px-4 rounded-lg group border border-transparent hover:border-cyan-400/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2196F3]/10 to-[#00C9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Link>
              ))}

              <div className="flex flex-col space-y-4 pt-6 border-t border-white/10 mt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-white hover:text-[#00C9FF] hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30 px-4 py-3 rounded-lg w-fit"
                    >
                      <Globe size={16} className="mr-2" />
                      {selectedLanguage}
                      <ChevronDown size={14} className="ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-[#132347]/98 backdrop-blur-xl border border-cyan-400/20 shadow-2xl z-[9999]"
                    align="start"
                    sideOffset={8}
                    side="bottom"
                    avoidCollisions={true}
                    collisionPadding={10}
                  >
                    <DropdownMenuItem
                      onClick={() => setSelectedLanguage("EN")}
                      className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                    >
                      English (EN)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedLanguage("FR")}
                      className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                    >
                      Français (FR)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setSelectedLanguage("AR")}
                      className="text-white hover:text-[#00C9FF] hover:bg-white/10 cursor-pointer"
                    >
                      العربية (AR)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  className="bg-gradient-to-r from-[#2196F3] to-[#00C9FF] hover:from-[#1976D2] hover:to-[#00E5FF] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-fit border border-cyan-400/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Sparkles size={16} className="mr-2" />
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }
export default Header
