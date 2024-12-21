import bookletsData from "../bookletsData";

const BookletsGenerate = (props) => {
  return (
    <div className="booklet-container">
      <p>{props.date}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export const Booklets = () => {
  return (
    <div className="booklets-container">
      <div className="booklet-title">Товхимолууд</div>
      {bookletsData.map((booklet) => (
        <BookletsGenerate
          key={booklet.id}
          date={booklet.date}
          title={booklet.title}
        />
      ))}
    </div>
  );
};
