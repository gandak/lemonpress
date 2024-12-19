import { mainData } from "../data";
import "../css/featuredArticles.css";

const FtBigArticles = (props) => {
  return (
    <div>
      <div className="featuredBig-image">
        <img src={props.image} alt="" />
      </div>
      <div className="featuredBig-title-section">
        <div className="category">{props.category}</div>
        <div className="featuredBig-title">{props.title}</div>
        <div className="date">{props.date}</div>
      </div>
    </div>
  );
};

const FtSmallArticles = (props) => {
  return (
    <div>
      <div className="featuredSmall-image">
        <img src={props.image} alt="" />
      </div>
      <div className="featuredSmall-title-section">
        <div className="category">{props.category}</div>
        <div className="title">{props.title}</div>
        <div className="date">{props.date}</div>
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
              return (
                <FtBigArticles
                  image={article.imageScr}
                  title={article.title}
                  category={article.category}
                  date={article.date}
                />
              );
            })}
        </div>
        <div className="featuredSmall">
          <div className="featuredSmall-first">
            {mainData
              .filter((article) => article.featured == true)
              .splice(1, 1)
              .map((article) => {
                return (
                  <FtSmallArticles
                    image={article.imageScr}
                    title={article.title}
                    category={article.category}
                    date={article.date}
                  />
                );
              })}
          </div>
          <div className="featuredSmall-nexttwo">
            {mainData
              .filter((article) => article.featured == true)
              .splice(2, 2)
              .map((article) => {
                return (
                  <FtSmallArticles
                    title={article.title}
                    category={article.category}
                    date={article.date}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
