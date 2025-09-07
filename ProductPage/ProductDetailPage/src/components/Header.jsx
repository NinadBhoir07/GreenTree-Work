import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      {/* Mobile Header Bar */}
      <header className="lg:hidden bg-white shadow-sm relative z-50">
        {/* Promotion Banner */}
        <div className="bg-red-300 text-white text-center py-2 px-4">
          <p className="text-sm font-medium">
            50% off on all items till 24 Jan
          </p>
        </div>
        <Navbar />
      </header>

      {/* Desktop Header - Hidden on mobile */}
      <header className="hidden lg:block bg-white shadow-sm">
        <div className="bg-red-300 text-white text-center py-2">
          <p className="text-sm font-medium">
            50% off on all items till 24 Jan
          </p>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
