"use client"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#111111] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance">
          Защита ваших интересов — <span className="text-[#888888]">наш приоритет</span>
        </h1>
        <p className="text-lg md:text-xl text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Профессиональные юридические услуги для бизнеса и частных лиц. Индивидуальный подход к каждому делу с
          гарантией конфиденциальности.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="inline-block bg-[#333333] text-white px-8 py-4 text-sm font-medium hover:bg-black transition-colors duration-200"
        >
          Получить консультацию
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#555555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
