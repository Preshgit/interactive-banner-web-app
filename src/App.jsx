import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/banner";
import BannerControls from "./components/bannerControls";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const keys = Object.keys(localStorage);

    if (keys.includes("title")) {
      setTitle(JSON.parse(localStorage.getItem("title")));
    }
    if (keys.includes("description")) {
      setDescription(JSON.parse(localStorage.getItem("description")));
    }
    if (keys.includes("backgroundColor")) {
      setBackgroundColor(JSON.parse(localStorage.getItem("backgroundColor")));
    }
  }, []);

  const [bannerConfig, setBannerConfig] = useState({
    title: "",
    description: "",
    buttonText: "Learn More",
    backgroundColor: "#2563eb",
    imageURL: "/image/dog-image.png",
  });

  useEffect(() => {
    setBannerConfig((prev) => {
      return {
        ...prev,
        title,
        description,
        backgroundColor,
      };
    });
  }, [title, description, backgroundColor]);

  const updateBannerConfig = (newConfig) => {
    setBannerConfig(newConfig);
  };

  return (
    <div className="flex items-center max-w-screen mx-auto min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Customize Your Banner
        </h1>
        <Banner bannerConfig={bannerConfig} />
        <BannerControls
          bannerConfig={bannerConfig}
          updateBannerConfig={updateBannerConfig}
        />
      </div>
    </div>
  );
};

export default App;
