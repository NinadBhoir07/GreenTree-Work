import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageContainer = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto px-4 lg:px-0">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[619px] rounded-lg  flex items-center justify-center">
        <span className=" text-sm sm:text-base"></span>
      </div>

      {/* Left Arrow */}
      <div className="absolute bottom-3 left-3 lg:left-3">
        <button className="p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute bottom-3 right-3 lg:right-3">
        <button className="p-1.5 sm:p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageContainer;
