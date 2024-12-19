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
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/757aa5b9-0e51-440e-96c4-a159059bc841.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T012602Z&X-Goog-Expires=86399&X-Goog-Signature=47063910eea6b51d8383b5721f6b75264751e76b15c7af45712ea70367525e83ca17c43312c63c2e3a18e52a22c5cb62b30b2f6fa2c7ba950df1b895725d3220f10a1c65931f57e6ef45090eb240dca322dc9f1203e45c518882b49437cf5ff79705c427b9c416a3351a71e4c9da3f13242d9251316c82ac51c4c4d3cc23eeeb3bae34aa5629906064364c4ca424e24d36af4582830630665d17b4574b88580770a7e900441d3838ba9b5e37ef2ae9a7a225b70b924c043db808609288520437e2d81b77d0688006c0750e4ffdf4e6043cbcb3bea025f975b00e3b7a8d8058ffcdb102fd4bbf1d2398251fdaf957ceea9888df14858081a662064c2b0dffee72&X-Goog-SignedHeaders=host"
          alt=""
        />
        <img
          src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/4393e679-2224-4da3-967f-1dfe64500f90.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241219%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241219T012602Z&X-Goog-Expires=86399&X-Goog-Signature=93c52c5b1c04fff9b612934e5f3b5aaf15b7b3bc4ee56504c5f0f1f1bff6180f8500e420a1c12bed9762669ad909c222dd8908cdac1f1b9b32a130c9cb8ecc7ffc75f77b9e46592a218a4a8e721a9844ba610566320d2ddee7c8309f9513f84f11a3fe91934026eb9d12fd6e9d39de0c314718963c22bf52fd65770e57d7b50cdfcc6545ce051ea591744e997d2572bb9d57438a9b6bcbc12992672f9222ccf80a50a5f9ca0eb506b0e987546e22599cf0c273b55ff69f3aa9b25d3519b1a4a8bf7d8a60b1ab15cb8fd5ae9ef00fa01604fedf6d30cf30f5fe81d16f6e0b0747fdf1841f74e411abe5613279f7b275a7af76f140710711634069f25fa0e614dc&X-Goog-SignedHeaders=host"
          alt=""
        />
      </div>
    </div>
  );
};
