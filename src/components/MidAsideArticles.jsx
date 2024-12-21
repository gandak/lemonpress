import { mainData } from "../data";

const MidAsideArticlesGenerate = (props) => {
  return (
    <div className="midAsideArticle">
      <div className="category">{props.category}</div>
      <div className="title">{props.title}</div>
      <div className="date">{props.date}</div>
    </div>
  );
};

export const MidAsideArticles = () => {
  return (
    <div className="midAsideArticles-container">
      <div className="midAsideArticles">
        {mainData
          .filter(
            (article) =>
              article.category === "Зах зээл" || article.category === "Бизнес"
          )
          .splice(0, 3)
          .map((article) => {
            return (
              <MidAsideArticlesGenerate
                key={article.id}
                title={article.title}
                category={article.category}
                date={article.date}
              />
            );
          })}
      </div>
    </div>
  );
};
