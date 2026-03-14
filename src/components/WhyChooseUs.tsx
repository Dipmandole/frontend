import { ShieldCheck, Clock, UserCheck, Zap, Star, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import servicesBg from "@/assets/services-bg.jpg";

const features = [
  { icon: ShieldCheck, title: "Verified Drivers", desc: "Background-checked & trained professionals", color: "from-[#7c3aed]/15 to-[#9333ea]/10" },
  { icon: Clock, title: "24/7 Availability", desc: "Book anytime, day or night", color: "from-[#9333ea]/15 to-[#7c3aed]/10" },
  { icon: UserCheck, title: "Experienced Pros", desc: "5+ years average driving experience", color: "from-[#7c3aed]/15 to-[#7c3aed]/5" },
  { icon: Zap, title: "Instant Booking", desc: "Get a driver in under 30 minutes", color: "from-[#7c3aed]/15 to-[#9333ea]/10" },
  { icon: Star, title: "Top Rated", desc: "4.8★ average customer rating", color: "from-[#9333ea]/15 to-[#7c3aed]/10" },
  { icon: Headphones, title: "Dedicated Support", desc: "Helpline available round the clock", color: "from-[#7c3aed]/15 to-[#9333ea]/10" },
];

const WhyChooseUs = () => (
  <section className="relative py-24 overflow-hidden" id="why-us">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={servicesBg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#629de9] via-[#bac4d0]/90 to-[#97c0f5]" />
    </div>

    <div className="relative container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-2 bg-[#7c3aed]/8 border border-[#7c3aed]/15 text-[#462383] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          Why Choose Us
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-3 tracking-tight">
          Trusted by <span className="text-[#53299d]">10,000+</span> Happy Customers
        </h2>
        <p className="text-muted-foreground text-orange-100 text-lg mt-4 max-w-2xl mx-auto">
          We provide the most reliable and professional driver services across Pune & Mumbai
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group relative bg-[#a3bad9] backdrop-blur-sm rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300  border border-violet-300
             hover:border-[#7c3aed]/20 hover:-translate-y-1"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8d56ec]/15 to-[#9333ea]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <f.icon className="w-7 h-7 text-[#281d3c]" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-orange-100 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
