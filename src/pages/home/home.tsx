import "./home.css";

import TopCover from "./components/top-cover/top-cover";
import Profile from "./components/profile/profile";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div id="home">
      <div className="top-cover">
        <TopCover />
      </div>
      <div className="body">
        <Profile />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
