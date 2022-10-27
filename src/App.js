import { Route, Routes } from "react-router-dom";
import "./css/styles.css";
import Home from "./pages/Home";
import NFTGalleryEight from "./pages/NFTGalleryEight";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nft_gallery_8888" element={<NFTGalleryEight />} />
    </Routes>
  );
}

export default App;
