import "../css/newsletter.css";

export const Newsletter = () => {
  return (
    <div className="newsletter-background">
      <div className="newsletter-container">
        <h4>NEWSLETTER</h4>
        <div className="newsletter-title">
          <h2>Хөрөнгө оруулалт, бизнесийн тоймыг</h2>
          <h2>5 минутад</h2>
        </div>
        <div className="inputEmail">
          <input type="text" placeholder="Имэйл хаяг" />
          <button>Уншаад үзье</button>
        </div>
        <p>
          Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл
          товхимлыг ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ.
        </p>
      </div>
    </div>
  );
};
