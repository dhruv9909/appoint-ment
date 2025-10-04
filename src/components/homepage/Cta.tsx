"use client"
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/imageWithFallback";

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5MzcxOTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office workspace"
                className="rounded-2xl shadow-2xl"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white rounded-full p-4 shadow-lg"
                >
                  <ArrowRight className="h-8 w-8 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6">
              Ready to transform your business?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of businesses already using BookEase to streamline their appointment scheduling 
              and provide exceptional customer experiences.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Setup in less than 5 minutes",
                "Import existing appointments",
                "24/7 customer support",
                "Cancel anytime, no contracts"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Schedule Demo
              </Button>
            </motion.div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}