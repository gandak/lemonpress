const CategorizedArticles = (props) => {
  return (
    <div className="cat-article-container">
      <div className="cat-image-section">
        <img src={props.image} />
      </div>
      <div className="cat-title-section">
        <div className="category">{props.category}</div>
        <h1>{props.title}</h1>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
};

export default CategorizedArticles;
