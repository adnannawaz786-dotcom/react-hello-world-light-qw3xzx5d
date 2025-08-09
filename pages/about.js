import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Heart, Code, Palette } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const technologies = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Framer Motion',
    'Shadcn/ui',
    'Lucide React'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <motion.div variants={fadeInUp} className="mb-8">
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About This Project
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modern React Hello World application built with cutting-edge technologies and a beautiful light mode design.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project Overview */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    Project Overview
                  </CardTitle>
                  <CardDescription>
                    What makes this Hello World special
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    This isn't just any Hello World application. It's a showcase of modern web development practices, 
                    featuring a clean architecture, beautiful animations, and a responsive design that works perfectly 
                    across all devices.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-red-500" />
                    Built with love and attention to detail
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Design Philosophy */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-purple-500" />
                    Design Philosophy
                  </CardTitle>
                  <CardDescription>
                    Light, clean, and user-friendly
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The light mode color scheme emphasizes clarity and readability. Every element is carefully 
                    crafted to provide an excellent user experience with smooth animations and intuitive interactions.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Key Features:</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Responsive mobile-first design</li>
                      <li>• Smooth Framer Motion animations</li>
                      <li>• Accessible color contrasts</li>
                      <li>• Modern gradient backgrounds</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Technologies Used */}
          <motion.div variants={fadeInUp} className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
                <CardDescription>
                  Built with the latest and greatest web technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to explore?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                This project demonstrates how a simple concept can be elevated with modern tools and thoughtful design. 
                Feel free to explore the code and use it as a foundation for your own projects.
              </p>
              <Link href="/">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  Back to Hello World
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}