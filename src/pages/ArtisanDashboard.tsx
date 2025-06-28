
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Edit, Star, Calendar, MapPin, Eye, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";

const ArtisanDashboard = () => {
  const navigate = useNavigate();

  const appliedProjects = [
    {
      id: 1,
      title: "Commercial Building Renovation",
      client: "ABC Construction",
      location: "Mumbai, Maharashtra",
      budget: "₹1,20,000 - ₹1,50,000",
      appliedDate: "March 5, 2024",
      status: "Under Review"
    },
    {
      id: 2,
      title: "Residential Interior Work",
      client: "Sharma Builders",
      location: "Pune, Maharashtra", 
      budget: "₹80,000 - ₹1,00,000",
      appliedDate: "March 3, 2024",
      status: "Shortlisted"
    }
  ];

  const recentWork = [
    {
      id: 1,
      title: "Modern Kitchen Cabinets",
      image: "https://images.unsplash.com/photo-1556912167-f556f1eb1d7c?w=300&h=200&fit=crop",
      rating: 5,
      client: "Patel Family"
    },
    {
      id: 2,
      title: "Wooden Staircase",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c085cd5?w=300&h=200&fit=crop",
      rating: 4.8,
      client: "Kumar Residence"
    },
    {
      id: 3,
      title: "Custom Wardrobes",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      rating: 4.9,
      client: "Singh Villa"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Artisan Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, Rajesh Kumar</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Eye className="h-4 w-4 mr-2" />
              View Public Profile
            </Button>
          </div>
        </div>

        {/* Profile Summary */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Rajesh Kumar</h2>
                <p className="text-lg text-gray-600 mb-2">Master Carpenter • 15+ years experience</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.8</span>
                    <span className="text-gray-600">(127 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    Mumbai, Maharashtra
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">₹2,45,000</div>
                <p className="text-gray-600">Total Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Projects Applied</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Active Projects</p>
                  <p className="text-3xl font-bold">3</p>
                </div>
                <Star className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">New Messages</p>
                  <p className="text-3xl font-bold">7</p>
                </div>
                <MessageSquare className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Completed</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <Star className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Applied Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Applied Projects
                </CardTitle>
                <CardDescription>
                  Track your project applications and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appliedProjects.map((project) => (
                    <Card key={project.id} className="bg-gray-50 border-l-4 border-l-orange-500">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <Badge 
                            variant={project.status === 'Shortlisted' ? 'default' : 'secondary'}
                            className={project.status === 'Shortlisted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="font-medium">{project.client}</div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="font-medium text-green-600">{project.budget}</div>
                            <div className="text-gray-600">Applied on {project.appliedDate}</div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="ghost">Send Message</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Work Portfolio */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Recent Work
                </CardTitle>
                <CardDescription>
                  Showcase your latest projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWork.map((work) => (
                    <div key={work.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="font-medium mb-1">{work.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{work.client}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{work.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-4" variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Add New Work
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
