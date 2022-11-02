import { useEffect, useState } from "react";
import one from "../images/199.webp";
import Header from "../components/Header";
import { database } from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";

function Home() {
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const galleries = [];
    const q = query(collection(database, "galleries"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((d) => galleries.push(d.data()));
      setGalleries(galleries);
      console.log(galleries);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <>
      <Header />
      <main>
        <div className="edit-area">
          <a
            href="https://rowy.app/p/xspectar-web/tables"
            target="_blank"
            className="mint-link"
          >
            Edit Gallery
          </a>
        </div>
        <div className="galleries">
          <div className="gallery-card">
            <a href="/nft_gallery_8888">
              <img src={one} alt="xspectar-gallery-one" />
              <h3>xSPECTAR NFT</h3>
            </a>
          </div>
          {galleries &&
            galleries.map((item, index) => (
              <div className="gallery-card" key={index}>
                <a href={`/gallery_detail/${index + 1}`}>
                  <img
                    src={item.galleryCover[0].downloadURL}
                    alt="xspectar-gallery-two"
                  />
                  <h3>{item.galleryName}</h3>
                </a>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default Home;
