export function CopyrightCard() {
    return (
      <div className="relative col-span-1 md:col-span-3 h-12 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-blue-600 animate-gradient" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full flex items-center justify-center px-6">
          <p className="text-sm text-white font-medium">
            © {new Date().getFullYear()} Ignite. All rights reserved.
          </p>
        </div>
      </div>
    );
  }