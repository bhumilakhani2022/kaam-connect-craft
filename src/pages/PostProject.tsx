
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Calendar, MapPin, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PostProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    trade: "",
    location: "",
    budget: "",
    duration: "",
    skillLevel: "",
    deadline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project Posted Successfully!",
      description: "Your project has been posted and artisans will start applying soon.",
    });
    navigate('/client-dashboard');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/client-dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Post a New Project</h1>
            <p className="text-gray-600 mt-2">Connect with skilled artisans for your project needs</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Project Basics */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Provide clear information about your project to attract the right artisans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Project Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Kitchen Cabinet Installation"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your project in detail. Include materials, specifications, and any special requirements..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="trade">Required Trade *</Label>
                  <Select value={formData.trade} onValueChange={(value) => handleInputChange('trade', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select trade required" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="masonry">Masonry</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="metalwork">Metalwork</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="tiling">Tiling</SelectItem>
                      <SelectItem value="roofing">Roofing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skillLevel">Skill Level Required *</Label>
                  <Select value={formData.skillLevel} onValueChange={(value) => handleInputChange('skillLevel', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (3-7 years)</SelectItem>
                      <SelectItem value="expert">Expert (8+ years)</SelectItem>
                      <SelectItem value="master">Master Craftsman (15+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location and Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Location & Timeline
              </CardTitle>
              <CardDescription>
                Specify where the work will be done and when you need it completed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="location">Project Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g., Andheri West, Mumbai, Maharashtra"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  required
                  className="mt-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="duration">Project Duration</Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Expected duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3-days">1-3 days</SelectItem>
                      <SelectItem value="1-week">1 week</SelectItem>
                      <SelectItem value="2-weeks">2 weeks</SelectItem>
                      <SelectItem value="1-month">1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-months-plus">3+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deadline">Project Deadline</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Budget Information
              </CardTitle>
              <CardDescription>
                Provide your budget range to help artisans submit relevant proposals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="budget">Budget Range *</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                    <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                    <SelectItem value="250k-500k">₹2,50,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="500k-plus">₹5,00,000+</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-600 mt-2">
                  Artisans will see your budget range and can negotiate based on project scope.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Project Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Project Images (Optional)
              </CardTitle>
              <CardDescription>
                Upload reference images, blueprints, or site photos to help artisans understand your project better
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Drag and drop images here, or click to browse</p>
                <p className="text-sm text-gray-500">Support for JPG, PNG, PDF files up to 10MB each</p>
                <Button variant="outline" className="mt-4">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-4 justify-end">
            <Button 
              variant="outline" 
              type="button"
              onClick={() => navigate('/client-dashboard')}
            >
              Save as Draft
            </Button>
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Post Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProject;
