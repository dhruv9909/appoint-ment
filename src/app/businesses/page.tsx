"use client";
import { BusinessCard } from "@/components/business-page/BusinessCards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchBusinesses } from "@/services/httpServices";
import { BusinessProps } from "@/types/business";
import { useQuery } from "@tanstack/react-query";
import { Filter, Grid, List, MapPin, Search } from "lucide-react";
import { useEffect, useState } from "react";

const categories = ["All", "Restaurant", "Coffee Shop", "Fitness", "Spa", "Bookstore", "Office Space"];

export default function App() {

  const { data: businesses, isLoading, isError } = useQuery({
    queryKey: ['businesses'],
    queryFn: fetchBusinesses,
  });

  console.log("businesses", isLoading, isError, businesses);

  // const [businesses, setBusinesses] = useState<BusinessProps[]>([]);

//   const fetchBusinesses = async () => {
//     try {
//     const res = await fetch(`/api/businesses`);
//     const data = await res.json();
//     console.log("data2",data?.data)
//     setBusinesses(data?.data);
//   } catch (error) {
//     console.error("Error fetching businesses:", error);
//   }
// }

  // useEffect(() => {
  //   fetchBusinesses();
  // }, [])

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
              Showing {businesses?.length} businesses
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
          {businesses?.data?.map((business) => (
            <BusinessCard key={business?._id} {...business} />
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