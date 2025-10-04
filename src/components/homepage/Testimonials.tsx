"use client"
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Spa Owner",
    company: "Serenity Wellness",
    avatar: "SJ",
    content: "BookEase transformed our booking process completely. We've seen a 40% reduction in no-shows and our customers love how easy it is to schedule online.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    role: "Dentist",
    company: "Bright Smile Dental",
    avatar: "MC",
    content: "The automated reminders alone have saved us countless hours. Our patients appreciate the convenience and we've improved our efficiency dramatically.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Hair Stylist",
    company: "Urban Style Studio",
    avatar: "LR",
    content: "Managing multiple stylists' schedules used to be a nightmare. Now everything is organized and our clients can book with their preferred stylist instantly.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            Loved by businesses worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their experience with BookEase
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}