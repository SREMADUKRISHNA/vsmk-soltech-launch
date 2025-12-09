import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Terminal, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const tools = [
  {
    icon: Shield,
    title: 'Cybersecurity Practice',
    description: 'Practice your skills with real-world scenarios.',
    link: '/student/cybersecurity',
  },
  {
    icon: Code,
    title: 'Coding Practice',
    description: 'Solve coding problems in various languages.',
    link: '/student/coding',
  },
  {
    icon: Terminal,
    title: 'Live Labs',
    description: 'Get hands-on experience in a live environment.',
    link: '/student/labs',
  },
  {
      icon: BookOpen,
      title: 'Live Courses',
      description: 'Access tutorials, articles, and documentation.',
      link: '/student/courses',
  }
];

interface Submission {
  id: number;
  problem: string;
  code: string;
  submittedAt: string;
  feedback: string | null;
}

const StudentDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (email) {
        const name = email.split('@')[0];
        setStudentName(name);
      }
      try {
        const response = await fetch('/api/student/submissions', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Failed to fetch submissions', error);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <Layout>
      <div className="relative">
        <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
          <Suspense fallback={null}>
            <Stars />
            <OrbitControls />
          </Suspense>
        </Canvas>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Welcome, {studentName}!
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                This is your personal dashboard. Access your learning tools and track your progress.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Your Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/10 backdrop-blur-sm border-border/50">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium text-white">
                              {tool.title}
                          </CardTitle>
                          <tool.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                          <p className="text-xs text-muted-foreground">
                              {tool.description}
                          </p>
                          <Link to={tool.link}>
                            <Button variant="accent" size="sm" className="mt-4">
                                Start
                            </Button>
                          </Link>
                      </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* My Submissions Section */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">My Submissions</h2>
            <div className="bg-card/10 backdrop-blur-sm border-border/50 rounded-2xl p-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Problem</TableHead>
                    <TableHead className="text-white">Submitted At</TableHead>
                    <TableHead className="text-white">Feedback</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="text-white">{submission.problem}</TableCell>
                      <TableCell className="text-white">{new Date(submission.submittedAt).toLocaleString()}</TableCell>
                      <TableCell className="text-white">{submission.feedback || 'Pending'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
