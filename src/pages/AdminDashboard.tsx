import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface Submission {
  id: number;
  userId: number;
  problem: string;
  code: string;
  submittedAt: string;
  feedback: string | null;
}

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});
  const { toast } = useToast();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/admin/submissions');
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Failed to fetch submissions', error);
      }
    };
    fetchSubmissions();
  }, []);

  const handleFeedbackChange = (id: number, value: string) => {
    setFeedback(prev => ({ ...prev, [id]: value }));
  };

  const handleFeedbackSubmit = async (submissionId: number) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/admin/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          submissionId,
          feedback: feedback[submissionId],
        }),
      });

      if (!response.ok) {
        throw new Error('Feedback submission failed');
      }
      
      toast({
        title: 'Success!',
        description: 'Feedback submitted.',
      });

      // Update the submission in the local state
      setSubmissions(prev => 
        prev.map(s => 
          s.id === submissionId ? { ...s, feedback: feedback[submissionId] } : s
        )
      );
      setFeedback(prev => ({...prev, [submissionId]: ''}));

    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Failed to submit feedback.',
        variant: 'destructive',
      });
    }
  };

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
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Review and provide feedback on coding submissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coding Submissions Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Coding Submissions</h2>
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Problem</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Feedback</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>{submission.userId}</TableCell>
                    <TableCell>{submission.problem}</TableCell>
                    <TableCell>{new Date(submission.submittedAt).toLocaleString()}</TableCell>
                    <TableCell><pre className="whitespace-pre-wrap font-mono text-xs">{submission.code}</pre></TableCell>
                    <TableCell>
                      {submission.feedback ? (
                        <p>{submission.feedback}</p>
                      ) : (
                        <div className="flex flex-col gap-2">
                          <Textarea 
                            placeholder="Provide feedback..."
                            value={feedback[submission.id] || ''}
                            onChange={(e) => handleFeedbackChange(submission.id, e.target.value)}
                          />
                          <Button onClick={() => handleFeedbackSubmit(submission.id)} size="sm">Submit</Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
