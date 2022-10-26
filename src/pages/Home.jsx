import { useEffect } from "react";
import one from "../images/nft1.webp";
import two from "../images/nft2.webp";
import three from "../images/nft3.webp";
import four from "../images/nft4.webp";
import Header from "../components/Header";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="galleries">
          <div className="gallery-card">
            <a href="/nft_gallery_8888">
              <img src={one} alt="xspectar-gallery-one" />
              <h3>8888 NFT Gallery</h3>
            </a>
          </div>
          <div className="gallery-card">
            <a href="#">
              <img src={two} alt="xspectar-gallery-two" />
              <h3>Gallery 2</h3>
            </a>
          </div>
          <div className="gallery-card">
            <a href="#">
              <img src={three} alt="xspectar-gallery-three" />
              <h3>Gallery 3</h3>
            </a>
          </div>
          <div className="gallery-card">
            <a href="#">
              <img src={four} alt="xspectar-gallery-four" />
              <h3>Gallery 4</h3>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
