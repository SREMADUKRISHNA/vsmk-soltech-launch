import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Code, 
  Cloud, 
  Zap, 
  Search, 
  Mail, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Custom AI solutions including machine learning models, natural language processing, and intelligent automation systems tailored to your business needs.',
    features: ['Machine Learning Models', 'NLP Solutions', 'Predictive Analytics', 'AI Integration'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Ethical Hacking',
    description: 'Comprehensive security assessments and ethical hacking services to identify vulnerabilities before malicious actors do.',
    features: ['Security Audits', 'Ethical Hacking', 'Compliance Assessment', 'Incident Response'],
  },
  {
    icon: Code,
    title: 'Web & App Development',
    description: 'End-to-end development of secure, scalable web applications and mobile apps with built-in security features.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'UI/UX Design'],
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure your cloud infrastructure with our comprehensive cloud security solutions and monitoring services.',
    features: ['Cloud Architecture', 'Security Configuration', 'Migration Services', '24/7 Monitoring'],
  },
  {
    icon: Zap,
    title: 'Automation Solutions',
    description: 'Streamline your operations with intelligent automation solutions that reduce manual effort and increase efficiency.',
    features: ['Process Automation', 'Workflow Optimization', 'RPA Implementation', 'Integration Services'],
  },
  {
    icon: Search,
    title: 'Penetration Testing',
    description: 'Simulated cyber attacks to test your security defenses and identify potential weaknesses in your systems.',
    features: ['Network Penetration', 'Application Testing', 'Social Engineering', 'Detailed Reports'],
  },
  {
    icon: Mail,
    title: 'Phishing Detection',
    description: 'Advanced phishing detection and prevention systems to protect your organization from social engineering attacks.',
    features: ['Email Security', 'Employee Training', 'Threat Intelligence', 'Real-time Alerts'],
  },
  {
    icon: Lock,
    title: 'Vulnerability Scanning',
    description: 'Continuous vulnerability scanning and management to keep your systems secure and up-to-date.',
    features: ['Automated Scans', 'Risk Assessment', 'Patch Management', 'Compliance Reporting'],
  },
];

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Comprehensive Security & Tech Solutions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From AI development to cybersecurity, we offer end-to-end solutions 
              to protect and empower your business in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 card-hover group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map(feature => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="group/btn">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Our team of experts can design and implement solutions tailored 
              to your specific requirements. Let's discuss your project.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
