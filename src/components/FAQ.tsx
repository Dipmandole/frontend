import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How fast can I book a driver?",
    a: "You can get a professional driver within 30–45 minutes in Pune city. For outstation rides, we recommend booking at least 1–2 hours in advance for better availability.",
  },
  {
    q: "Are your drivers verified?",
    a: "Yes, all drivers are background-verified, trained, and experienced. We ensure safety, professionalism, and proper driving skills before onboarding.",
  },
  {
    q: "Do you provide drivers for personal cars?",
    a: "Yes, we specialize in providing skilled drivers who can drive your personal car safely for daily use, office travel, or long trips.",
  },
  {
    q: "Which locations do you cover?",
    a: "We serve Pune, Mumbai, and nearby cities. We also provide outstation drivers across Maharashtra and nearby states.",
  },
  {
    q: "What payment methods are available?",
    a: "We accept UPI, cash, bank transfer, and digital wallets. Monthly plans also support invoice-based billing.",
  },
];

const FAQ = () => (
  <section className="py-24 relative overflow-hidden bg-[#e9ebee]" id="faq">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

    <div className="relative container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-flex items-center gap-2 
bg-blue-500/10 border border-blue-400/20 
text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
  Frequently Asked{" "}
  <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
    Questions
  </span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <AccordionItem value={`faq-${i}`} className="bg-white 
rounded-2xl px-7 
border border-gray-200 
hover:border-violet-400/40
shadow-sm 
hover:shadow-xl 
transition-all duration-300
 ">
              <AccordionTrigger className="font-display font-semibold text-gray-900 text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
