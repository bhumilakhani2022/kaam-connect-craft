
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const BrowseArtisans = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrade, setSelectedTrade] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const artisans = [
    {
      id: 1,
      name: "Rajesh Kumar",
      trade: "Masonry",
      specialization: "Brick & Stone Work",
      rating: 4.8,
      reviews: 127,
      location: "Mumbai, Maharashtra",
      experience: "15+ years",
      hourlyRate: "₹500-800/hour",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Brick Laying", "Stone Masonry", "Plastering"],
      description: "Expert mason with extensive experience in residential and commercial construction."
    },
    {
      id: 2,
      name: "Priya Sharma",
      trade: "Carpentry",
      specialization: "Custom Furniture",
      rating: 4.9,
      reviews: 89,
      location: "Pune, Maharashtra",
      experience: "12+ years",
      hourlyRate: "₹400-600/hour",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c44c?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Custom Furniture", "Cabinet Making", "Wood Finishing"],
      description: "Skilled carpenter specializing in bespoke furniture and interior woodwork."
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      trade: "Metalwork",
      specialization: "Welding & Fabrication",
      rating: 4.7,
      reviews: 156,
      location: "Delhi, NCR",
      experience: "18+ years",
      hourlyRate: "₹600-900/hour",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Arc Welding", "Metal Fabrication", "Gate Design"],
      description: "Master metalworker with expertise in structural and decorative metalwork."
    },
    {
      id: 4,
      name: "Lakshmi Reddy",
      trade: "Painting",
      specialization: "Interior & Exterior",
      rating: 4.6,
      reviews: 94,
      location: "Hyderabad, Telangana",
      experience: "10+ years",
      hourlyRate: "₹300-500/hour",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Wall Painting", "Texture Work", "Color Consultation"],
      description: "Professional painter with expertise in both traditional and modern techniques."
    },
    {
      id: 5,
      name: "Vikram Singh",
      trade: "Plumbing",
      specialization: "Installation & Repair",
      rating: 4.5,
      reviews: 203,
      location: "Jaipur, Rajasthan",
      experience: "20+ years",
      hourlyRate: "₹400-700/hour",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Pipe Installation", "Fixture Repair", "Water Systems"],
      description: "Experienced plumber with comprehensive knowledge of modern plumbing systems."
    },
    {
      id: 6,
      name: "Meera Patel",
      trade: "Electrical",
      specialization: "Wiring & Installation",
      rating: 4.8,
      reviews: 67,
      location: "Ahmedabad, Gujarat",
      experience: "8+ years",
      hourlyRate: "₹450-650/hour",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      verified: true,
      skills: ["Home Wiring", "LED Installation", "Safety Systems"],
      description: "Licensed electrician specializing in residential and commercial electrical work."
    }
  ];

  const filteredArtisans = artisans.filter(artisan => {
    const matchesSearch = artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.trade.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artisan.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrade = selectedTrade === "all" || artisan.trade.toLowerCase() === selectedTrade.toLowerCase();
    const matchesLocation = selectedLocation === "all" || artisan.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesTrade && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Skilled Artisans</h1>
          <p className="text-gray-600">Find verified professionals for your next project</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, trade, or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={selectedTrade} onValueChange={setSelectedTrade}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Trade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trades</SelectItem>
                  <SelectItem value="masonry">Masonry</SelectItem>
                  <SelectItem value="carpentry">Carpentry</SelectItem>
                  <SelectItem value="metalwork">Metalwork</SelectItem>
                  <SelectItem value="painting">Painting</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  <SelectItem value="jaipur">Jaipur</SelectItem>
                  <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {filteredArtisans.length} of {artisans.length} artisans
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Artisan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtisans.map((artisan) => (
            <Card key={artisan.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {artisan.verified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{artisan.name}</h3>
                    <p className="text-blue-600 font-medium">{artisan.trade}</p>
                    <p className="text-sm text-gray-600">{artisan.specialization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{artisan.rating}</span>
                    <span className="text-sm text-gray-600">({artisan.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{artisan.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {artisan.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {artisan.description}
                </p>

                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-gray-600">{artisan.experience}</span>
                  <span className="font-medium text-green-600">{artisan.hourlyRate}</span>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    onClick={() => navigate(`/artisan/${artisan.id}`)}
                  >
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArtisans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No artisans found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedTrade("all");
                setSelectedLocation("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseArtisans;
