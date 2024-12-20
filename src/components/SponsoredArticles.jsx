import { mainData } from "../data";

const SponsoredArticleGenerate = (props) => {
  let sectionStyle = {
    backgroundImage: "url(" + props.image + ")",
  };

  return (
    <div className="sponsored-article" style={sectionStyle}>
      <p>{props.category}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export const SponsoredArticles = () => {
  return (
    <div className="sponsoredArticles-container">
      {mainData
        .filter((article) => article.sponsored == true)
        .map((article) => {
          return (
            <SponsoredArticleGenerate
              image={article.imageScr}
              category={article.category}
              title={article.title}
            />
          );
        })}
    </div>
  );
};
