import { mainData } from "../data";

const MainArticles = (props) => {
  return (
    <div className="article-body">
      <div className="image-section">
        <img src={props.image} />
      </div>
      <div className="title-section">
        <div className="category">{props.category}</div>
        <h1>{props.title}</h1>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
};

export const M_Articles = () => {
  return (
    <div className="main-articles-container">
      <div className="main-articles">
        {mainData
          .filter(
            (article) =>
              article.category !== "Хэвлэлийн мэдээ" &&
              article.category !== "Бизнес" &&
              article.category !== "Санхүү"
          )
          .map((article) => {
            return (
              <MainArticles
                image={article.imageScr}
                category={article.category}
                date={article.date}
                title={article.title}
              />
            );
          })}
        <div className="readMore">Илүү үзэх</div>
      </div>

      <div className="banner">
        <img src="https://ibb.co/YtZrTn7" alt="" />
        <img src="https://ibb.co/9s1K45y" alt="" />
      </div>
    </div>
  );
};
