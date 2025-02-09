
import { motion } from 'framer-motion';
import { Users, MessageCircle, Share2, Trophy, MessageSquare, Send, X, Bot } from 'lucide-react';
import { useState } from 'react';
import Nav from '../components/Nav';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CommunityFeatures = [
  {
    icon: Users,
    title: "Growing Community",
    description: "Join thousands of Blorp enthusiasts shaping the future of meme coins."
  },
  {
    icon: MessageCircle,
    title: "Active Discussion",
    description: "Engage in meaningful conversations about Blorp's development and future."
  },
  {
    icon: Share2,
    title: "Social Integration",
    description: "Connect with fellow Blorp holders across various social platforms."
  },
  {
    icon: Trophy,
    title: "Rewards Program",
    description: "Earn rewards for your active participation in the Blorp ecosystem."
  }
];

const Bubble = ({ delay, duration, size, left }: { delay: number; duration: number; size: number; left: string }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-[#E5DEFF]/60 to-[#D3E4FD]/40 backdrop-blur-md animate-float"
    style={{
      width: size,
      height: size,
      left,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      bottom: '-20px',
      border: '2px solid rgba(229, 222, 255, 0.4)',
      boxShadow: '0 4px 30px rgba(211, 228, 253, 0.3), inset 0 0 20px rgba(229, 222, 255, 0.2)',
      transform: 'translateZ(0)',
    }}
  />
);

const Community = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/lovable-uploads/315dd2aa-80ad-4a44-aa3e-a0ba5ad52396.png" 
          alt="Magical Forest Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c4a4a]/10 to-[#0c4a4a]/20" />
      </div>

      {/* Bubbles */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Bubble delay={0} duration={12} size={70} left="10%" />
        <Bubble delay={2} duration={15} size={90} left="25%" />
        <Bubble delay={1} duration={13} size={60} left="40%" />
        <Bubble delay={3} duration={14} size={80} left="60%" />
        <Bubble delay={2} duration={16} size={75} left="75%" />
        <Bubble delay={0} duration={12} size={65} left="90%" />
      </div>

      <div className="relative z-10">
        <Nav />
        <section className="min-h-screen pt-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block px-4 py-2 mb-6 text-sm bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to the Community
              </motion.span>
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Join the Blorp
                <br /> Movement
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Be part of a thriving community that's reshaping the future of meme coins.
                Connect, engage, and grow with fellow Blorp enthusiasts.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 px-4">
              {CommunityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-8 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors border border-white/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <feature.icon className="w-8 h-8 text-[#7fffd4] mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-white/90 font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="https://t.me/+03JgGjTc65FmZWRk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-white/10 text-white rounded-full text-lg hover:bg-white/20 transition-colors font-medium backdrop-blur-sm border border-white/30"
              >
                Join Our Telegram
              </a>
            </motion.div>
          </div>
        </section>

        {/* Email in bottom-left corner */}
        <div className="fixed bottom-6 left-6 z-50">
          <motion.a
            href="mailto:blorpfrog@gmail.com"
            className="text-[#221F26] bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-colors font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            blorpfrog@gmail.com
          </motion.a>
        </div>

        {/* Social Media Buttons */}
        <div className="fixed bottom-6 right-24 flex gap-4 z-50">
          <motion.a
            href="https://t.me/+03JgGjTc65FmZWRk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Send className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            href="https://x.com/Blorpfrog"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.a>
          <motion.a
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <MessageSquare className="w-5 h-5 text-white" />
          </motion.a>
        </div>

        {/* Live Chat Support Button */}
        <motion.button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Bot className="w-5 h-5 text-white" />
        </motion.button>

        {/* Chat Dialog */}
        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Chat Support</DialogTitle>
            </DialogHeader>
            <div className="p-4 space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm">
                  👋 Hello! How can we help you today?
                </p>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">
                    Coming soon! Our live chat support will be available shortly.
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default Community;
