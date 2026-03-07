import { BusinessProps } from "@/types/business";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/imageWithFallback";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function BusinessCard({
  businessName,
  category,
  rating,
  reviewCount,
  location,
  description,
  image,
  isOpen,
  phone,
}: BusinessProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1">
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={businessName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant={isOpen ? "default" : "secondary"} 
            className={`${
              isOpen 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            <Clock className="w-3 h-3 mr-1" />
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/40 text-white border-0 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-3">
          <h3 className="mb-2 text-card-foreground group-hover:text-primary transition-colors">
            {businessName}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-muted-foreground">
              {rating} ({reviewCount} reviews)
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Details
          </Button>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            onClick={()=> window.open(`tel:${phone}`)}
          >
            <Phone className="w-4 h-4" />
            Call
          </Button>
        </div>
      </div>
    </div>
  );
}