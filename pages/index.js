import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Sun, Star, Sparkles } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [greeting, setGreeting] = useState('Hello World!');

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning, World!');
    } else if (hour < 18) {
      setGreeting('Good Afternoon, World!');
    } else {
      setGreeting('Good Evening, World!');
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 text-yellow-300/30"
        >
          <Sun size={64} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-32 right-20 text-orange-300/30"
        >
          <Star size={48} />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-32 left-1/4 text-amber-300/30"
        >
          <Sparkles size={56} />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              {greeting}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Welcome to our beautiful React Hello World application with a warm, light color scheme.
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/70 backdrop-blur-sm border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center justify-center gap-2">
                  <Sun className="w-5 h-5" />
                  Light Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Beautiful warm colors that are easy on the eyes with excellent readability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-amber-700 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Modern Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Clean, modern interface built with Next.js, Tailwind CSS, and Framer Motion.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Responsive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Fully responsive design that looks great on all devices and screen sizes.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technology badges */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Built with modern technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 text-sm py-1 px-3">
                React
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-sm py-1 px-3">
                Next.js
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 text-sm py-1 px-3">
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 text-sm py-1 px-3">
                Framer Motion
              </Badge>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-sm py-1 px-3">
                Shadcn/ui
              </Badge>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
            <div className="text-gray-600">
              <p>Ready to build something amazing?</p>
            </div>
          </motion.div>

          {/* Animated counter */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-orange-200 shadow-lg"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Application Stats</h4>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-orange-600">100%</div>
                <div className="text-sm text-gray-600">Responsive</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">Fast</div>
                <div className="text-sm text-gray-600">Performance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">Modern</div>
                <div className="text-sm text-gray-600">Design</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}