import React from "react";
const dogImages = {
  golden: "public/images/Golden-Retriever.png",
  labrador: "/api/placeholder/500/300?text=Labrador",
  beagle: "/api/placeholder/500/300?text=Beagle",
  poodle: "/api/placeholder/500/300?text=Poodle",
  husky: "/api/placeholder/500/300?text=Siberian+Husky",
};

const BannerControls = ({ bannerConfig, updateBannerConfig }) => {
  const handleChange = (field, value) => {
    updateBannerConfig({ ...bannerConfig, [field]: value });
  };

  const handleImageSelect = (event) => {
    const breed = event.target.value;
    handleChange("imageUrl", dogImages[breed]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      handleChange("imageUrl", imageUrl);
    }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-3 py-2 border rounded-md"
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
              className="w-full px-3 py-2 border rounded-md"
              value={bannerConfig.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Discover amazing dog breeds..."
            ></textarea>
          </div>
        </div>

        {/* Style Controls */}
        <div className="space-y-4">
          <h3 className="font-medium">Appearance</h3>

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
                className="h-10 w-20 hover:cursor-pointer rounded-sm"
                value={bannerConfig.backgroundColor || ""}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
              />
              {/* <input
                type="text"
                className="flex-1 px-3 py-2 border rounded-md"
                value={bannerConfig.backgroundColor || ""}
                onChange={(e) =>
                  handleChange("backgroundColor", e.target.value)
                }
                placeholder="#2563eb"
              /> */}
            </div>
          </div>

          <div>
            <label
              htmlFor="bannerImage"
              className="block text-sm font-medium mb-1"
            >
              Banner Image
            </label>
            <select
              id="bannerImage"
              className="w-full px-3 py-2 border rounded-md"
              onChange={handleImageSelect}
            >
              <option value="golden">Golden Retriever</option>
              <option value="labrador">Labrador</option>
              <option value="beagle">Beagle</option>
              <option value="poodle">Poodle</option>
              <option value="husky">Siberian Husky</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="customImage"
              className="block text-sm font-medium mb-1"
            >
              Upload Custom Image
            </label>
            <input
              type="file"
              id="customImage"
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700"
              accept="image/*"
              onChange={handleFileUpload}
            />
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
