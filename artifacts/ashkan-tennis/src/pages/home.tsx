import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Trophy, Users, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

import photoAction from "@assets/IMG_4583_1777664938316.PNG";
import photoPortrait from "@assets/IMG_4584_1777664938317.PNG";

const WHATSAPP_LINK = "https://wa.me/17789293090";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-secondary">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex overflow-hidden bg-secondary">
        {/* Mobile background photo */}
        <div className="absolute inset-0 lg:hidden">
          <img src={photoPortrait} alt="Ashkan Taghinia" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/70 to-secondary/95"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
        </div>

        {/* Left: text */}
        <div className="relative z-10 flex flex-col justify-end lg:justify-center px-8 md:px-16 lg:px-24 pb-16 pt-24 lg:pt-24 lg:pb-36 w-full lg:w-1/2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50 pointer-events-none hidden lg:block"></div>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            <motion.div variants={fadeInUp} className="hidden sm:inline-block mb-8 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground backdrop-blur-sm">
              <span className="text-sm font-medium tracking-wide uppercase">Elite Tennis Coaching • Vancouver, BC</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[0.9]">
              ASHKAN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-muted to-white/60">TAGHINIA</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted/80 max-w-md mb-10 font-light leading-relaxed">
              Master your technique. Build your confidence. Own the court. Professional coaching for all skill levels.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <Button size="lg" className="h-14 px-8 text-lg bg-accent text-secondary hover:bg-accent/90 rounded-full font-bold uppercase tracking-wider group transition-all duration-300">
                  Book Your Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex flex-col items-start gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>
        </div>

        {/* Right: portrait photo — desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:block lg:w-1/2 relative"
        >
          <div className="absolute inset-0">
            <img src={photoPortrait} alt="Ashkan Taghinia" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 md:py-32 px-6 bg-background relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src={photoAction} alt="Ashkan Taghinia coaching" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-white font-bold text-2xl tracking-tight">Focus.</p>
                  <p className="text-white/80 font-medium">Precision in every swing.</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-3xl bg-muted/50"></div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Authority Without Arrogance.</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm Ashkan Taghinia, a professional tennis coach based right here in Vancouver, BC. I believe that stepping onto the court should feel empowering, whether you're picking up a racket for the first time or preparing for tournament play.
                </p>
                <p>
                  My coaching philosophy is simple: high-performance results driven by a warm, personal approach. I don't just teach the mechanics of a swing; I build confident, strategic players who genuinely love the game.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="pt-4">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-black text-primary">10+</p>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-black text-primary">100%</p>
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mt-1">Personalized</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. TRAINING PLANS */}
      <section className="py-24 md:py-32 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Structured for Growth.</h2>
            <p className="text-xl text-foreground/70">Three distinct pathways designed for your exact skill level and goals. High-quality instruction at competitive Vancouver rates.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kids Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Users size={80} />
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Kids</h3>
                <p className="text-muted-foreground">Ages approx. 6-14</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-black">$55</span>
                <span className="text-muted-foreground font-medium"> CAD / hr</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Fun and engaging environment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Foundational technique building</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Motor skills and coordination</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                <Button variant="outline" className="w-full h-12 rounded-xl text-md border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                  Book on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Beginner Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary rounded-3xl p-8 border border-secondary shadow-xl hover:shadow-2xl transition-all flex flex-col relative overflow-hidden text-secondary-foreground transform md:-translate-y-4"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Target size={80} />
              </div>
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              
              <div className="mb-8">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Beginner</h3>
                <p className="text-secondary-foreground/70">Start strong, play smart</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-black">$60</span>
                <span className="text-secondary-foreground/70 font-medium"> CAD / hr</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow text-secondary-foreground/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Learn the core basics properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Build confidence on the court</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>Fitness and conditioning</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                <Button className="w-full h-12 rounded-xl text-md bg-accent text-secondary hover:bg-accent/90 font-bold transition-colors">
                  Book on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Professional Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Trophy size={80} />
              </div>
              <div className="mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-muted-foreground">Advanced level & competition</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-black">$70</span>
                <span className="text-muted-foreground font-medium"> CAD / hr</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Advanced technique refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Match strategy and psychology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Tournament preparation</span>
                </li>
              </ul>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-auto">
                <Button variant="outline" className="w-full h-12 rounded-xl text-md border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                  Book on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHY TRAIN WITH ASHKAN */}
      <section className="py-24 md:py-32 px-6 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-6">
                Why Train With <span className="text-accent">Ashkan</span>?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-secondary-foreground/80 mb-12">
                A great coach sees what you can't, pushes you when you need it, and celebrates your victories. Here is what you can expect.
              </motion.p>
              
              <div className="space-y-8">
                {[
                  { title: "Deeply Personalized", desc: "No cookie-cutter drills. Every session is adapted to your body mechanics, fitness level, and personal goals.", icon: Users },
                  { title: "All Skill Levels Welcome", desc: "From absolute beginners holding a racket for the first time to competitive players seeking an edge.", icon: Activity },
                  { title: "Vancouver Based", desc: "Conveniently located and flexible with scheduling to fit your busy West Coast lifestyle.", icon: Target }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-secondary-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-first lg:order-last"
            >
              {/* Mobile: wide banner card */}
              <div className="lg:hidden w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl relative">
                <img src={photoPortrait} alt="Ashkan Taghinia" className="w-full h-full object-cover" style={{ objectPosition: "center 8%" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white font-bold text-xl tracking-tight">Ashkan Taghinia</p>
                  <p className="text-white/70 text-sm">Professional Tennis Coach • Vancouver</p>
                </div>
              </div>

              {/* Desktop: spinning circle */}
              <div className="hidden lg:flex aspect-square rounded-full border border-secondary-foreground/10 items-center justify-center p-8 relative">
                <div className="absolute inset-0 rounded-full border border-accent/30 animate-[spin_60s_linear_infinite]"></div>
                <div className="aspect-square w-full rounded-full overflow-hidden relative">
                  <img src={photoPortrait} alt="Ashkan coaching" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. BOOKING CTA */}
      <section className="py-32 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-primary-foreground mb-8 tracking-tight">
              Ready to Hit the Court?
            </h2>
            <p className="text-2xl text-primary-foreground/90 mb-12 font-light">
              Message me directly to check availability and book your first session.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-block">
              <Button size="lg" className="h-16 px-10 text-xl bg-accent text-secondary hover:bg-white hover:text-secondary rounded-full font-bold uppercase tracking-wider group transition-all duration-300 shadow-[0_0_40px_rgba(202,255,0,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                Chat on WhatsApp
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 px-6 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-foreground tracking-tight mb-1">Ashkan Taghinia</h3>
            <p className="text-muted-foreground">Professional Tennis Coach • Vancouver, BC</p>
          </div>
          
          <div className="flex gap-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="font-bold text-primary hover:text-secondary transition-colors underline-offset-4 hover:underline">
              WhatsApp
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="font-medium text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}