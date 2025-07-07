import heroBg from '/app/src/assets/hero-bg.png'

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center px-0 bg-gradient-to-b from-white via-[#f6f3fd] to-[#ede9fe] overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full z-0 opacity-25 select-none pointer-events-none object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 text-center">
        <h1 className="text-[clamp(2.8rem,14vw,8rem)] font-extrabold leading-[1.05] tracking-tight mb-6">
          The future of <span className="text-[#8B5CF6]">proof.</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-600 max-w-3xl mb-10">
          A new standard for product authentication.<br />
          <span className="italic">For brands. For collectors. For the next era of trust.</span>
        </p>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white bg-[#6347f1] rounded-full shadow-lg hover:bg-[#4b2fd6] transition-all"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  )
}

export default Hero
