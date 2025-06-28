
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">KaamConnect</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering skilled artisans and connecting them with meaningful infrastructure projects. 
              Building a sustainable future for traditional craftsmanship.
            </p>
            <div className="text-sm text-gray-400">
              Supporting UN SDG-11: Sustainable Cities and Communities
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">For Clients</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Post Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Artisans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-blue-400">For Artisans</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Verification</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KaamConnect. Preserving skills, creating opportunities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
