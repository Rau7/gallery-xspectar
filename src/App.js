import { Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Home from "./pages/Home";
import NFTGalleryEight from "./pages/NFTGalleryEight";
import Login from "./pages/Login";
import GalleryDetail from "./pages/GalleryDetail";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/nft_gallery_8888" element={<NFTGalleryEight />} />
      <Route
        exact
        path="/gallery_detail/:gallery_id"
        element={<GalleryDetail />}
      />
    </Routes>
  );
}

export default App;
