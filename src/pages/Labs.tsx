import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Network, Server } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const liveLabs = [
  {
    title: 'Metasploit Framework',
    description: 'Learn to use the Metasploit Framework in a sandboxed environment.',
    category: 'Penetration Testing',
    icon: Terminal,
    link: 'https://www.metasploit.com/',
  },
  {
    title: 'Wireshark Traffic Analysis',
    description: 'Analyze network traffic and identify suspicious activity.',
    category: 'Network Security',
    icon: Network,
    link: 'https://www.wireshark.org/',
  },
  {
    title: 'Secure Server Configuration',
    description: 'Learn to configure a secure web server from scratch.',
    category: 'System Hardening',
    icon: Server,
    link: 'https://www.digitalocean.com/community/tutorials/an-introduction-to-securing-your-linux-vps',
  },
];

const Labs: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Live Labs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Get hands-on experience with real-world cybersecurity tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Labs Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Available Labs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveLabs.map((lab, index) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {lab.title}
                    </CardTitle>
                    <lab.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {lab.description}
                    </p>
                    <a href={lab.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="accent" size="sm" className="mt-4">
                            Go to Lab
                        </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Labs;
