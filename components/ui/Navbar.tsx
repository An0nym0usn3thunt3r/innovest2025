const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Left side heading */}
          <div>
            <h1 className="text-xl font-bold text-gray-900 text-mono">
              Innovest
            </h1>
          </div>

          {/* Right side navigation links */}
          <div className="flex space-x-4">
            <a className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Benefits
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Domains
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              TimeLine
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
