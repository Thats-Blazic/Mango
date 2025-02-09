
import { motion } from 'framer-motion';
import { Sparkles, Moon, Star } from 'lucide-react';

const features = [
  {
    title: "Enchanted Experiences",
    description: "Discover magical moments in every corner of our mystical realm.",
    icon: Sparkles,
  },
  {
    title: "Moonlit Adventures",
    description: "Embark on journeys under the ethereal glow of magical lights.",
    icon: Moon,
  },
  {
    title: "Celestial Magic",
    description: "Harness the power of the stars in your magical endeavors.",
    icon: Star,
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Game Coming Soon
          </motion.span>
          <motion.h2
            className="text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Discover the Magic
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <feature.icon className="w-8 h-8 text-[#7fffd4] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/90 font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
