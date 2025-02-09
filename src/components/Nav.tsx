
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-[#0c4a4a]/85 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          Blorp
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/community" 
            className="text-sm font-medium text-white hover:text-[#7fffd4] transition-colors"
          >
            Community
          </Link>
          <Link 
            to="/nft" 
            className="text-sm font-medium text-white hover:text-[#7fffd4] transition-colors"
          >
            NFT
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button className="px-4 py-2 rounded-lg bg-white text-[#0c4a4a] text-sm hover:bg-white/90 transition-all font-medium shadow-md hover:shadow-lg">
                Whitepaper
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] bg-transparent border-none">
              <div 
                className="relative w-full h-full rounded-lg overflow-hidden"
                style={{
                  backgroundImage: "url('/lovable-uploads/f87bceca-586f-437d-9e7b-5f9abeeb3c99.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-[#0c4a4a]/20 backdrop-blur-[0.5px]"></div>
                <DialogHeader className="relative z-10">
                  <DialogTitle className="text-3xl font-bold mb-4 text-white">Blorp Whitepaper</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[70vh] relative z-10">
                  <div className="space-y-6 text-sm px-6 py-4">
                    <div className="bg-[#0c4a4a]/30 backdrop-blur-[1px] rounded-lg p-6 space-y-6 text-white shadow-xl">
                      <h1 className="text-2xl font-bold text-center mb-6">Blorp: The Future of Meme Coinomics</h1>
                      
                      <section>
                        <h2 className="text-xl font-semibold mb-2">Abstract</h2>
                        <p className="text-white/90">Blorp is a community-driven meme coin designed to bring humor, engagement, and financial innovation to the crypto space. Built on a secure and scalable blockchain, Blorp integrates novel tokenomics, gamification, and decentralized governance to create a unique and entertaining financial ecosystem.</p>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Introduction</h2>
                        <p>Meme coins have become a powerful force in the cryptocurrency industry, capturing the attention of retail investors and internet culture alike. While many projects lack utility, Blorp seeks to merge meme culture with real-world applications, ensuring longevity and growth beyond mere hype.</p>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Vision & Mission</h2>
                        <p>Blorp aims to:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Foster a fun, inclusive, and rewarding community</li>
                          <li>Implement innovative tokenomics that benefit long-term holders</li>
                          <li>Introduce gamification and NFT integrations</li>
                          <li>Establish a decentralized autonomous organization (DAO) for governance</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Tokenomics</h2>
                        <p>Total Supply: 1,000,000,000 BLORP</p>
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>50% Community Rewards – Airdrops, staking rewards, and ecosystem incentives</li>
                          <li>20% Liquidity Pool – Ensuring stability and trading ease</li>
                          <li>15% Development & Marketing – Funding future developments and promotional activities</li>
                          <li>10% Team Allocation – Locked for 12 months with a gradual vesting schedule</li>
                          <li>5% Charity & Partnerships – Donations and collaborations with influencers and brands</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Deflationary Mechanics</h2>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>1% Burn Per Transaction – Gradually reducing supply</li>
                          <li>2% Reflection to Holders – Rewarding long-term supporters</li>
                          <li>Anti-Whale Measures – Limits on large transactions to prevent manipulation</li>
                        </ul>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Technology & Security</h2>
                        <p>Blorp is built on the Ethereum blockchain as an ERC-20 token (with plans for cross-chain integration in the future). Security audits will be conducted regularly to ensure contract safety and prevent vulnerabilities.</p>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Utility & Ecosystem</h2>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-medium">Blorp Swap</h3>
                            <p>A decentralized exchange (DEX) allowing seamless trading of Blorp and other tokens.</p>
                          </div>
                          <div>
                            <h3 className="font-medium">Blorp NFTs</h3>
                            <p>A series of meme-inspired NFT collections with exclusive utilities, such as staking bonuses and governance privileges.</p>
                          </div>
                          <div>
                            <h3 className="font-medium">Blorp Play-to-Earn (P2E) Game</h3>
                            <p>A gamified ecosystem where users can earn BLORP by participating in fun and interactive challenges.</p>
                          </div>
                          <div>
                            <h3 className="font-medium">Blorp DAO</h3>
                            <p>Community-driven governance where holders can propose and vote on major decisions regarding the project's future.</p>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Roadmap</h2>
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-medium">Phase 1: Launch & Community Building</h3>
                            <ul className="list-disc pl-6">
                              <li>Smart contract deployment</li>
                              <li>Initial marketing campaigns and airdrops</li>
                              <li>Exchange listings (DEX & CEX negotiations)</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Phase 2: Expansion & Partnerships</h3>
                            <ul className="list-disc pl-6">
                              <li>NFT marketplace launch</li>
                              <li>Blorp Swap beta release</li>
                              <li>Influencer and brand partnerships</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-medium">Phase 3: Ecosystem Development</h3>
                            <ul className="list-disc pl-6">
                              <li>Play-to-earn game launch</li>
                              <li>DAO implementation</li>
                              <li>Cross-chain expansion</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section>
                        <h2 className="text-lg font-semibold mb-2">Conclusion</h2>
                        <p>Blorp is more than just a meme coin; it's a movement designed to merge entertainment, community engagement, and sustainable tokenomics. By leveraging decentralized finance (DeFi) principles and gamification, Blorp aims to redefine the landscape of meme-based cryptocurrencies.</p>
                        <p className="mt-2">Join the Blorp revolution and let's shape the future of meme coinomics together!</p>
                      </section>

                      <section className="text-sm text-gray-500 italic">
                        <p>Disclaimer: This document is for informational purposes only and does not constitute financial advice. Always conduct your own research before investing in any cryptocurrency.</p>
                      </section>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm font-medium text-white hover:text-[#7fffd4] transition-colors">
                About
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#F2FCE2] max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6">About Blorp Token</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[70vh] px-6">
                <div className="space-y-6 text-gray-800">
                  <p className="text-lg">
                    Blorp is more than just a meme coin—it's a revolution in crypto entertainment and decentralized finance (DeFi). Designed to blend humor with utility, Blorp brings a fun and engaging experience to the blockchain while offering real value to its community.
                  </p>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Why Choose Blorp?</h2>
                    <ul className="space-y-2">
                      <li><span className="font-medium">Community-Driven:</span> Blorp thrives on its active community, where holders have a say in the project's future through governance voting.</li>
                      <li><span className="font-medium">Deflationary Mechanics:</span> A portion of every transaction is burned, making Blorp scarcer over time.</li>
                      <li><span className="font-medium">Rewards for Holders:</span> 2% of every transaction is redistributed to token holders, encouraging long-term investment.</li>
                      <li><span className="font-medium">Secure & Transparent:</span> Built on a robust blockchain with regular audits to ensure security and trust.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Tokenomics</h2>
                    <p className="font-medium mb-2">Total Supply: 1,000,000,000 BLORP</p>
                    <ul className="space-y-1">
                      <li>50% Community Rewards – Airdrops, staking rewards, and incentives</li>
                      <li>20% Liquidity Pool – Ensuring stable and efficient trading</li>
                      <li>15% Development & Marketing – Fueling innovation and brand growth</li>
                      <li>10% Team Allocation – Locked with a gradual vesting schedule</li>
                      <li>5% Charity & Partnerships – Supporting social causes and strategic collaborations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">The Blorp Ecosystem</h2>
                    <ul className="space-y-2">
                      <li><span className="font-medium">Blorp Swap:</span> A decentralized exchange (DEX) for seamless token trading</li>
                      <li><span className="font-medium">Blorp NFTs:</span> Limited edition meme-inspired NFTs with exclusive perks</li>
                      <li><span className="font-medium">Blorp Play-to-Earn Game:</span> Earn BLORP by participating in interactive games</li>
                      <li><span className="font-medium">Blorp DAO:</span> Community-driven decision-making for the future of the project</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Join the Blorp Movement</h2>
                    <p>Blorp isn't just a token—it's a culture. Be part of an innovative and fun-driven crypto revolution that rewards its holders and evolves with its community.</p>
                    <p className="text-lg font-medium mt-4">Get Blorp. Hold Blorp. Shape the Future.</p>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>

          <a 
            href="mailto:blorpfrog@gmail.com" 
            className="text-sm font-medium text-white hover:text-[#7fffd4] transition-colors"
          >
            Contact
          </a>
          <button className="px-4 py-2 rounded-full bg-white text-[#0c4a4a] text-sm hover:bg-white/90 transition-all font-medium shadow-lg hover:shadow-xl border border-white/10">
            Begin Journey
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
