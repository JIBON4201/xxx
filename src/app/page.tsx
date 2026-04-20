"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Zap,
  Eye,
  Play,
  Lock,
  Globe,
  MonitorSmartphone,
  ChevronRight,
  Users,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WATCH_NOW_URL = "#watch-now";

/* ─── animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── feature data ─── */
const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "Every stream is protected with military-grade encryption. Your viewing habits stay completely private — always.",
  },
  {
    icon: Zap,
    title: "Instant HD Streaming",
    desc: "No buffering, no lag. Our global CDN delivers crystal-clear 1080p and 4K video the moment you hit play.",
  },
  {
    icon: Eye,
    title: "No Signup Required",
    desc: "Access exclusive content instantly. No accounts, no emails, no personal data collected. Just click and watch.",
  },
  {
    icon: Globe,
    title: "Available Worldwide",
    desc: "Stream from anywhere on any device. Desktop, tablet, or phone — our platform adapts to your screen seamlessly.",
  },
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    desc: "Zero tracking, zero logs. We built our platform from the ground up with your anonymity as the top priority.",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Device Sync",
    desc: "Start watching on one device and pick up right where you left off on another. Seamless experience guaranteed.",
  },
];

/* ─── how it works ─── */
const steps = [
  {
    num: "01",
    title: "Click \"Watch Now\"",
    desc: "No forms, no signup. One click is all it takes to access our curated library of exclusive private videos.",
  },
  {
    num: "02",
    title: "Browse & Choose",
    desc: "Explore categories, trending content, or search for exactly what you want. Our smart filters make discovery effortless.",
  },
  {
    num: "03",
    title: "Stream Instantly",
    desc: "Hit play and enjoy. Adaptive streaming ensures the perfect quality for your connection speed — every single time.",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "Is this platform really free with no signup?",
    a: "Yes. We believe access to content should be frictionless. There are no hidden fees, no trial periods, and no account creation required. Simply click \"Watch Now\" and start streaming immediately.",
  },
  {
    q: "How does the platform protect my privacy?",
    a: "Privacy is our foundation. We use end-to-end encryption on all streams, never store browsing history, and don't require any personal information. Our servers operate under a strict zero-logging policy, and all connections are routed through secure TLS tunnels.",
  },
  {
    q: "What video quality is available?",
    a: "We support resolutions up to 4K Ultra HD with adaptive bitrate streaming. This means the platform automatically adjusts quality based on your internet speed, ensuring smooth playback whether you're on fiber, 5G, or a standard connection.",
  },
  {
    q: "Can I watch on my phone or tablet?",
    a: "Absolutely. Our platform is fully responsive and works flawlessly on all modern devices — including iOS, Android, Windows, and macOS. The experience is optimized for every screen size, from mobile phones to large desktop monitors.",
  },
  {
    q: "What types of content are available?",
    a: "Our library spans a wide range of exclusive private video content across multiple categories. New content is added regularly to keep the catalog fresh. All content is curated for quality, and our recommendation engine helps you discover videos you'll love.",
  },
];

/* ─── stats ─── */
const stats = [
  { icon: Users, value: "2.4M+", label: "Active Viewers" },
  { icon: Play, value: "50K+", label: "Exclusive Videos" },
  { icon: Globe, value: "190+", label: "Countries" },
  { icon: Star, value: "4.9/5", label: "User Rating" },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */
export default function Home() {
  return (
    <div className="noise-overlay relative min-h-screen overflow-x-hidden">
      {/* ─── ambient background blobs ─── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-rose-600/8 blur-[100px]" />
      </div>

      {/* ═══════════════ NAVBAR ═══════════════ */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card sticky top-0 z-50 border-b border-white/5"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-violet-500">
              <Play className="h-4 w-4 fill-white text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Vault<span className="text-gradient">Stream</span>
            </span>
          </a>

          {/* CTA */}
          <a href={WATCH_NOW_URL}>
            <Button className="bg-gradient-to-r from-rose-500 to-violet-500 text-white shadow-lg hover:from-rose-600 hover:to-violet-600 transition-all duration-300">
              Watch Now
              <ChevronRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.nav>

      <main className="relative z-10">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative">
          {/* Hero BG image with overlay */}
          <div className="absolute inset-0 -z-[1]">
            <Image
              src="/hero-bg.png"
              alt=""
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:pt-36">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Badge
                  variant="outline"
                  className="mb-6 border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-rose-400 text-sm"
                >
                  <Lock className="mr-1.5 h-3.5 w-3.5" />
                  18+ Only — Private & Secure
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl"
              >
                Unlock Exclusive{" "}
                <span className="text-gradient">Private Videos</span>
                <br />
                Instant &amp; Secure Streaming
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
              >
                Access a curated library of premium private video content with
                zero signup. Military-grade encryption, instant HD streaming,
                and complete privacy — guaranteed.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <a href={WATCH_NOW_URL}>
                  <Button
                    size="lg"
                    className="animate-glow h-13 rounded-xl bg-gradient-to-r from-rose-500 to-violet-500 px-8 text-base font-semibold text-white hover:from-rose-600 hover:to-violet-600 transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5 fill-white" />
                    Watch Now — Free Access
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground">
                  No signup &bull; No credit card &bull; Instant access
                </p>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
              >
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-gradient sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                      <s.icon className="h-3.5 w-3.5" />
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ FEATURES ═══════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Why Choose <span className="text-gradient">VaultStream</span>?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="mt-4 text-muted-foreground"
              >
                Built for speed, privacy, and a premium viewing experience.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  custom={0}
                  className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-rose-500/30 hover:bg-white/[0.03]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-violet-500/20">
                    <f.icon className="h-5 w-5 text-rose-400" />
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                How It Works
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="mt-4 text-muted-foreground"
              >
                Three simple steps to start watching. No friction, no waiting.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="mt-14 grid gap-8 sm:grid-cols-3"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  variants={fadeUp}
                  custom={i}
                  className="relative text-center"
                >
                  <div className="text-gradient mx-auto mb-4 text-5xl font-black opacity-20">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 -right-4 hidden text-muted-foreground/30 sm:block lg:-right-5">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Separator className="mx-auto max-w-4xl bg-white/5" />

        {/* ═══════════════ SEO CONTENT ═══════════════ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="prose-container"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                The Future of Private Video Streaming in 2026
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={1}
                className="mt-6 text-muted-foreground leading-relaxed"
              >
                The way people consume video content has fundamentally changed.
                In an era where privacy concerns dominate headlines and
                streaming platforms demand increasingly personal information, a
                new breed of private video platforms has emerged — platforms that
                put the viewer first. VaultStream represents the next evolution
                of this movement, offering instant access to a curated library
                of exclusive video content without the friction of account
                creation, email verification, or payment gateways.
              </motion.p>

              <motion.h3
                variants={fadeUp}
                custom={2}
                className="mt-10 text-xl font-semibold"
              >
                Why Private Video Platforms Are Growing Rapidly
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                The demand for private, secure streaming services has surged
                over the past few years. According to industry analyses, over
                68% of internet users cite privacy as their top concern when
                accessing online video content. Traditional streaming platforms
                collect vast amounts of data — viewing histories, device
                fingerprints, location data, and behavioral patterns. Private
                video platforms like VaultStream take a fundamentally different
                approach by implementing zero-tracking policies and requiring no
                personal information whatsoever.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={4}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                This shift isn&apos;t just about privacy for privacy&apos;s sake. It&apos;s
                about creating a better, faster, and more enjoyable viewing
                experience. When platforms don&apos;t need to process signup flows or
                manage user databases, they can focus entirely on what matters:
                delivering high-quality video content with lightning-fast load
                times. The result is a streamlined experience where viewers go
                from discovery to playback in seconds, not minutes.
              </motion.p>

              <motion.h3
                variants={fadeUp}
                custom={5}
                className="mt-10 text-xl font-semibold"
              >
                Secure Streaming Technology: How We Protect You
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={6}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                At the core of VaultStream&apos;s infrastructure is a commitment to
                security that goes far beyond industry standards. Every video
                stream is protected with AES-256 encryption — the same standard
                used by financial institutions and government agencies. Our
                content delivery network spans over 200 edge locations
                worldwide, ensuring that streams load quickly regardless of your
                geographic location while maintaining the integrity of the
                encrypted connection.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={7}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                We employ adaptive bitrate streaming technology that
                automatically adjusts video quality based on your connection
                speed. Whether you&apos;re on a high-speed fiber connection or a
                mobile 5G network, the platform ensures smooth playback without
                buffering. Our transcoding pipeline supports resolutions up to
                4K Ultra HD with HDR, delivering a cinematic experience in the
                comfort of your own space.
              </motion.p>

              <motion.h3
                variants={fadeUp}
                custom={8}
                className="mt-10 text-xl font-semibold"
              >
                No-Signup Access: The Frictionless Future
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={9}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                One of VaultStream&apos;s most popular features is its no-signup
                access model. In a world where every service demands an email
                address, a password, and often a phone number, the simplicity of
                instant access is refreshing. Our research shows that platforms
                requiring signup lose approximately 40% of potential viewers at
                the registration step alone. By eliminating this barrier
                entirely, we&apos;ve created an experience that respects your time
                and your privacy equally.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={10}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                This approach also means there are no passwords to remember, no
                accounts to manage, and no data to delete if you decide to stop
                using the service. It&apos;s truly ephemeral access — you visit, you
                watch, and you leave without a digital trace. For viewers who
                value discretion and convenience, this model represents the gold
                standard of online streaming in 2026 and beyond.
              </motion.p>

              <motion.h3
                variants={fadeUp}
                custom={11}
                className="mt-10 text-xl font-semibold"
              >
                Content Quality and Curation
              </motion.h3>

              <motion.p
                variants={fadeUp}
                custom={12}
                className="mt-4 text-muted-foreground leading-relaxed"
              >
                Beyond technology and privacy, what truly sets a premium video
                platform apart is the quality of its content. VaultStream
                maintains a rigorously curated library with over 50,000
                exclusive videos spanning diverse categories. Each piece of
                content undergoes quality review before being added to the
                catalog, ensuring that viewers always encounter professional,
                high-production-value material. New content is added daily, and
                our intelligent recommendation system helps surface videos
                tailored to individual preferences — all without storing any
                personal viewing data.
              </motion.p>
            </motion.article>
          </div>
        </section>

        <Separator className="mx-auto max-w-4xl bg-white/5" />

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20 sm:py-28" id="faq">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="text-center"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="mt-4 text-muted-foreground"
              >
                Everything you need to know before getting started.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="mt-12"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="glass-card rounded-xl px-4 transition-all duration-300 hover:border-rose-500/20"
                  >
                    <AccordionItem value={`faq-${i}`} className="border-b-0">
                      <AccordionTrigger className="py-5 text-left text-sm font-medium sm:text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ FINAL CTA ═══════════════ */}
        <section className="py-20 sm:py-28" id="watch-now">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="glass-card relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20"
            >
              {/* Decorative gradient orbs */}
              <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-rose-500/15 blur-[80px]" />
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-violet-500/15 blur-[80px]" />

              <div className="relative z-10">
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                >
                  Ready to Start Watching?
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={1}
                  className="mx-auto mt-4 max-w-lg text-muted-foreground"
                >
                  Join millions of viewers who trust VaultStream for private,
                  secure, and instant video access. No strings attached.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={2}
                  className="mt-8 flex flex-col items-center gap-3"
                >
                  <a href={WATCH_NOW_URL}>
                    <Button
                      size="lg"
                      className="animate-glow h-13 rounded-xl bg-gradient-to-r from-rose-500 to-violet-500 px-10 text-base font-semibold text-white hover:from-rose-600 hover:to-violet-600 transition-all duration-300"
                    >
                      <Play className="mr-2 h-5 w-5 fill-white" />
                      Watch Now — Free Instant Access
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Lock className="h-3 w-3" /> Encrypted
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" /> Private
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> Instant
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ 18+ DISCLAIMER ═══════════════ */}
        <section className="py-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="glass-card rounded-xl px-5 py-4 text-center">
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground/70">18+ Disclaimer:</strong>{" "}
                This platform is intended exclusively for adults aged 18 years
                and older. By accessing this site, you confirm that you meet the
                minimum age requirement in your jurisdiction. All content is
                curated, legal, and compliant with applicable regulations. We do
                not host or distribute non-consensual content. If you are under
                18, please leave this site immediately. We take content
                compliance seriously and employ proactive moderation to maintain
                community standards.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-violet-500">
                <Play className="h-3.5 w-3.5 fill-white text-white" />
              </div>
              <span className="text-base font-bold tracking-tight">
                Vault<span className="text-gradient">Stream</span>
              </span>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground" aria-label="Footer navigation">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                DMCA
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <Separator className="my-6 bg-white/5" />

          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VaultStream. All rights reserved.
            This site is intended for adults 18+ only. Unauthorized use or
            reproduction is prohibited.
          </p>
        </div>
      </footer>
    </div>
  );
}
