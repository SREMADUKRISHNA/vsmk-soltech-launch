import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

// This would typically come from a data source based on the URL parameter
const codingProblems = [
  {
    title: 'Two Sum',
    slug: 'two-sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    category: 'Array',
    difficulty: 'Easy',
  },
  {
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    category: 'Stack',
    difficulty: 'Medium',
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    description: 'Given a string, find the length of the longest substring without repeating characters.',
    category: 'Sliding Window',
    difficulty: 'Hard',
  },
];

const SolveProblem: React.FC = () => {
  const { problemSlug } = useParams<{ problemSlug: string }>();
  const { toast } = useToast();
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const problem = codingProblems.find(p => p.slug === problemSlug);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('token'); // Assuming token is in localStorage

    try {
      const response = await fetch('/api/student/coding/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          problem: problem?.title,
          code,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      toast({
        title: "Success!",
        description: "Your solution has been submitted.",
      });
      setCode(''); // Clear the textarea
    } catch (error) {
      toast({
        title: "Error!",
        description: "There was a problem submitting your solution.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!problem) {
    return (
      <Layout>
        <div className="container-custom mx-auto text-center py-20">
          <h1 className="text-4xl font-bold">Problem Not Found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {problem.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {problem.description}
            </p>
             <span className={`text-sm mt-2 font-semibold px-3 py-1.5 rounded-full ${
                problem.difficulty === 'Easy' ? 'bg-green-200 text-green-800' :
                problem.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                'bg-red-200 text-red-800'
            }`}>
                {problem.difficulty}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Your Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your code here..."
                className="min-h-[300px] font-mono"
              />
              <Button onClick={handleSubmit} disabled={isSubmitting} className="mt-4">
                {isSubmitting ? 'Submitting...' : 'Submit Solution'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SolveProblem;
