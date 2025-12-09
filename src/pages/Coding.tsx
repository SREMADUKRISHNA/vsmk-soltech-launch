import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Zap, Puzzle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const codingProblems = [
  {
    title: 'Two Sum',
    slug: 'two-sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    category: 'Array',
    difficulty: 'Easy',
    icon: Puzzle,
  },
  {
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    category: 'Stack',
    difficulty: 'Medium',
    icon: Zap,
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    category: 'Sliding Window',
    difficulty: 'Hard',
    icon: Code,
  },
];

const Coding: React.FC = () => {
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
              Coding Practice
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Improve your coding skills with our collection of problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coding Problems Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Coding Problems
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {problem.title}
                    </CardTitle>
                    <problem.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {problem.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            problem.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                            problem.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-red-200 text-red-800'
                        }`}>
                            {problem.difficulty}
                        </span>
                        <Link to={`/student/coding/${problem.slug}`}>
                          <Button variant="accent" size="sm">
                              Solve Problem
                          </Button>
                        </Link>
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

export default Coding;
