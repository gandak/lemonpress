import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
          <nav>
            <div className="menu">
              <div>Товхимол ▼</div>
              <div>Нийтлэлүүд ▼</div>
              <div>Цувралууд ▼</div>
              <div>Подкаст ▼</div>
              <div>Бидний тухай ▼</div>
            </div>
          </nav>
        </div>
        <div className="searchButton">
          <i class="fa-solid fa-magnifying-glass"></i>
          <button>Уншаад үзье</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
