import { mainData } from "../data";
import CategorizedArticles from "./CategorizedArticles";

export const BusinessArticles = () => {
  let x = mainData
    .filter((article) => article.category == "Бизнес")
    .splice(0, 3);
  return (
    <div className="cat-articles-container">
      <div className="section-title">
        <h2>Бизнес</h2>
        <p>Илүү үзэх</p>
      </div>
      <div className="cat-article-section">
        {x.map((article) => {
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
