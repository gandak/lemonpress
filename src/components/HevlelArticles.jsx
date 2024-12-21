import { mainData } from "../data";
import CategorizedArticles from "./CategorizedArticles";

export const HevlelArticles = () => {
  return (
    <div className="cat-articles-container">
      <div className="section-title">
        <h2>Хэвлэлийн мэдээ</h2>
        <p>Илүү үзэх</p>
      </div>
      <div className="cat-article-section">
        {mainData
          .filter((article) => article.category == "Хэвлэлийн мэдээ")
          .splice(0, 3)
          .map((article) => {
            return (
              <CategorizedArticles
                key={article.id}
                image={article.imageScr}
                category={article.category}
                date={article.date}
                title={article.title}
              />
            );
          })}
      </div>
    </div>
  );
};
