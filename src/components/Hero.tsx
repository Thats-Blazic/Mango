
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.span
          className="inline-block px-4 py-2 mb-6 text-sm bg-white/10 text-white rounded-full border border-white/30 backdrop-blur-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to the Enchanted Realm
        </motion.span>
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discover Magic
          <br /> in Every Moment
        </motion.h1>
        <motion.p
          className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Step into a world where dreams come alive and possibilities are endless.
          Let your imagination soar in this magical forest.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="space-x-4">
            <a 
              href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${encodeURIComponent('AxWB37cPkppoZMo5VuzcgcxxfrYcBUwKkJWRERpW5pEf')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white/10 text-white rounded-full text-lg hover:bg-white/20 transition-colors font-medium backdrop-blur-sm border border-white/30"
            >
              Buy Now
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-4 bg-white/10 text-white rounded-full text-lg hover:bg-white/20 transition-colors font-medium backdrop-blur-sm border border-white/30">
                  Tokenomics
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#F2FCE2] max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">Blorp Tokenomics</DialogTitle>
                </DialogHeader>
                <div className="text-left space-y-6">
                  <p className="text-gray-700">
                    Blorp is designed with a balanced and sustainable tokenomics model to ensure long-term growth, community engagement, and utility within the ecosystem. By integrating deflationary mechanisms, rewards, and strategic allocation, Blorp aims to provide both value and stability to its holders.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Total Supply: 1,000,000,000 BLORP</h3>
                    
                    <h4 className="font-semibold mt-4 mb-2">Token Distribution:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>50% Community Rewards – Airdrops, staking rewards, and ecosystem incentives</li>
                      <li>20% Liquidity Pool – Ensuring smooth trading and market stability</li>
                      <li>15% Development & Marketing – Supporting ongoing development</li>
                      <li>10% Team Allocation – Locked for 12 months with gradual vesting</li>
                      <li>5% Charity & Partnerships – Supporting charitable causes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Transaction Fees & Deflationary Mechanisms:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>1% Burn Per Transaction</li>
                      <li>2% Reflection to Holders</li>
                      <li>2% Liquidity Pool Contribution</li>
                      <li>Anti-Whale Mechanisms</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Earning Opportunities:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Staking Rewards</li>
                      <li>Play-to-Earn Integration</li>
                      <li>NFT Utility</li>
                      <li>Yield Farming</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Sustainability & Growth Strategy:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Regular Token Burns</li>
                      <li>Strategic Partnerships</li>
                      <li>Community-Driven Governance</li>
                      <li>Ongoing Innovation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Future Developments & Roadmap:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Blorp Swap Launch</li>
                      <li>Expanded NFT Marketplace</li>
                      <li>Blorp Gaming & Metaverse Expansion</li>
                      <li>Cross-Chain Compatibility</li>
                    </ul>
                  </div>

                  <p className="text-gray-700 mt-4">
                    Blorp's tokenomics are designed to reward holders, ensure sustainability, and drive long-term value. By fostering a strong and engaged community, Blorp is set to redefine the meme-coin space with innovation and real-world utility.
                  </p>

                  <p className="font-semibold text-center mt-6">
                    Get Blorp. Hold Blorp. Shape the Future.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 font-mono text-sm backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"
          >
            Contract: AxWB37cPkppoZMo5VuzcgcxxfrYcBUwKkJWRERpW5pEf
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
