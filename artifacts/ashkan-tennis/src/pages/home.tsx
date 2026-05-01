import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Trophy, Users, Target, Activity, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import photoAction from "@assets/IMG_4583_1777664938316.PNG";
import photoPortrait from "@assets/IMG_4584_1777664938317.PNG";
import courtPhoto from "@assets/tennis_court_aerial.jpg";

const WHATSAPP_LINK = "https://wa.me/17789293090";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0d1621]/90 backdrop-blur-xl border-b border-white/8 shadow-2xl" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <span className="text-white font-black tracking-tight text-xl" style={{ fontFamily: "var(--font-display)" }}>
          ASHKAN <span className="text-[#c9f55a]">TAGHINIA</span>
        </span>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          <button className="hidden sm:flex items-center gap-2 bg-[#c9f55a] text-[#0d1621] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-200">
            Book via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </button>
        </a>
      </div>
    </nav>
  );
}

function StatsTicker() {
  const items = [
    "10+ Years Experience",
    "Kids · Beginner · Professional",
    "Vancouver, BC",
    "100% Personalized",
    "All Skill Levels",
    "Private Sessions",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#c9f55a] overflow-hidden py-3 relative">
      <div className="flex gap-0 animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-[#0d1621] font-bold text-sm uppercase tracking-widest px-10 flex items-center gap-10">
            {item}
            <span className="text-[#0d1621]/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-[#0d1621] text-white overflow-x-hidden">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex overflow-hidden">
        {/* Parallax photo */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src={photoPortrait}
            alt="Ashkan Taghinia"
            className="w-full h-[115%] object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </motion.div>

        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1621] via-[#0d1621]/80 to-[#0d1621]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1621] via-transparent to-[#0d1621]/40" />

        {/* Diagonal accent strip */}
        <div
          className="absolute top-0 left-0 w-2 h-full bg-[#c9f55a]"
          style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", width: "6px" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-24 md:pb-32 w-full lg:w-[58%]">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-5">
            <motion.div variants={fadeIn} className="flex items-center gap-3 flex-wrap">
              <div className="h-px w-8 bg-[#c9f55a] shrink-0" />
              <span className="text-[#c9f55a] font-semibold text-xs md:text-sm uppercase tracking-[0.15em] leading-tight">
                Elite Tennis Coaching · Vancouver, BC
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-[clamp(3rem,9vw,7rem)] font-black leading-[0.88] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ASHKAN<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ffffff 40%, #c9f55a 100%)" }}>
                TAGHINIA
              </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/70 max-w-md leading-relaxed font-light">
              Master your technique. Build your confidence. Own the court.
              Professional coaching for every skill level.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c9f55a] text-[#0d1621] font-black text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(201,245,90,0.3)] uppercase tracking-wider group">
                  Book Your Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#plans" className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300">
                View Plans
              </a>
            </motion.div>
          </motion.div>

          {/* Bottom ratings strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-20 left-8 md:left-16 lg:left-24 flex items-center gap-6"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#c9f55a] fill-[#c9f55a]" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-medium">Trusted by Vancouver players of all levels</span>
          </motion.div>
        </div>

        {/* Right stat panel — desktop */}
        <div className="absolute right-8 bottom-24 hidden lg:flex flex-col gap-6">
          {[
            { num: "10+", label: "Years on Court" },
            { num: "3", label: "Training Plans" },
            { num: "1:1", label: "Private Sessions" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              className="text-right"
            >
              <p className="text-4xl font-black text-[#c9f55a]" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <StatsTicker />

      {/* ── 2. ABOUT ── */}
      <section className="py-16 md:py-28 lg:py-36 px-6 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="relative"
            >
              {/* Photo with editorial frame */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#c9f55a] z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/5] shadow-2xl">
                  <img
                    src={photoAction}
                    alt="Ashkan coaching"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "center 3%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1621]/80 via-transparent to-transparent" />
                </div>
                {/* Floating label */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-white font-bold text-base">Precision in every swing.</p>
                  <p className="text-white/70 text-sm">Technique that lasts a lifetime.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeIn}>
                <p className="text-[#c9f55a] font-semibold text-sm uppercase tracking-[0.2em] mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c9f55a] inline-block" />
                  About the Coach
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-[#0d1621] leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Authority Without<br /> Arrogance.
                </h2>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-5 text-[#0d1621]/70 text-lg leading-relaxed">
                <p>
                  I'm Ashkan Taghinia, a professional tennis coach based in Vancouver, BC. I believe stepping onto the court should feel empowering — whether you're picking up a racket for the first time or preparing for tournament play.
                </p>
                <p>
                  My approach is simple: high-performance results through a warm, personal method. I don't just teach mechanics — I build confident, strategic players who genuinely love the game.
                </p>
              </motion.div>

              {/* Pull quote */}
              <motion.blockquote variants={fadeIn} className="border-l-4 border-[#c9f55a] pl-6 py-2">
                <p className="text-[#0d1621] font-bold text-xl italic leading-snug">
                  "The best investment you can make is in yourself on the court."
                </p>
                <p className="text-[#0d1621]/50 text-sm mt-2 font-medium">— Ashkan Taghinia</p>
              </motion.blockquote>

              <motion.div variants={fadeIn} className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { num: "10+", label: "Years Coaching" },
                  { num: "100%", label: "Personalized" },
                  { num: "All", label: "Skill Levels" },
                ].map((s, i) => (
                  <div key={i} className="text-center py-5 px-2 rounded-xl bg-[#f5f7f0] border border-[#e8eed8]">
                    <p className="text-3xl font-black text-[#0d1621]" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                    <p className="text-[10px] font-semibold text-[#0d1621]/50 uppercase tracking-normal leading-tight mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. TRAINING PLANS ── */}
      <section id="plans" className="py-16 md:py-28 lg:py-36 px-6 bg-[#0d1621] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c9f55a]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12 md:mb-20"
          >
            <p className="text-[#c9f55a] font-semibold text-sm uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9f55a] inline-block" />
              Training Plans
              <span className="h-px w-8 bg-[#c9f55a] inline-block" />
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Structured for Growth.
            </h2>
            <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto">Three distinct pathways designed for your exact level and goals.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Kids */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col hover:border-[#c9f55a]/40 hover:bg-white/8 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/3 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#c9f55a]/5 transition-colors duration-500" />
              <div className="mb-6">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/8 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>Kids</h3>
                <p className="text-white/50 text-sm">Ages 6–14 · Fun first approach</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>$55</span>
                  <span className="text-white/50 font-medium">CAD / hr</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {["Fun & engaging environment", "Foundational technique building", "Motor skills & coordination"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c9f55a] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                <button className="w-full py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-[#0d1621] transition-all duration-300 uppercase tracking-wider">
                  Book on WhatsApp
                </button>
              </a>
            </motion.div>

            {/* Beginner — Featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden flex flex-col md:-translate-y-4"
              style={{ background: "linear-gradient(145deg, #c9f55a 0%, #9de017 60%, #7ab510 100%)" }}
            >
              <div className="absolute top-5 right-5">
                <span className="bg-[#0d1621] text-[#c9f55a] text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Most Popular</span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#0d1621]/15 flex items-center justify-center mb-5">
                    <Target className="w-5 h-5 text-[#0d1621]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0d1621] mb-1" style={{ fontFamily: "var(--font-display)" }}>Beginner</h3>
                  <p className="text-[#0d1621]/60 text-sm">Start strong · Play smart</p>
                </div>

                <div className="mb-8 pb-8 border-b border-[#0d1621]/15">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-black text-[#0d1621]" style={{ fontFamily: "var(--font-display)" }}>$60</span>
                    <span className="text-[#0d1621]/60 font-medium">CAD / hr</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {["Learn the core basics properly", "Build confidence on the court", "Fitness & conditioning"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0d1621]/85 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#0d1621] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                  <button className="w-full py-3.5 rounded-xl bg-[#0d1621] text-[#c9f55a] font-black text-sm hover:bg-white hover:text-[#0d1621] transition-all duration-300 uppercase tracking-wider">
                    Book on WhatsApp
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 flex flex-col hover:border-[#c9f55a]/40 hover:bg-white/8 transition-all duration-400 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/3 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#c9f55a]/5 transition-colors duration-500" />
              <div className="mb-6">
                <div className="w-11 h-11 rounded-xl border border-white/15 bg-white/8 flex items-center justify-center mb-5">
                  <Trophy className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>Professional</h3>
                <p className="text-white/50 text-sm">Advanced · Competition ready</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>$70</span>
                  <span className="text-white/50 font-medium">CAD / hr</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {["Advanced technique refinement", "Match strategy & psychology", "Tournament preparation"].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#c9f55a] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                <button className="w-full py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-[#0d1621] transition-all duration-300 uppercase tracking-wider">
                  Book on WhatsApp
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY TRAIN ── */}
      <section className="py-16 md:py-28 lg:py-36 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-first"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-[4/5] shadow-2xl">
                <img
                  src={photoPortrait}
                  alt="Ashkan Taghinia"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1621]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-black text-2xl tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Ashkan Taghinia</p>
                  <p className="text-white/70 text-sm mt-1">Professional Tennis Coach · Vancouver, BC</p>
                </div>
              </div>
              {/* Accent corner detail */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c9f55a] rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="mb-8 lg:mb-12">
                <p className="text-[#1a7a3c] font-semibold text-sm uppercase tracking-[0.2em] mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#1a7a3c] inline-block" />
                  The Ashkan Difference
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-[#0d1621] leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Why Train With<br />
                  <span className="text-[#1a7a3c]">Ashkan?</span>
                </h2>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    icon: Users,
                    title: "Deeply Personalized",
                    desc: "No cookie-cutter drills. Every session is adapted to your body mechanics, fitness level, and personal goals.",
                    color: "#c9f55a"
                  },
                  {
                    icon: Activity,
                    title: "All Skill Levels Welcome",
                    desc: "From absolute beginners holding a racket for the first time to competitive players seeking a tournament edge.",
                    color: "#c9f55a"
                  },
                  {
                    icon: Target,
                    title: "Vancouver Based",
                    desc: "Conveniently located and flexible with scheduling to fit your busy West Coast lifestyle.",
                    color: "#c9f55a"
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f7f0] flex items-center justify-center shrink-0 group-hover:bg-[#c9f55a] transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#0d1621]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d1621] mb-1">{item.title}</h4>
                      <p className="text-[#0d1621]/60 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section id="book" className="relative overflow-hidden" style={{ minHeight: "500px" }}>
        <img
          src={courtPhoto}
          alt="Tennis court"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1621]/60 via-[#0d1621]/70 to-[#0d1621]/85" />

        <div className="relative z-10 py-20 md:py-36 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[#c9f55a] font-semibold text-sm uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c9f55a] inline-block" />
              Start Today
              <span className="h-px w-8 bg-[#c9f55a] inline-block" />
            </p>
            <h2
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Hit<br />the Court?
            </h2>
            <p className="text-xl text-white/70 mb-12 font-light max-w-xl mx-auto">
              Message me directly to check availability and book your first session.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="block sm:inline-block">
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#c9f55a] text-[#0d1621] font-black text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_60px_rgba(201,245,90,0.35)] uppercase tracking-wider group mx-auto">
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 bg-[#0d1621] border-t border-white/8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h3 className="text-xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ASHKAN <span className="text-[#c9f55a]">TAGHINIA</span>
            </h3>
            <p className="text-white/40 text-sm mt-1">Professional Tennis Coach · Vancouver, BC</p>
          </div>
          <div className="flex gap-8 items-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[#c9f55a] font-bold hover:text-white transition-colors text-sm uppercase tracking-wider">
              WhatsApp
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white/40 hover:text-white transition-colors text-sm font-medium"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
