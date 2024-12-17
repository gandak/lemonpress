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

export default MainArticles;
