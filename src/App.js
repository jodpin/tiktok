import "./App.css";
import FeedVideos from "./components/feedVideos/FeedVideos";
import { Route, Routes, Link } from "react-router-dom";
import Upload from "./components/pages/Upload";
import Profile from "./components/pages/Profile";
import tiktoklogo from "./components/icons/tiktoklogo.png";

function App() {
  return (
    <div className="App">
      <main>
        <header className="nav-lg-container">
          <nav className="nav-lg">
            <img className="img-tiktok" src={tiktoklogo} alt="logo" />
            <div>
              <Link className="nav-lg-link" to="/upload">
                {" "}
                Subir Video
              </Link>
              <Link className="nav-lg-link" to="/profile">
                Mi Perfil
              </Link>
              <Link className="nav-lg-link" to="/">
                Inicio
              </Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<FeedVideos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
