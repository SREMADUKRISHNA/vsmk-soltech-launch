import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Flag, Lock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ctfChallenges = [
  {
    title: 'Web Exploitation Challenge',
    description: 'Find the hidden flag in the web server.',
    category: 'Web Exploitation',
    difficulty: 'Easy',
    icon: Lock,
  },
  {
    title: 'Reverse Engineering Challenge',
    description: 'Reverse engineer the binary to find the password.',
    category: 'Reverse Engineering',
    difficulty: 'Medium',
    icon: Shield,
  },
  {
    title: 'Cryptography Challenge',
    description: 'Decrypt the message to reveal the secret.',
    category: 'Cryptography',
    difficulty: 'Hard',
    icon: Flag,
  },
];

const Cybersecurity: React.FC = () => {
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
              Cybersecurity Practice
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Sharpen your cybersecurity skills with our CTF challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTF Challenges Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            CTF Challenges
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ctfChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {challenge.title}
                    </CardTitle>
                    <challenge.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {challenge.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            challenge.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                            challenge.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-red-200 text-red-800'
                        }`}>
                            {challenge.difficulty}
                        </span>
                        <Button variant="accent" size="sm">
                            Start Challenge
                        </Button>
                    </div>
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

export default Cybersecurity;
