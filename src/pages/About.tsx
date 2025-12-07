import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Lightbulb, 
  Heart, 
  Trophy,
  CheckCircle2
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const values = [
  { icon: Target, title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology' },
  { icon: Eye, title: 'Transparency', description: 'Open communication and honest partnerships' },
  { icon: Heart, title: 'Integrity', description: 'Ethical practices in everything we do' },
  { icon: Users, title: 'Collaboration', description: 'Working together for better outcomes' },
];

const achievements = [
  { icon: Trophy, title: 'ISO 27001 Certified', description: 'International security standard compliance' },
  { icon: Award, title: 'Top 10 Cybersecurity Firm', description: 'Recognized by Industry Leaders 2024' },
  { icon: Lightbulb, title: '50+ Patents', description: 'In AI and security technologies' },
  { icon: Users, title: '500+ Enterprise Clients', description: 'Across 30+ countries worldwide' },
];

const team = [
  {
    name: 'Vikram Singh',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in cybersecurity. Former security architect at major tech firms. Passionate about making enterprise-grade security accessible to all businesses.',
    isCEO: true,
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Technology Officer',
    bio: 'PhD in AI/ML from IIT. Leading our AI research and development initiatives.',
    isCEO: false,
  },
  {
    name: 'Rahul Mehta',
    role: 'Head of Security',
    bio: 'Certified ethical hacker with expertise in penetration testing and threat analysis.',
    isCEO: false,
  },
  {
    name: 'Ananya Patel',
    role: 'VP of Engineering',
    bio: 'Building scalable security solutions with a team of world-class engineers.',
    isCEO: false,
  },
];

const About: React.FC = () => {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 mb-6">
              Securing the Digital World
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              VSMK SOLTECH LTD is a leading cybersecurity and AI solutions company, 
              dedicated to protecting businesses from evolving digital threats while 
              empowering them with intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, VSMK SOLTECH LTD emerged from a simple yet powerful vision: 
                  to make enterprise-grade cybersecurity accessible to businesses of all sizes.
                </p>
                <p>
                  Our founders, experienced security professionals who had witnessed the 
                  devastating impact of cyber attacks on organizations, set out to create 
                  a company that would redefine how businesses approach digital security.
                </p>
                <p>
                  Today, we're proud to protect over 500 enterprises across 30+ countries, 
                  leveraging the power of AI and machine learning to stay ahead of threats.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">2018</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower organizations with intelligent security solutions that adapt 
                to evolving threats, ensuring business continuity and digital trust in 
                an increasingly connected world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in AI-driven cybersecurity, creating a safer 
                digital ecosystem where businesses can innovate without fear of 
                cyber threats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Recognition of our commitment to excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/10 rounded-2xl p-6 text-center"
              >
                <achievement.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-primary-foreground/70">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving our mission forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  member.isCEO ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`bg-gradient-to-br from-accent/20 to-accent/5 ${member.isCEO ? 'p-8' : 'p-6'}`}>
                  <div className={`bg-secondary rounded-2xl ${member.isCEO ? 'h-64' : 'h-48'} mb-4 flex items-center justify-center`}>
                    <Users className={`${member.isCEO ? 'h-24 w-24' : 'h-16 w-16'} text-muted-foreground/30`} />
                  </div>
                  <h3 className={`font-bold text-foreground ${member.isCEO ? 'text-2xl' : 'text-lg'} mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                  <p className={`text-muted-foreground ${member.isCEO ? 'text-base' : 'text-sm'}`}>
                    {member.bio}
                  </p>
                  {member.isCEO && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground italic">
                        "Our mission is simple: Nothing Cannot Be Prevented And Anything Cannot Be Hacked. 
                        We make this promise to every client we serve."
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
