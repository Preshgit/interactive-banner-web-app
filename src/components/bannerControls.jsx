import React from "react";
// const dogImages = {
//   golden: "public/images/Golden-Retriever.png",
//   labrador: "/api/placeholder/500/300?text=Labrador",
//   beagle: "/api/placeholder/500/300?text=Beagle",
//   poodle: "/api/placeholder/500/300?text=Poodle",
//   husky: "/api/placeholder/500/300?text=Siberian+Husky",
// };

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
      <h2 className="text-xl font-semibold mb-6">Banner Controls</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Controls */}
        <div className="space-y-4">
          <h3 className="font-medium">Content</h3>
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
              placeholder="Popular Types of Dogs"
            />
          </div>

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
              className="w-full px-3 py-2 border rounded-md active:outline-none hover:outline-none focus:outline-none"
              value={bannerConfig.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Discover amazing dog breeds..."
            ></textarea>
          </div>
        </div>

        {/* Style Controls */}
        <div className="space-y-4">
          <h3 className="font-medium">Appearance</h3>

          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div>
              <label
                htmlFor="backgroundColor"
                className="block text-sm font-medium mb-1"
              >
                Background Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  id="backgroundColor"
                  className="h-10 w-28 hover:cursor-pointer rounded-sm"
                  value={bannerConfig.backgroundColor || ""}
                  onChange={(e) =>
                    handleChange("backgroundColor", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Apply Changes
        </button>
      </div>
    </form>
  );
};

export default BannerControls;
