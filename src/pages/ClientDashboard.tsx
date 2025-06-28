
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Plus, Users, MessageSquare, Star, Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const ClientDashboard = () => {
  const navigate = useNavigate();

  const activeProjects = [
    {
      id: 1,
      title: "Residential Masonry Work",
      skill: "Masonry",
      location: "Mumbai, Maharashtra",
      budget: "₹50,000 - ₹75,000",
      proposals: 12,
      deadline: "March 15, 2024",
      status: "Active"
    },
    {
      id: 2,
      title: "Custom Wooden Furniture",
      skill: "Carpentry",
      location: "Pune, Maharashtra",
      budget: "₹30,000 - ₹45,000",
      proposals: 8,
      deadline: "March 25, 2024",
      status: "In Progress"
    }
  ];

  const recentArtisans = [
    {
      id: 1,
      name: "Rajesh Kumar",
      skill: "Master Mason",
      rating: 4.8,
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Priya Sharma",
      skill: "Carpenter",
      rating: 4.9,
      location: "Pune",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c44c?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      skill: "Metalworker",
      rating: 4.7,
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your projects and connect with skilled artisans</p>
          </div>
          <Button 
            onClick={() => navigate('/post-project')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Post New Project
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Active Projects</p>
                  <p className="text-3xl font-bold">2</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Proposals</p>
                  <p className="text-3xl font-bold">20</p>
                </div>
                <Users className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Messages</p>
                  <p className="text-3xl font-bold">5</p>
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
                  <p className="text-3xl font-bold">8</p>
                </div>
                <Star className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Active Projects
                </CardTitle>
                <CardDescription>
                  Manage your ongoing project listings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <Card key={project.id} className="bg-gray-50 border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <Badge 
                            variant={project.status === 'Active' ? 'default' : 'secondary'}
                            className={project.status === 'Active' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{project.skill}</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="font-medium text-green-600">{project.budget}</div>
                            <div className="text-gray-600">
                              {project.proposals} proposals • Due {project.deadline}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline">View Proposals</Button>
                          <Button size="sm" variant="ghost">Edit Project</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Artisans */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Recent Artisans
                </CardTitle>
                <CardDescription>
                  Artisans you've recently connected with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArtisans.map((artisan) => (
                    <div key={artisan.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <img 
                        src={artisan.image} 
                        alt={artisan.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{artisan.name}</h4>
                        <p className="text-sm text-gray-600">{artisan.skill}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{artisan.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">• {artisan.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  onClick={() => navigate('/browse-artisans')}
                >
                  Browse All Artisans
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
