import { useEffect, useState } from "react";
import Header from "../components/Header";
import IMAGES from "../photos";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDiceFive,
  FaSearch,
} from "react-icons/fa";

function NFTGalleryEight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goPrev = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const goNext = () => {
    if (index === IMAGES.length - 1) {
      setIndex(IMAGES.length - 1);
    } else {
      setIndex(index + 1);
    }
  };

  const searchItem = (e) => {
    const searchText = e.target.value;
    if (searchText == "") {
      setIndex(0);
    } else {
      if (parseInt(searchText) < 0) {
        setIndex(0);
      } else if (parseInt(searchText) > IMAGES.length) {
        setIndex(IMAGES.length - 1);
      } else {
        setIndex(parseInt(searchText) - 1);
      }
    }
  };

  const randomizeIndex = () => {
    const randomIndex = Math.round(Math.random() * (IMAGES.length - 0) + 0);
    setIndex(randomIndex);
  };

  const skip = (e) => {
    const keyCode = e.keyCode;
    console.log(e);
    if (keyCode == 37) {
      let newIndex = index - 1;
      if (newIndex < 0) {
        setIndex(0);
      } else {
        setIndex(newIndex);
      }
    }
    if (keyCode == 39) {
      let newIndex = index + 1;
      if (newIndex > IMAGES.length - 1) {
        setIndex(IMAGES.length - 1);
      } else {
        setIndex(newIndex);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <h3>NFT Gallery 888</h3>
        <div className="src-rndm">
          <div className="rndm">
            <button className="mint-link-btn" onClick={() => randomizeIndex()}>
              Randomize
            </button>
          </div>
          <div className="src">
            <FaSearch className="src-icon" />
            <input
              className="src-in"
              type="number"
              onChange={(e) => searchItem(e)}
            />
          </div>
        </div>
        <div className="slide-container">
          <div className="slides">
            <div className="prev">
              <button className="nav-btn" onClick={() => goPrev()}>
                <FaArrowLeft className="nav-icon" />
              </button>
            </div>
            <div className="slide-card" onKeyDown={(e) => skip(e)}>
              <img src={IMAGES[index]} alt="slide-img-1" />
              <div className="card-info">
                <h4>{`#${index + 1}`}</h4>
                <a href="#" className="mint-link">
                  Buy
                </a>
              </div>
            </div>
            <div className="next">
              <button className="nav-btn" onClick={() => goNext()}>
                <FaArrowRight className="nav-icon" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NFTGalleryEight;
