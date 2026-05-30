import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';

const APP_URL = 'https://app.vendorfy.ai';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Vendorfy AI - Setup Complete</title>
        <meta name="description" content="Your vendor account has been created successfully." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center relative overflow-hidden py-20">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e1045] via-[#0a0514] to-[#030108] opacity-90 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-10 md:p-16 text-center shadow-2xl shadow-black/50"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div 
                className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Welcome to Vendorfy!
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
                Your payment was successful and your account is ready. Let's get your first products listed and your smart store set up.
              </p>

              <div className="space-y-4">
                <Button 
                  asChild
                  size="lg" 
                  className="w-full sm:w-auto min-w-[280px] bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-7 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-1 transition-all duration-300 font-bold group"
                >
                  <a href={APP_URL}>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Open Vendor Dashboard
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SuccessPage;