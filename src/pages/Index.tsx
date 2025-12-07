import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Code, 
  Lock, 
  Cloud, 
  Zap, 
  Target, 
  Eye, 
  ArrowRight,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const highlights = [
  { icon: Shield, title: 'Cybersecurity Protection', description: 'Enterprise-grade security solutions' },
  { icon: Brain, title: 'AI Solutions', description: 'Intelligent automation & analytics' },
  { icon: Code, title: 'Software Development', description: 'Custom software solutions' },
  { icon: Lock, title: 'Ethical Hacking', description: 'Vulnerability assessment' },
  { icon: Cloud, title: 'Cloud & Automation', description: 'Scalable infrastructure' },
];

const features = [
  { icon: Shield, title: 'Prevent Attacks', description: 'Proactive threat prevention with AI-powered detection systems' },
  { icon: Eye, title: 'Detect Threats', description: 'Real-time monitoring and threat intelligence' },
  { icon: Brain, title: 'AI-Driven Defense', description: 'Machine learning algorithms that adapt to new threats' },
  { icon: Target, title: 'Enterprise-Grade Protection', description: 'Scalable solutions for businesses of all sizes' },
];

const stats = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '500+', label: 'Clients Protected' },
  { value: '24/7', label: 'Security Monitoring' },
  { value: '1M+', label: 'Threats Blocked' },
];

const Index: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <Shield className="h-16 w-16 text-accent" />
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-foreground">VSMK SOLTECH</h2>
                  <span className="text-sm text-muted-foreground tracking-widest">LTD</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Nothing Cannot Be Prevented
              <br />
              <span className="text-accent">And Anything Cannot Be Hacked</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              Empowering enterprises with cutting-edge AI and cybersecurity solutions. 
              Secure your digital future with industry-leading protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="heroOutline" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From AI-powered threat detection to enterprise cloud security, we protect your business at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center card-hover border border-border/50"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
                Enterprise-Grade Security for the Modern Era
              </h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive security platform combines advanced AI, real-time monitoring, 
                and expert analysis to keep your business safe from evolving threats.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 text-center shadow-lg"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Join hundreds of enterprises that trust VSMK SOLTECH for their cybersecurity needs.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  Get Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-muted-foreground mb-8">
              Our security solutions protect businesses across multiple industries
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
              {['Finance', 'Healthcare', 'Technology', 'Government', 'Retail'].map((industry) => (
                <div key={industry} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-medium text-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
