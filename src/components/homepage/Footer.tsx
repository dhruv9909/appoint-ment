"use client"
import { Calendar, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Mobile App"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Help Center", "Documentation", "Tutorials", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">BookEase</span>
            </motion.div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The modern appointment scheduling platform trusted by businesses worldwide. 
              Streamline your bookings and delight your customers.
            </p>
            
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 BookEase. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms  
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}