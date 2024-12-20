import React from "react";
import "./style.css";
import Header from "./components/Header1";
import { M_Articles } from "./components/MArticles";
import { BusinessArticles } from "./components/BusinessArticles";
import { HevlelArticles } from "./components/HevlelArticles";
import { BannerHeader } from "./components/BannerHeader";
import { FeaturedArticles } from "./components/FeaturedArticles";
import { MidArticles } from "./components/MidArticles";

const App = () => {
  return (
    <div>
      <Header />
      <BannerHeader />
      <FeaturedArticles />
      <MidArticles />
      <M_Articles />
      <BusinessArticles />
      <HevlelArticles />
    </div>
  );
};

export default App;
