
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Star, Users, Plus, Search, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Community = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const forumTopics = [
    {
      id: 1,
      title: "Best practices for moisture-proofing in monsoon season",
      author: "Rajesh Kumar",
      authorType: "Master Mason",
      category: "Masonry",
      replies: 23,
      views: 456,
      lastActive: "2 hours ago",
      tags: ["Waterproofing", "Monsoon", "Tips"],
      isPopular: true
    },
    {
      id: 2,
      title: "How to price woodworking projects fairly?",
      author: "Priya Sharma",
      authorType: "Carpenter",
      category: "Business",
      replies: 18,
      views: 287,
      lastActive: "5 hours ago",
      tags: ["Pricing", "Business", "Carpentry"]
    },
    {
      id: 3,
      title: "New safety regulations for electrical work - What you need to know",
      author: "Admin",
      authorType: "KaamConnect Team",
      category: "Safety",
      replies: 34,
      views: 892,
      lastActive: "1 day ago",
      tags: ["Safety", "Regulations", "Electrical"],
      isPinned: true
    },
    {
      id: 4,
      title: "Showcase: Modern kitchen cabinet project completed",
      author: "Ahmed Hassan",
      authorType: "Metalworker",
      category: "Showcase",
      replies: 12,
      views: 234,
      lastActive: "3 hours ago",
      tags: ["Showcase", "Kitchen", "Modern"]
    },
    {
      id: 5,
      title: "Looking for recommendations on quality tools for beginners",
      author: "Neha Patel",
      authorType: "New Artisan",
      category: "Tools",
      replies: 27,
      views: 567,
      lastActive: "6 hours ago",
      tags: ["Tools", "Beginner", "Recommendations"]
    }
  ];

  const categories = [
    { name: "General Discussion", count: 45, icon: "💬" },
    { name: "Masonry", count: 23, icon: "🧱" },
    { name: "Carpentry", count: 31, icon: "🔨" },
    { name: "Metalwork", count: 18, icon: "⚒️" },
    { name: "Painting", count: 15, icon: "🎨" },
    { name: "Business Tips", count: 29, icon: "💼" },
    { name: "Safety", count: 12, icon: "🦺" },
    { name: "Showcase", count: 38, icon: "⭐" }
  ];

  const featuredResources = [
    {
      title: "Complete Guide to Construction Safety",
      type: "Guide",
      views: 1234,
      rating: 4.8
    },
    {
      title: "Pricing Calculator for Artisans",
      type: "Tool",
      views: 890,
      rating: 4.6
    },
    {
      title: "Government Schemes for Skilled Workers",
      type: "Resource",
      views: 2456,
      rating: 4.9
    }
  ];

  const filteredTopics = forumTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Forum</h1>
          <p className="text-gray-600">Connect, learn, and share knowledge with fellow artisans and clients</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and New Topic */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search topics, categories, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    New Topic
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Forum Topics */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {topic.isPinned && (
                            <Badge variant="destructive" className="text-xs">
                              Pinned
                            </Badge>
                          )}
                          {topic.isPopular && (
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {topic.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {topic.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>by <strong>{topic.author}</strong> ({topic.authorType})</span>
                          <span>•</span>
                          <span>{topic.lastActive}</span>
                        </div>
                      </div>
                      
                      <div className="text-right text-sm text-gray-600">
                        <div className="flex items-center gap-1 mb-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{topic.replies}</span>
                        </div>
                        <div className="text-xs">{topic.views} views</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-500 text-lg">No topics found matching your search.</p>
                  <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <CardDescription>Browse topics by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Featured Resources</CardTitle>
                <CardDescription>Helpful guides and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredResources.map((resource, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">{resource.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{resource.views} views</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Members</span>
                    <span className="font-semibold">12,456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Today</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Topics Created</span>
                    <span className="font-semibold">3,456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Replies Posted</span>
                    <span className="font-semibold">18,923</span>
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

export default Community;
