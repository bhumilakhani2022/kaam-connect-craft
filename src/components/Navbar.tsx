
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Users, MessageSquare } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { path: "/browse-artisans", label: "Browse Artisans", icon: <Users className="h-4 w-4" /> },
    { path: "/community", label: "Community", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">KaamConnect</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2 ${
                    location.pathname === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/client-dashboard')}
              className="text-gray-600 hover:text-blue-600"
            >
              Client Login
            </Button>
            <Button 
              onClick={() => navigate('/artisan-dashboard')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Artisan Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
