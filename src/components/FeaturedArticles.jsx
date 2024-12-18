import { mainData } from "../data";
import MainArticles from "./MainArticles";

const generateFeaturedArticles = () => {
  return (
    <div>
      <div className="featuredBig-image">
        <img src={article.imageScr} alt="" />
      </div>
    </div>
  );
};

export const FeaturedArticles = () => {
  return (
    <div className="featuredArticles-container">
      <div className="breakNews-section">
        <div className="blinking-title">Lemonade</div>
        <div className="breakNews">{mainData[0].title}</div>
      </div>

      <div className="featuredArticles">
        <div className="featuredBig">
          {mainData
            .filter((article) => article.featured == true)
            .splice(0, 1)
            .map((article) => {
              return <generateFeaturedArticles />;
            })}
        </div>
        <div className="featuredSmall">
          <div className="featuredSmall-first"></div>
          <div className="featuredSmall-nexttwo"></div>
        </div>
      </div>
    </div>
  );
};
