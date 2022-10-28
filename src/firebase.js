import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGan7fhmlWhMPM1dw82nEe0l8mhr6f_n4",
  authDomain: "xspectar-web.firebaseapp.com",
  projectId: "xspectar-web",
  storageBucket: "xspectar-web.appspot.com",
  messagingSenderId: "13172824145",
  appId: "1:13172824145:web:973b36f0ee12b032b88070",
  measurementId: "G-2PPQKKPTJ2",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database, app };
