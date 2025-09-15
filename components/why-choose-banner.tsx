import Image from "next/image"

export function WhyChooseBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hidden md:flex">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CA8spOhKPk3cCr80nKhTYHzzc09erw.png"
          alt="Why Choose Alayrix - Creative professional working"
          fill
          className="object-contain object-center"
          priority
        />
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-transparent" />
      </div>

     
    </section>
  )
}
