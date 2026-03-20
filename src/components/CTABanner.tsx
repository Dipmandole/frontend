import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTABanner = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={ctaBg} alt="Pune city highway at sunset" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r 
from-[#020617]/90 
via-[#0f172a]/50 
to-[#1e1b4b]/70" />
    </div>

    {/* Decorative */}
    <div className="absolute top-0 right-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

    <div className="relative container mx-auto px-4 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-flex items-center gap-2 
bg-blue-500/20 border border-blue-400/30 
text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Available 24/7
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
          Book a Professional <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Driver in Minutes</span>
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get a verified driver instantly for city rides, office travel, or outstation trips — fast, reliable, and hassle-free.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Button variant="accent" size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600
  hover:from-blue-700 hover:to-violet-700
  text-white
  shadow-[0_10px_30px_rgba(59,130,246,0.4)]
  px-8 h-13 rounded-xl" asChild>
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5 mr-2" /> Call +91 98765 43210
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" className="border border-blue-400/30 
  text-white 
  hover:bg-blue-500/10 
  px-8 h-13 rounded-xl" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Booking
            </a>
          </Button>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-slate-300 text-sm mt-8 flex items-center justify-center gap-4"
        >
          <span>✓ No waiting time</span>
          <span>✓ Verified drivers</span>
          <span>✓ Best rates guaranteed</span>
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
