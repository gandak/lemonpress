import React from "react";
import "./style.css";
import MainArticles from "./components/MainArticles";
import CategorizedArticles from "./components/CategorizedArticles";

const mainData = [
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e",
    title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    category: "Зах зээл",
    date: "2024-12-17",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/2d83d835-062d-4a85-a4c0-c7b3887f278d",
    title: "Казакстаны хөгжлийн цаана",
    category: "Эдийн засаг",
    date: "2024-12-17",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/c00b3bc3-2340-49f4-84d3-a274bd10893f",
    title: "Ариглан гамнаж, ашигтай хадгал",
    category: "Сурталчилгаа",
    date: "2024-12-17",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/466e9012-492b-43c9-9449-aa118031efa9",
    title:
      "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
    category: "Эдийн засаг",
    date: "2024-12-16",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/18016e65-ab3a-447d-9469-494c3ee7cffc",
    title: "Монгол бартендер дэлхийд өрсөлдлөө",
    category: "Хэвлэлийн мэдээ",
    date: "2024-12-13",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/f486afba-6fea-4318-baef-27c0e2582ff4",
    title: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
    category: "Бизнес",
    date: "2024-12-13",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/13aeb310-9ed2-478c-bf7a-a5f21ccc34c8",
    title: "Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
    category: "Санхүү",
    date: "2024-12-11",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/62d20840-42f6-46b9-8797-5cd80c97fac9",
    title:
      "АХБ болон ЕСБХБ энэ онд Монголын компаниудад $230.7 саяын хөрөнгө оруулжээ",
    category: "Бизнес",
    date: "2024-12-10",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/2320e341-c587-4221-a9c9-690e4346f8ad",
    title:
      "Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ",
    category: "Хэвлэлийн мэдээ",
    date: "2024-12-12",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/b4572cc3-5bab-4906-959d-189d72580471",
    title:
      "Хөгжлийн банкны хөрөнгө оруулах МНСК-ын эрүүл орчинд амьдрах төслийн үр шимийг 23 мянган өрх хүртэнэ",
    category: "Хэвлэлийн мэдээ",
    date: "2024-12-06",
  },
  {
    imageScr:
      "https://dash-api.yld.mn/api/image/62d20840-42f6-46b9-8797-5cd80c97fac9",
    title:
      "АХБ болон ЕСБХБ энэ онд Монголын компаниудад $230.7 саяын хөрөнгө оруулжээ",
    category: "Бизнес",
    date: "2024-12-10",
  },
];

const App = () => {
  return (
    <div>
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
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T030903Z&X-Goog-Expires=86399&X-Goog-Signature=6f38196208044d4c07d141d31109f1520170a6033479d9353d5741fb262ac051350669c13638fcaac673f35f0b37a4640210f3783d3275e12282a32744dd8b41acc4198590e64cfb6a316d9efb4ab4df10992c66a92425320fafd499d729042b9e18fc9cc57760f345239f48f18a5e44c9ca41a7f26aafc25929c18e6aaebb192886deff2c17fe861f18ecda50ba55176713927eaab49be144973bc1fd1ea1f370cd55e5ba6665f7dfa390c2c10fa3a6847cdbb95a57154d6e4945f5f2eaf543aa934f57b5f6e159893a1c0af77a341922ee804b96f5224b9a94e9cba4fef4b711b70d79e960df97450665125296d71f64bfa1fa088be44f8c71bfcce05c5af3&X-Goog-SignedHeaders=host"
            alt=""
          />
          <img
            src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T030903Z&X-Goog-Expires=86399&X-Goog-Signature=91cd6961f7128ee648245a5fc549db205df227bcf31f038b0d03a987363290e38758ddfbcb56fd500194f1ae32307b3099b4b78e96e64243647e3ff262611d4eab7d4b52b20613ed2f53596fe2c3c60b181297c9ef0f966498892f24ba90b11371bf35deceb474f933e7244cc771ea700fe474ff909120df86ce5ab6a5a962720aef421a1b6a326cc9974225b5b13fb5548343b8d7236ddc90664e34852765a9b0d830598efdaf0042e8e4cd10f8ce90a3257a6eae779cbcb035a4f4106085cb85c2204353dd70f2354ce0cda2ca36b171d4a8f1b5dcce8ae17094a6afda705c9c2fd202a668c69b8f5b5e9de2cb1137ea9397e12d206a5e9d6af78f62969cfd&X-Goog-SignedHeaders=host"
            alt=""
          />
        </div>
      </div>
      <div className="cat-articles-container">
        <div className="section-title">
          <h2>Бизнес</h2>
          <p>Илүү үзэх</p>
        </div>
        <div className="cat-article-section">
          {mainData
            .filter((article) => article.category == "Бизнес")
            .map((article) => {
              return (
                <CategorizedArticles
                  image={article.imageScr}
                  category={article.category}
                  date={article.date}
                  title={article.title}
                />
              );
            })}
        </div>
      </div>
      <div className="cat-articles-container">
        <div className="section-title">
          <h2>Бизнес</h2>
          <p>Илүү үзэх</p>
        </div>
        <div className="cat-article-section">
          {mainData
            .filter((article) => article.category == "Хэвлэлийн мэдээ")
            .map((article) => {
              return (
                <CategorizedArticles
                  image={article.imageScr}
                  category={article.category}
                  date={article.date}
                  title={article.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
