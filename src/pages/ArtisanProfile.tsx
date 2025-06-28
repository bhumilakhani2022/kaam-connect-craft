
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Calendar, MessageSquare, Heart, Share2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const ArtisanProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, this would be fetched based on ID
  const artisan = {
    id: 1,
    name: "Rajesh Kumar",
    trade: "Master Carpenter",
    specialization: "Custom Furniture & Interior Woodwork",
    rating: 4.8,
    reviewCount: 127,
    location: "Mumbai, Maharashtra",
    experience: "15+ years",
    hourlyRate: "₹500-800/hour",
    joinedDate: "January 2023",
    completedProjects: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    verified: true,
    skills: ["Custom Furniture", "Cabinet Making", "Wood Finishing", "Interior Carpentry", "Restoration Work"],
    description: "I'm a dedicated carpenter with over 15 years of experience in creating beautiful, functional woodwork. I specialize in custom furniture design and interior carpentry, bringing traditional craftsmanship together with modern techniques. Every project I undertake is completed with attention to detail and a commitment to quality that my clients have come to trust.",
    certifications: ["Certified Carpenter - Government of Maharashtra", "Safety Training Certificate", "Advanced Woodworking Diploma"],
    languages: ["Hindi", "English", "Marathi"],
    workingHours: "Monday - Saturday, 8:00 AM - 6:00 PM",
    portfolio: [
      {
        id: 1,
        title: "Modern Kitchen Cabinets",
        image: "https://images.unsplash.com/photo-1556912167-f556f1eb1d7c?w=400&h=300&fit=crop",
        description: "Complete kitchen cabinet installation with modern design",
        client: "Patel Family",
        completedDate: "February 2024",
        budget: "₹85,000"
      },
      {
        id: 2,
        title: "Custom Wooden Staircase",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c085cd5?w=400&h=300&fit=crop",
        description: "Handcrafted wooden staircase with intricate railings",
        client: "Kumar Residence",
        completedDate: "January 2024",
        budget: "₹1,20,000"
      },
      {
        id: 3,
        title: "Built-in Wardrobes",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        description: "Space-efficient built-in wardrobes with sliding doors",
        client: "Singh Villa",
        completedDate: "December 2023",
        budget: "₹65,000"
      }
    ]
  };

  const reviews = [
    {
      id: 1,
      client: "Arjun Patel",
      rating: 5,
      date: "March 2024",
      comment: "Excellent work on our kitchen cabinets. Rajesh was professional, punctual, and delivered exactly what we wanted. Highly recommended!",
      project: "Kitchen Cabinet Installation"
    },
    {
      id: 2,
      client: "Priya Kumar",
      rating: 4.8,
      date: "February 2024",
      comment: "Beautiful staircase work with great attention to detail. The craftsmanship is outstanding and the project was completed on time.",
      project: "Custom Wooden Staircase"
    },
    {
      id: 3,
      client: "Rohit Singh",
      rating: 4.9,
      date: "January 2024",
      comment: "Amazing wardrobes that perfectly fit our space. Rajesh understood our requirements and delivered beyond expectations.",
      project: "Built-in Wardrobes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/browse-artisans')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <img 
                      src={artisan.image} 
                      alt={artisan.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {artisan.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{artisan.name}</h1>
                        <p className="text-xl text-blue-600 font-medium mb-1">{artisan.trade}</p>
                        <p className="text-gray-600">{artisan.specialization}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{artisan.rating}</span>
                        <span className="text-gray-600">({artisan.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{artisan.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {artisan.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                      {artisan.skills.length > 4 && (
                        <Badge variant="outline">+{artisan.skills.length - 4} more</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About Rajesh</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{artisan.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Professional Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium">{artisan.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completed Projects:</span>
                        <span className="font-medium">{artisan.completedProjects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Joined KaamConnect:</span>
                        <span className="font-medium">{artisan.joinedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Working Hours:</span>
                        <span className="font-medium">{artisan.workingHours}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {artisan.languages.map((language) => (
                        <Badge key={language} variant="outline">{language}</Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-3">Certifications</h4>
                    <ul className="text-sm space-y-1">
                      {artisan.certifications.map((cert, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Recent work and completed projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {artisan.portfolio.map((project) => (
                    <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{project.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Client: {project.client}</span>
                          <span className="font-medium text-green-600">{project.budget}</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Completed: {project.completedDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
                <CardDescription>What clients say about working with Rajesh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{review.client}</h4>
                          <p className="text-sm text-gray-600">{review.project}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{review.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-1">{artisan.hourlyRate}</div>
                  <p className="text-sm text-gray-600">Hourly Rate</p>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700 mb-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="font-medium">Usually responds within 2 hours</span>
                  </div>
                  <p className="text-sm text-green-600">Available for new projects</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects Completed</span>
                    <span className="font-semibold">{artisan.completedProjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Repeat Clients</span>
                    <span className="font-semibold">73%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">On-time Delivery</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold">2 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
