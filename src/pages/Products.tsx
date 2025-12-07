import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Shield, Zap, Search, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, Product } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';

const products: Product[] = [
  {
    id: 'ai-security-suite',
    name: 'AI Security Suite',
    description: 'Complete AI-powered security solution with real-time threat detection, automated response, and comprehensive analytics dashboard.',
    price: 4999,
    image: '/placeholder.svg',
  },
  {
    id: 'phishing-detection',
    name: 'Phishing Detection Tool',
    description: 'Advanced email and web phishing detection with machine learning algorithms. Protect your team from social engineering attacks.',
    price: 1499,
    image: '/placeholder.svg',
  },
  {
    id: 'vulnerability-scanner',
    name: 'Vulnerability Scanner',
    description: 'Automated vulnerability scanning for networks, applications, and cloud infrastructure. Includes detailed remediation reports.',
    price: 3999,
    image: '/placeholder.svg',
  },
  {
    id: 'device-protection',
    name: 'Device Protection Software',
    description: 'Enterprise endpoint protection with ransomware prevention, data loss prevention, and remote device management capabilities.',
    price: 2499,
    image: '/placeholder.svg',
  },
  {
    id: 'cloud-security-pro',
    name: 'Cloud Security Pro',
    description: 'Comprehensive cloud security platform for AWS, Azure, and GCP. Includes CSPM, workload protection, and compliance monitoring.',
    price: 5999,
    image: '/placeholder.svg',
  },
  {
    id: 'network-monitor',
    name: 'Network Monitor',
    description: 'Real-time network traffic analysis and intrusion detection system. Identify anomalies and threats before they cause damage.',
    price: 3499,
    image: '/placeholder.svg',
  },
];

const getProductIcon = (productId: string) => {
  switch (productId) {
    case 'ai-security-suite':
      return Shield;
    case 'phishing-detection':
      return Zap;
    case 'vulnerability-scanner':
      return Search;
    default:
      return Lock;
  }
};

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: 'Added to Cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

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
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Enterprise Security Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protect your business with our industry-leading security software. 
              All products include free installation support and 24/7 assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = getProductIcon(product.id);
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover group"
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-10 w-10 text-accent" />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-accent">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">/year</span>
                      </div>
                      <Button 
                        variant="accent" 
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              All Products Include
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Free Installation', description: 'Expert setup assistance' },
                { title: '24/7 Support', description: 'Round-the-clock help' },
                { title: 'Regular Updates', description: 'Latest security patches' },
                { title: '30-Day Trial', description: 'Risk-free evaluation' },
              ].map((feature, index) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
