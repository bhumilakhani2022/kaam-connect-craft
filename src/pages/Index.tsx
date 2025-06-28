
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Star, Users, CheckCircle, ArrowRight, Hammer, Wrench, PaintBucket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Connect Directly",
      description: "Skip the middleman. Connect directly with skilled artisans and reliable clients."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Verified Professionals",
      description: "All artisans undergo skill verification and background checks for your peace of mind."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "Read reviews, check portfolios, and hire with confidence based on proven track records."
    }
  ];

  const trades = [
    { name: "Masonry", icon: <Hammer className="h-6 w-6" />, count: "2.5k+" },
    { name: "Carpentry", icon: <Wrench className="h-6 w-6" />, count: "1.8k+" },
    { name: "Painting", icon: <PaintBucket className="h-6 w-6" />, count: "1.2k+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Empowering Skilled Trades Since 2024
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect. Create. 
            <span className="text-blue-600"> Craft Excellence.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            KaamConnect bridges the gap between skilled artisans and infrastructure projects, 
            preserving traditional craftsmanship while reducing unemployment through meaningful work opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              onClick={() => navigate('/client-dashboard')}
            >
              I Need Skilled Workers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg"
              onClick={() => navigate('/artisan-dashboard')}
            >
              I'm a Skilled Artisan
            </Button>
          </div>

          {/* Featured Trades */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {trades.map((trade) => (
              <Card key={trade.name} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-blue-600 mb-3 flex justify-center">
                    {trade.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{trade.name}</h3>
                  <p className="text-sm text-gray-600">{trade.count} Artisans</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose KaamConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than a platform - we're a community dedicated to preserving skilled trades and creating opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of artisans and clients who trust KaamConnect for their project needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => navigate('/browse-artisans')}
            >
              Browse Artisans
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              onClick={() => navigate('/post-project')}
            >
              Post a Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
