import React, { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/banner";
import BannerControls from "./components/bannerControls";

const App = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const keys = Object.keys(localStorage);
    if (keys.includes("image")) {
      setImage(JSON.parse(localStorage.getItem("image")));
    }
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
    title: "Popular Types of Dogs",
    description:
      "Discover amazing dog breeds that make perfect companions. From loyal Labradors to playful Beagles.",
    buttonText: "Learn More",
    backgroundColor: "#2563eb",
    imageURL: "#",
  });

  useEffect(() => {
    setBannerConfig((prev) => {
      return {
        ...prev,
        title,
        description,
        backgroundColor,
        imageURL: image || prev.imageURL,
      };
    });
  }, [image, title, description, backgroundColor]);

  const updateBannerConfig = (newConfig) => {
    setBannerConfig(newConfig);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
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
