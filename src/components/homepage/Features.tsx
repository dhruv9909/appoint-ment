"use client"
import { motion } from "motion/react";
import { Calendar, Clock, Users, Bell, BarChart3, Shield, Smartphone, Globe } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that automatically finds the best times for everyone"
  },
  {
    icon: Clock,
    title: "24/7 Booking",
    description: "Let customers book appointments anytime, anywhere with our online portal"
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Reduce no-shows by 80% with automated SMS and email reminders"
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage multiple staff schedules and availability from one dashboard"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Get insights into your business with detailed analytics and reporting"
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security with HIPAA compliance for healthcare businesses"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect experience on all devices with our responsive design"
  },
  {
    icon: Globe,
    title: "Multi-location",
    description: "Manage appointments across multiple locations and time zones"
  }
];

export function Features() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Everything you need to manage appointments
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to streamline your booking process and grow your business
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}