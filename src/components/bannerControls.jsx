import React from "react";

const BannerControls = ({ bannerConfig, updateBannerConfig }) => {
  const handleChange = (field, value) => {
    updateBannerConfig({ ...bannerConfig, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.entries(bannerConfig).forEach(([key, value]) => {
      localStorage.setItem(`${key}`, JSON.stringify(value));
    });
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-xl md:text-2xl font-semibold mb-6">
        Banner Controls
      </h2>

      <div className="grid gid-col-1 md:grid-cols-2 md:gap-10">
        {/* Banner Title */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="bannerTitle"
              className="block text-sm font-medium mb-1"
            >
              Banner Title
            </label>
            <input
              type="text"
              id="bannerTitle"
              className="w-full px-3 py-2 border rounded-md active:outline-none hover:outline-none focus:outline-none"
              value={bannerConfig.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Banner Title"
            />
          </div>
          {/* Banner Background Color */}
          <div>
            <label
              htmlFor="backgroundColor"
              className="block text-sm font-medium mb-1"
            >
              Background Color -
              <span className="text-gray-500">
                choose your prefered background color by clicking on the color
                block
              </span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="color"
                id="backgroundColor"
                className="h-10 w-full hover:cursor-pointer md:hover:cursor-pointer rounded-sm"
                value={bannerConfig.backgroundColor || "#2663eb"}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
                placeholder="#2663eb"
              />
            </div>
          </div>
        </div>
        {/* Banner Description */}
        <div className="space-y-4 mt-4 md:mt-0">
          <div>
            <label
              htmlFor="bannerDescription"
              className="block text-sm font-medium mb-1"
            >
              Banner Description
            </label>
            <textarea
              id="bannerDescription"
              rows="3"
              className="w-full h-30 px-3 py-2 border rounded-md active:outline-none hover:outline-none focus:outline-none"
              value={bannerConfig.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Write a description for your banner"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Apply Button */}
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2 bg-transparent border-1 text-black rounded-md hover:bg-gray-100 active:bg-gray-300 cursor-pointer transition-colors">
          Apply Changes
        </button>
      </div>
    </form>
  );
};

export default BannerControls;
