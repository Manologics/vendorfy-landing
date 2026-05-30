import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Camera, Sparkles, QrCode, Scan, Users, Package, BarChart, Store, ShoppingBag, ShoppingCart, ArrowRight, TrendingUp, Send, RotateCcw, Smartphone, FileDown, CheckCircle2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header.jsx';

const STRIPE_CHECKOUT_URL = 'https://app.vendorfyai.com';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="anim-layer-grid"></div>
    <div className="anim-layer-streaks"></div>
    <div className="anim-layer-shapes">
      <div className="shape-circle w-64 h-64 top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
      <div className="shape-circle w-96 h-96 bottom-1/4 right-1/4" style={{ animationDelay: '-5s', animationDuration: '12s' }}></div>
      <div className="shape-line w-full top-1/3 left-0" style={{ animationDelay: '-2s' }}></div>
      <div className="shape-line w-full bottom-1/3 left-0" style={{ animationDelay: '-7s' }}></div>
    </div>
    <div className="anim-layer-glows">
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>
    </div>
  </div>
);

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vendorName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    toast({
      title: "Redirecting to secure checkout...",
      description: "Opening Stripe in a new tab.",
    });
    
    setTimeout(() => {
      window.open(STRIPE_CHECKOUT_URL, '_blank');
      setIsSubmitting(false);
    }, 1500);
  };

  const scrollToHowItWorks = () => {
    const targetElement = document.getElementById('how-it-works');
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleReferralClick = () => {
    toast({
      description: "Referral rewards section coming soon.",
    });
  };

  const handlePlaceholderLink = (type) => {
    toast({
      description: `${type} coming soon.`,
    });
  };

  const steps = [
    {
      icon: Camera,
      title: 'List Products in Seconds',
      description: 'Snap a photo or scan your item and instantly create a ready-to-sell product listing with AI.'
    },
    {
      icon: QrCode,
      title: 'Turn Every Item Into a Smart Store',
      description: 'Generate a QR code so customers can scan, view, and buy your product instantly from their phone.'
    },
    {
      icon: Users,
      title: 'Turn Walk-By Traffic Into Repeat Buyers',
      description: 'Capture customer info and follow up with deals, price drops, and new inventory to bring buyers back.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Sell More Without Doing More',
      description: 'Turn walk-by traffic into real sales without extra effort.'
    },
    {
      icon: Send,
      title: 'Follow Up Automatically',
      description: 'Stay connected with interested buyers and bring them back to complete the sale.'
    },
    {
      icon: RotateCcw,
      title: 'Turn Your Booth Into a Digital Store',
      description: 'Give every product a scannable experience that customers can shop instantly.'
    },
    {
      icon: Smartphone,
      title: 'Save Hours Every Week',
      description: 'Create listings, tags, and product pages in seconds instead of manually.'
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'AI Product Listing Generator',
      description: 'Transform photos into compelling product listings with AI-powered descriptions, pricing suggestions, and category tagging.'
    },
    {
      icon: QrCode,
      title: 'QR Code Product Tags',
      description: 'Generate unique QR codes for every item. Customers scan to see details, photos, and purchase options instantly.'
    },
    {
      icon: Package,
      title: 'Inventory Scan In/Out',
      description: 'Track what you bring to each event and what sells. Know your best performers and manage stock effortlessly.'
    },
    {
      icon: Users,
      title: 'Customer Lead Capture',
      description: 'Build your customer database automatically. Collect emails and phone numbers when shoppers scan your products.'
    },
    {
      icon: BarChart,
      title: 'Vendor Analytics Dashboard',
      description: 'See sales trends, popular items, customer demographics, and revenue insights all in one beautiful dashboard.'
    },
    {
      icon: FileDown,
      title: 'Export Listings to Your Store',
      description: 'Download your listings as a CSV file and upload them directly to your online store in minutes.'
    }
  ];

  const useCases = [
    {
      icon: Store,
      title: 'Swap Meets'
    },
    {
      icon: ShoppingBag,
      title: 'Flea Markets'
    },
    {
      icon: Store,
      title: 'Pop-Up Shops'
    },
    {
      icon: ShoppingCart,
      title: 'Small Retail Vendors'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vendorfy AI - Turn Your Booth Into a Smart Store</title>
        <meta name="description" content="AI-powered product listing, QR code generation, and lead capture for modern vendors. Perfect for swap meets, flea markets, and pop-up shops." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        
        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="hero-container z-0 pt-[100px] py-32 md:py-48 min-h-screen md:min-h-[900px]">
            <div className="relative z-10 hero-content-wrapper">
              <motion.p 
                className="text-sm md:text-base font-semibold tracking-widest uppercase text-white mb-2"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Built For The Ultimate Vendor
              </motion.p>

              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                Turn Walk-By Traffic Into Paying Customers.
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Scan items, generate QR codes instantly, and capture customer leads on the spot — so you can follow up, close more sales, and bring buyers back.
              </motion.p>
              
              <motion.div 
                className="flex flex-col items-center w-full mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="hero-actions">
                  <Button 
                    asChild
                    className="hero-btn bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 hover:-translate-y-1"
                  >
                    <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                      Start Free Trial
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="hero-btn border-2 border-white/80 text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black hover:-translate-y-1"
                    onClick={scrollToHowItWorks}
                  >
                    See How It Works
                  </Button>
                </div>
                <div className="flex flex-col items-center mt-6 space-y-1 text-white/70 text-sm font-medium drop-shadow-md">
                  <span>7 days free, then $19/month</span>
                  <span className="flex items-center gap-1.5 opacity-80">
                    <Shield className="w-3.5 h-3.5" /> Secure checkout powered by Stripe
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="section-padding how-it-works-section-bg">
            <AnimatedBackground />
            <div className="how-it-works-top-bleed"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 content-z-index">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">How Vendorfy Helps You Sell More.</h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">A simple QR-powered selling system built for swap meets, markets, and live events.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl step-card-polished hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-8 font-bold text-xl">
                        {index + 1}
                      </div>
                      <step.icon className="w-12 h-12 text-primary mb-6" style={{ marginBottom: 'var(--step-icon-mb)' }} />
                      <h3 className="step-title-polished text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Vendors Are Switching to Vendorfy Section */}
          <section className="section-padding relative benefits-gradient-bg overflow-hidden">
            <div className="benefits-top-divider"></div>
            <div className="benefits-glow-line"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                className="text-center mb-16 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="benefits-heading-glow"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white relative z-10">Why Vendors Are Switching to Vendorfy</h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto relative z-10">More sales. Less manual work. A smarter way to run your business.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-card-premium backdrop-blur-md rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section-padding relative overflow-hidden bg-[#030108] border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2d1b69] via-[#0a0514] to-[#030108] opacity-60"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.04] mix-blend-screen pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] intense-radial-glow pointer-events-none opacity-80"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] intense-radial-glow-core pointer-events-none opacity-70"></div>
            <div className="absolute top-1/4 -left-1/4 w-[150%] h-[80px] light-streak-diagonal pointer-events-none opacity-60"></div>
            <div className="absolute bottom-1/3 -right-1/4 w-[150%] h-[100px] light-streak-diagonal pointer-events-none opacity-40" style={{ transform: 'rotate(135deg)' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">Powerful Features</h2>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">Everything you need to increase sales and maximize profit</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                <div className="absolute inset-0 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="section-padding perfect-for-bg border-y border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 content-z-index">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">Perfect For</h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">Designed for vendors who hustle</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="perfect-for-card backdrop-blur-md rounded-2xl p-8 text-center transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{useCase.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Vendor Signup Section */}
          <section id="signup" className="section-padding relative overflow-hidden bg-[#05020a] border-y border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e1045] via-[#0a0514] to-[#030108] opacity-90"></div>
            <div className="absolute inset-0 glow-texture pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[150%] h-[120px] light-beam pointer-events-none opacity-70" style={{ transform: 'rotate(-35deg) translateY(-50%)' }}></div>
            <div className="absolute bottom-0 right-1/4 w-[150%] h-[150px] light-beam pointer-events-none opacity-50" style={{ transform: 'rotate(45deg) translateY(50%)' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] glow-layer-3 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-layer-2 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-layer-1 pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] radial-burst pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-intense pointer-events-none opacity-60"></div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 content-z-index relative z-10">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Get Started Today</h2>
                <p className="text-lg md:text-xl text-white/80 drop-shadow-md">Join the future of vendor sales</p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit}
                className="bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/50 space-y-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-2 relative z-10">
                  <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:ring-1 focus:ring-primary h-12"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:ring-1 focus:ring-primary h-12"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:ring-1 focus:ring-primary h-12"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <Label htmlFor="vendorName" className="text-foreground font-medium">Vendor/Booth Name</Label>
                  <Input
                    id="vendorName"
                    name="vendorName"
                    type="text"
                    placeholder="Your business name"
                    value={formData.vendorName}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:ring-1 focus:ring-primary h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6 mt-4 transition-all duration-300 shadow-lg shadow-primary/20 relative z-10 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Redirecting...' : 'Continue to Secure Checkout'}
                </Button>
              </motion.form>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="pb-24 md:pb-32 pt-32 md:pt-48 relative overflow-hidden bg-gradient-to-b from-[#1a1638] to-[#0a0a0a]">
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] intense-radial-glow pointer-events-none z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] intense-radial-glow-core pointer-events-none z-0"></div>
            <div className="absolute top-1/4 left-0 w-[150%] h-[100px] light-streak-diagonal pointer-events-none z-0"></div>
            <div className="absolute bottom-1/4 right-0 w-[150%] h-[80px] light-streak-diagonal pointer-events-none z-0" style={{ transform: 'rotate(135deg)' }}></div>
            <div className="absolute top-1/2 left-0 w-full h-[40px] light-streak-horizontal pointer-events-none z-0"></div>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-2xl">
                  Start Selling Smarter Today
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Set up your products, generate QR codes, and start capturing customers in minutes.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16">
                  {[
                    'Create listings instantly',
                    'Turn every item into a smart store',
                    'Capture buyers and bring them back'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/90 text-lg drop-shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto layered-depth-card relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center gap-6 mb-10">
                      <div className="text-4xl md:text-5xl font-bold text-white flex items-baseline gap-2 drop-shadow-lg">
                        $19<span className="text-xl md:text-2xl text-white/70 font-medium">/month</span>
                      </div>
                      <button 
                        onClick={handleReferralClick}
                        className="inline-flex items-center gap-2 bg-primary/15 text-primary px-5 py-2.5 rounded-full text-sm md:text-base font-bold tracking-wide border border-primary/20 shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:bg-primary/25 transition-colors"
                      >
                        <Sparkles className="w-5 h-5" />
                        Refer a vendor → get 1 month FREE
                      </button>
                    </div>

                    <Button 
                      asChild
                      size="lg" 
                      className="w-full sm:w-auto min-w-[320px] bg-primary text-primary-foreground hover:bg-primary/90 text-xl py-8 rounded-2xl shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all duration-300 font-bold"
                    >
                      <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                        Start Your 7-Day Free Trial
                      </a>
                    </Button>

                    <div className="flex flex-col items-center mt-6 space-y-2">
                      <p className="text-sm md:text-base text-white/80 font-medium">
                        Cancel anytime
                      </p>
                      <p className="text-sm md:text-base text-white/60 flex items-center justify-center gap-2 font-medium">
                        <Shield className="w-4 h-4" />
                        No contracts. No setup fees.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-card/30 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              Vendorfy AI
            </button>
            <span className="text-base md:text-lg font-medium text-muted-foreground mt-2">Tag it. Scan it. Sell it.</span>
            <p className="text-sm text-muted-foreground/80 mt-2">Powered by MonkeeBizAI.com</p>
            <div className="flex flex-col space-y-2 mt-6 text-sm text-muted-foreground">
              <p>
                <a href="/" className="hover:text-primary transition-colors">VendorfyAI.com</a> |{' '}
                <a href="mailto:info@vendorfyai.com" className="hover:text-primary transition-colors">info@vendorfyai.com</a> |{' '}
                <a href="tel:623-282-2252" className="hover:text-primary transition-colors">623-282-2252</a>
              </p>
              <p>15333 N Scottsdale Rd, Suite 305</p>
              <p>Scottsdale, AZ 85260</p>
            </div>
            <div className="flex gap-4 mt-6 text-sm text-muted-foreground/60">
              <button onClick={() => handlePlaceholderLink('Privacy policy')} className="hover:text-primary transition-colors">Privacy Policy</button>
              <button onClick={() => handlePlaceholderLink('Terms of service')} className="hover:text-primary transition-colors">Terms of Service</button>
            </div>
            <p className="text-sm text-muted-foreground/60 mt-6">A Monkee Bizznus Company</p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
};

export default HomePage;