import React from "react";

const Banner = ({ bannerConfig }) => {
  const {
    title = "Popular Types of Dogs",
    description = "Discover amazing dog breeds that make perfect companions. From loyal Labradors to playful Beagles.",
    buttonText = "Learn More",
    backgroundColor = "#2563eb",
    imageURL = "/image/dog-image.png",
  } = bannerConfig;

  return (
    <div className="flex items-center max-w-screen mb-8 shadow-lg rounded-lg overflow-hidden">
      <div
        style={{ backgroundColor }}
        className="p-6 sm:p-10 bg-[#2563eb] w-full rounded-lg"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:max-w-1/2 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6">{description}</p>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 active:bg-gray-300 cursor-pointer transition-colors">
              {buttonText}
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center ">
            <img src={imageURL} alt="dog" className="w-3/4 md:w-1/2 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
