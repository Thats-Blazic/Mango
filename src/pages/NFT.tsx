
import Nav from '../components/Nav';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Diamond, Gem, MessagesSquare, Wallet, Sparkles } from "lucide-react";

const NFT = () => {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0c4a4a]">
      <div className="fixed inset-0 z-0">
        <img 
          src="/lovable-uploads/6c6317cb-7e35-46fe-adee-f23982e84fa3.png" 
          alt="Magical Forest Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c4a4a]/80 to-[#0c4a4a]" />
      </div>
      
      <div className="relative z-10">
        <Nav />
        
        <div className="container mx-auto px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Magical Blorp Collection</h1>
            <p className="text-xl text-[#7fffd4] max-w-2xl mx-auto">
              Discover our exclusive collection of enchanted Blorp NFTs, where magic meets digital art in the blockchain space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Warrior Blorp",
                description: "The legendary warrior of the mystical realm",
                icon: <Diamond className="w-12 h-12 text-[#7fffd4]" />,
                price: "0.5 ETH",
                image: "/lovable-uploads/8c942325-1144-4fe9-a5e4-6df02bb62849.png"
              },
              {
                title: "Golden Dragon Blorp",
                description: "The majestic guardian of ancient treasures",
                icon: <Coins className="w-12 h-12 text-[#7fffd4]" />,
                price: "0.3 ETH",
                image: "/lovable-uploads/5fe883bd-94d9-43df-b054-f7a2ab4a18d0.png"
              },
              {
                title: "Mystic Forest Blorp",
                description: "Protector of the enchanted mushroom grove",
                icon: <Gem className="w-12 h-12 text-[#7fffd4]" />,
                price: "0.2 ETH",
                image: "/lovable-uploads/a8ed5008-8a17-45fd-98a2-ca1bbd795a08.png"
              }
            ].map((nft, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#0c4a4a]/40 backdrop-blur-sm border-[#7fffd4]/20 text-white">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {nft.icon}
                    </div>
                    <CardTitle>{nft.title}</CardTitle>
                    <CardDescription className="text-[#7fffd4]/80">
                      {nft.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img 
                        src={nft.image}
                        alt={`${nft.title} NFT`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-[#7fffd4] font-bold">{nft.price}</span>
                    <Button variant="outline" className="border-[#7fffd4] text-[#7fffd4] hover:bg-[#7fffd4] hover:text-[#0c4a4a]">
                      Mint Now
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* How It Works Section */}
          <motion.section 
            className="py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Wallet className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Connect Wallet",
                  description: "Link your digital wallet to start collecting magical Blorps"
                },
                {
                  icon: <Sparkles className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Choose Your Blorp",
                  description: "Select from our unique collection of mystical creatures"
                },
                {
                  icon: <MessagesSquare className="w-12 h-12 text-[#7fffd4]" />,
                  title: "Join Community",
                  description: "Connect with other Blorp collectors in our magical realm"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg bg-[#0c4a4a]/40 backdrop-blur-sm border border-[#7fffd4]/20"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#7fffd4]/80">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section 
            className="py-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What is a Blorp NFT?",
                  answer: "Blorp NFTs are unique digital collectibles that live on the blockchain, representing magical creatures from our enchanted realm."
                },
                {
                  question: "How do I get started?",
                  answer: "Simply connect your Web3 wallet, choose your favorite Blorp, and click 'Mint Now' to begin your magical journey."
                },
                {
                  question: "Are Blorps rare?",
                  answer: "Each Blorp is unique and comes with varying levels of rarity, making them special digital collectibles."
                },
                {
                  question: "What benefits do I get?",
                  answer: "Owning a Blorp grants you access to exclusive community events, magical rewards, and future collection drops."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-[#0c4a4a]/40 backdrop-blur-sm border border-[#7fffd4]/20"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-[#7fffd4]/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default NFT;
