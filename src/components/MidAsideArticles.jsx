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
      <div className="midAsideBanner">
        <img
          src="https://cdn.boost.mn/66418cbd1e1c3e2f69d331d2/creative/3c052e0e-0b02-48ed-b6bc-8d520e34348a.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241222%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241222T110800Z&X-Goog-Expires=86399&X-Goog-Signature=216a20cd14b8ad7512ff2e8751d177dff874d897b03bcb73c09e9d902cfb12c96158d7333f7f5bf24b09785bd0841486f2980736c1127783430089226936c8db2d5b6de9898a143b891d28cb8813f660180adbdfc8b1067f44cbf8d758c95d8803be604ebe65b3d885d35d0479d2248056171867126b4a81b49c28c12cac56d6a416323fa31dfaf2a8c28c08dc4ca197c7d6ff3c816398d04f54d975c2e97a0110aff1dcc43827490e6135f1eafcc92b1840085de135bdafce537ed93e9c77ca65cd6b18c44db057b0342b4e9d5c08d0351f57ff8e61d5fa4cc628c15a29f32380946266fcb90c6d4207468a76916672b8ca61acdbe14cbe5f0902e75ea079bf&X-Goog-SignedHeaders=host"
          alt=""
        />
      </div>
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
