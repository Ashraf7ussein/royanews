import MainContent from "../components/MainContent/MainContent";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <MainContent />
      <div className="newsLinkContainer">
        <Link to="/news" className="newsLink">
          See All News
        </Link>
      </div>
    </>
  );
};

export default HomePage;
