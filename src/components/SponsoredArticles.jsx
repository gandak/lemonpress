import { mainData } from "../data";

const SponsoredArticleGenerate = (props) => {
  const sectionStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73))," +
      "url(" +
      props.image +
      ")",
  };

  {
    console.log(props.image);
  }

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
        .filter((article) => article.sponsored)
        .splice(0, 1)
        .map((article) => {
          return (
            <SponsoredArticleGenerate
              key={article.id}
              image={article.imageScr}
              category={article.category}
              title={article.title}
            />
          );
        })}
    </div>
  );
};
