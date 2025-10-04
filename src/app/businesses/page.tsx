import { Search, Filter, MapPin, Grid, List } from "lucide-react";
import { BusinessCard } from "@/components/business-page/BusinessCards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock business data
const businesses = [
  {
    id: "1",
    name: "The Modern Bistro",
    category: "Restaurant",
    rating: 4.8,
    reviewCount: 152,
    location: "Downtown District, NYC",
    description: "Contemporary dining experience with locally sourced ingredients and innovative culinary techniques in an elegant atmosphere.",
    image: "https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU5NDc5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    phone: "+1 (555) 123-4567"
  },
  {
    id: "2",
    name: "Artisan Coffee Co.",
    category: "Coffee Shop",
    rating: 4.6,
    reviewCount: 89,
    location: "Creative Quarter, Brooklyn",
    description: "Specialty coffee roasters serving single-origin beans with expert baristas and a cozy workspace atmosphere perfect for professionals.",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc1OTQzODA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    phone: "+1 (555) 234-5678"
  },
  {
    id: "3",
    name: "Elite Fitness Studio",
    category: "Fitness",
    rating: 4.9,
    reviewCount: 203,
    location: "Midtown East, Manhattan",
    description: "State-of-the-art fitness facility with personal trainers, modern equipment, and group classes for all fitness levels.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc1OTQ1MDk5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: false,
    phone: "+1 (555) 345-6789"
  },
  {
    id: "4",
    name: "Tranquil Spa & Wellness",
    category: "Spa",
    rating: 4.7,
    reviewCount: 134,
    location: "Upper West Side, NYC",
    description: "Luxury wellness center offering therapeutic massages, skincare treatments, and holistic healing in a serene environment.",
    image: "https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTk0MTgyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    phone: "+1 (555) 456-7890"
  },
  {
    id: "5",
    name: "Chapter & Verse Books",
    category: "Bookstore",
    rating: 4.5,
    reviewCount: 76,
    location: "Greenwich Village, NYC",
    description: "Independent bookstore featuring curated collections, author events, and a cozy reading nook with specialty teas and pastries.",
    image: "https://images.unsplash.com/photo-1624340236923-4e6e8724695d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTk0MjI2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    phone: "+1 (555) 567-8901"
  },
  {
    id: "6",
    name: "Innovation Hub Co-Working",
    category: "Office Space",
    rating: 4.4,
    reviewCount: 91,
    location: "Financial District, NYC",
    description: "Modern co-working space with flexible memberships, meeting rooms, high-speed internet, and networking events for entrepreneurs.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU5NTAxMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isOpen: true,
    phone: "+1 (555) 678-9012"
  }
];

const categories = ["All", "Restaurant", "Coffee Shop", "Fitness", "Spa", "Bookstore", "Office Space"];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-foreground">Business Directory</h1>
              <p className="text-muted-foreground">Discover amazing local businesses</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-muted-foreground">
                <MapPin className="w-3 h-3 mr-1" />
                New York City
              </Badge>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search businesses..."
                className="pl-10 bg-input-background border-border"
              />
            </div>
            
            <div className="flex gap-2">
              <Select defaultValue="All">
                <SelectTrigger className="w-40 bg-input-background border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon" className="border-border">
                <Filter className="w-4 h-4" />
              </Button>
              
              <div className="flex border border-border rounded-md overflow-hidden">
                <Button variant="ghost" size="icon" className="rounded-none border-r border-border">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-muted-foreground">
              Showing {businesses.length} businesses
            </p>
          </div>
          <Select defaultValue="rating">
            <SelectTrigger className="w-48 bg-input-background border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="distance">Distance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <BusinessCard key={business.id} {...business} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="bg-card hover:bg-accent border-border px-8"
          >
            Load More Businesses
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Business Directory. Discover the best local businesses in your area.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}