import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleName from "./ParticleName";
import StudioDesk from "./StudioDesk";

export default function Hero() {
  return (
    <section className="studio-hero relative isolate overflow-hidden bg-[#F6FBFF] text-[#021024]">
      <div className="relative z-10 mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl items-center gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.72fr)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#052659]/24 bg-white/70 px-4 py-2 text-sm font-medium text-[#052659] shadow-sm backdrop-blur">
              Researcher · developer · gamer · dog walker
            </span>
            <span className="rounded-full border border-[#7DA0CA]/36 bg-[#C1E8FF]/34 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#052659] backdrop-blur">
              ruiyuanbai.com
            </span>
          </div>

          <div className="relative max-w-4xl overflow-visible">
            <img
              src="/images/home/roi-and-dog-cutout.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-10 z-0 hidden h-[14rem] max-w-none object-contain opacity-88 mix-blend-multiply drop-shadow-[0_26px_40px_rgba(5,38,89,0.16)] md:block lg:-right-12 lg:-top-14 lg:h-[17rem]"
            />
            <div className="relative z-10 max-w-[42rem]">
              <ParticleName tone="light" />
            </div>
          </div>

          <p className="mt-2 max-w-3xl text-pretty text-lg leading-8 text-[#052659] md:text-xl">
            I make reflective systems, playable prototypes, and small strange
            interfaces for human experience, moving between HCI research,
            creative coding, games, spatial companions, and tangible objects.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-[#052659]">
            {["communication", "color + culture", "companion systems", "physical interaction"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#052659]/14 bg-white/58 px-3 py-1.5"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-[#052659] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#021024] focus:outline-none focus:ring-2 focus:ring-[#5483B3] focus:ring-offset-2 focus:ring-offset-[#F6FBFF]"
              to="/research"
            >
              Open research drawer
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[#052659]/28 bg-white/60 px-5 py-3 text-sm font-semibold text-[#052659] transition hover:border-[#052659]/60 hover:bg-[#C1E8FF]/42 focus:outline-none focus:ring-2 focus:ring-[#5483B3] focus:ring-offset-2 focus:ring-offset-[#F6FBFF]"
              to="/art"
            >
              Explore projects
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-[#052659]/28 bg-white/60 px-5 py-3 text-sm font-semibold text-[#052659] transition hover:border-[#052659]/60 hover:bg-[#C1E8FF]/42 focus:outline-none focus:ring-2 focus:ring-[#5483B3] focus:ring-offset-2 focus:ring-offset-[#F6FBFF]"
              to="/plog"
            >
              Open plog
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.62, delay: 0.08 }}
          className="lg:-mt-8"
        >
          <StudioDesk />
        </motion.div>
      </div>
    </section>
  );
}
