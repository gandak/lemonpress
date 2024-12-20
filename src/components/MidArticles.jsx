import { Booklets } from "./Booklets";
import { MidEconomyArticles } from "./MidEconomyArticles";
import { SponsoredArticles } from "./SponsoredArticles";
import "../css/midArticles.css";

export const MidArticles = () => {
  return (
    <div className="midArticles-container">
      <Booklets />
      <SponsoredArticles />
      <MidEconomyArticles />
    </div>
  );
};
