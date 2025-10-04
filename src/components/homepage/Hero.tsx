"use client"
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { CheckCircle, Star, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/imageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm">Trusted by 50,000+ businesses</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
              <span className="block">Schedule appointments</span>
              <span className="block text-primary">effortlessly</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your booking process with our intelligent scheduling platform. 
              Reduce no-shows, save time, and delight your customers with seamless appointment management.
            </p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center space-x-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5MzA5NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business meeting"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating stats cards */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-lg border"
              >
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="text-sm">Active Users</div>
                    <div className="text-lg">2,847</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border"
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="text-sm">Bookings Today</div>
                    <div className="text-lg">156</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}