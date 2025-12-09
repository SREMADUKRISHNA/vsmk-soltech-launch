import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Film, Clapperboard } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const courses = [
  {
    title: 'Introduction to Cybersecurity',
    description: 'A beginner-friendly introduction to the world of cybersecurity.',
    icon: Film,
    videoId: 'inWWhr5tnEA',
  },
  {
    title: 'Ethical Hacking Full Course',
    description: 'Learn ethical hacking from scratch with this comprehensive course.',
    icon: Clapperboard,
    videoId: 'DJhO696FgPo',
  },
  {
    title: 'Web Application Penetration Testing',
    description: 'Learn how to find and exploit vulnerabilities in web applications.',
    icon: Youtube,
    videoId: 'h0395kBVyIo',
  },
];

const Courses: React.FC = () => {
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
              Live Courses
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Learn from the best with our curated list of cybersecurity courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {course.title}
                    </CardTitle>
                    <course.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`https://www.youtube.com/watch?v=${course.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src={`https://img.youtube.com/vi/${course.videoId}/0.jpg`}
                          alt={course.title}
                          className="w-full h-full rounded-lg object-cover"
                        />
                      </div>
                    </a>
                    <p className="text-xs text-muted-foreground">
                      {course.description}
                    </p>
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

export default Courses;
