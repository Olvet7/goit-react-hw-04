import "./App.css";
import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import searchPhotos from "./search-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


export default function App() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    img: "",
    alt_description: "",
  })

  useEffect(() => {
    if (query === "") {
      setError("Enter your query")
      return;
    }

    const getPhotos = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const { total_pages, results } = await searchPhotos(
          query,
          page
        );

        setShowBtn(total_pages !== 0 && total_pages >= page && page !== 200);

        setSearchResults((prevPhoto) => {
          return [...prevPhoto, ...results];
        })
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [query, page]);

  const handleSearch = (newSearch) => {
    if (newSearch === query) return;
    setQuery(newSearch);
    setSearchResults([]);
    setPage(1);     
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {searchResults.length > 0 && 
      <ImageGallery 
        results={searchResults} 
        onClick={openModal} 
        onTarget={setModalData}/>}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && showBtn && <LoadMoreBtn onLoadMore={handleLoadMore} />}
     
      <ImageModal 
      modalIsOpen={modalIsOpen} 
      closeModal={closeModal}
      modalData={modalData}
      />
    </>
  );
}

// Минула ДЗ
// https://olvet7.github.io/goit-react-hw-03-image-finder/ - готовий пошуковий сервіс
// https://github.com/Olvet7/goit-react-hw-03-image-finder - код

