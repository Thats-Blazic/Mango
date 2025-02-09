
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import { Users, Sparkles, Shield, Gamepad, Trophy, Target } from 'lucide-react';

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img 
          src="/lovable-uploads/84c656ec-c21a-4c09-90a4-2828093fb572.png" 
          alt="Magical Forest Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c4a4a]/10 to-[#0c4a4a]/20" />
      </div>
      <div className="relative z-10">
        <AnimatedBackground />
        <Nav />
        <Hero />
        <Features />

        {/* Gaming Section */}
        <motion.section 
          className="py-24 px-6 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm bg-white/10 text-white rounded-full border border-white/30 backdrop-blur-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Play to Earn
            </motion.span>
            <motion.h2
              className="text-4xl font-bold mb-12 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Enter the Magical Gaming Realm
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Gamepad className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Immersive Gameplay",
                  description: "Experience enchanting adventures in our metaverse"
                },
                {
                  icon: <Trophy className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Rewards System",
                  description: "Earn magical tokens and rare NFTs through gameplay"
                },
                {
                  icon: <Target className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Daily Missions",
                  description: "Complete quests to earn exclusive rewards"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">{item.title}</h3>
                  <p className="text-white/90 text-center font-medium">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Community Section */}
        <motion.section 
          className="py-24 px-6 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm bg-white/10 text-white rounded-full border border-white/30 backdrop-blur-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Join Our Community
            </motion.span>
            <motion.h2
              className="text-4xl font-bold mb-12 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Be Part of Something Magical
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Active Community",
                  description: "Join thousands of magical beings in our growing ecosystem"
                },
                {
                  icon: <Sparkles className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Daily Events",
                  description: "Participate in daily quests and magical gatherings"
                },
                {
                  icon: <Shield className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Secure Platform",
                  description: "Your magical assets are protected by advanced enchantments"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/20 backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-white text-center">{item.title}</h3>
                  <p className="text-white/90 text-center font-medium">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Index;
