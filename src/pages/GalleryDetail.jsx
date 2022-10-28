import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { database } from "../firebase";
import {
  doc,
  onSnapshot,
  collection,
  query,
  getFirestore,
  getDoc,
  where,
} from "firebase/firestore";
import Header from "../components/Header";
import {
  FaArrowLeft,
  FaArrowRight,
  FaDiceFive,
  FaSearch,
} from "react-icons/fa";

function GalleryDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [upperGal, setUpperGal] = useState([]);

  useEffect(() => {
    const fireImages = [];
    const galImg = collection(database, "galleryImages");
    const id = parseInt(params.gallery_id);
    const q = query(galImg, where("galleryId", "==", id));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((d) => fireImages.push(d.data()));
      setImages(fireImages);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const galleries = [];
    const galImg = collection(database, "galleries");
    const id = parseInt(params.gallery_id);
    const q = query(galImg, where("galleryId", "==", id));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((d) => galleries.push(d.data()));
      setUpperGal(galleries);
    });
  }, []);

  const goPrev = () => {
    if (index === 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };
  const goNext = () => {
    if (index === images.length - 1) {
      setIndex(images.length - 1);
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
      } else if (parseInt(searchText) > images.length) {
        setIndex(images.length - 1);
      } else {
        setIndex(parseInt(searchText) - 1);
      }
    }
  };

  const randomizeIndex = () => {
    const randomIndex = Math.round(Math.random() * (images.length - 1 - 0) + 0);
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
      if (newIndex > images.length - 1) {
        setIndex(images.length - 1);
      } else {
        setIndex(newIndex);
      }
    }
  };

  return isLoading ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    <>
      <Header />
      <main>
        <h3>{upperGal[0].galleryName}</h3>
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
              <img
                src={images[index].galleryImage[0].downloadURL}
                alt="slide-img-1"
              />
              <div className="card-info">
                <h4>{`#${index + 1}`}</h4>
                <a href="#" className="mint-link">
                  Mint
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

export default GalleryDetail;
