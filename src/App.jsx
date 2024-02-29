import "./App.css";
import { useState, useEffect, useMemo } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import searchPhotos from "./search-api";
import { Toaster } from "react-hot-toast";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";


// import data from "./data/data.json"

export default function App() {
  const [param, setParam] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (param) {
      searchPhotos(param)
        .then((response) => {
          setParam(param);
          setSearchResults(response.data.results);
          console.log(response.data.results);
          setError(null);
        })
        .catch((error) => {
          setSearchResults([]);
          setError(error);
        });
    }
  }, [param]);

  const handleSearch = (search) => {
    console.log(search);
    setParam(search);
  };

  const memoizedResults = useMemo(() => searchResults, [searchResults])

  return (
    <>
      <p>Hello</p>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery results={memoizedResults} />
    </>
  );
}

// Минула ДЗ
// https://olvet7.github.io/goit-react-hw-03-image-finder/ - готовий пошуковий сервіс
// https://github.com/Olvet7/goit-react-hw-03-image-finder - код


// План:
// інпут
// api запит
// колекція 
// LoadMore + пагінація 
// LocalStorage
// useState, useEffect, useMemo, useRef
// state mashine
// модалка
// умова рендеру