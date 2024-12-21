import { Booklets } from "./Booklets";
import { MidAsideArticles } from "./MidAsideArticles";
import { SponsoredArticles } from "./SponsoredArticles";
import "../css/midArticles.css";

export const MidArticles = () => {
  return (
    <div className="midArticles-container">
      <Booklets />
      <SponsoredArticles />
      <MidAsideArticles />
    </div>
  );
};
