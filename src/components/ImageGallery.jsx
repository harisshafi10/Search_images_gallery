import React, { useState } from "react";

const ImageGallery = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const API_KEY = "h5y0ZOpWphFi_QrMDG5XfYr61mhBYq655z36pWm7y0M";

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const clickHandler = () => {
    setPage(1);
    setData([]);
    getImages(1, search);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getImages(nextPage, search);
  };

  const getImages = async (pageNumber, searchVal) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${searchVal}&client_id=${API_KEY}`
      );
      const jsonData = await response.json();
      if (pageNumber === 1) {
        setData(jsonData.results); 
      } else {
        setData((prevData) => [...prevData, ...jsonData.results]); 
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-slate-800 p-6">
    <h1 className=" flex justify-center gap-4 mb-6 font-bold text-2xl text-slate-300">Search Images Gallery</h1>
      {/* Search Section */}
      <div className="flex justify-center items-center gap-4 mb-6 ">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search images..."
          value={search}
          className="border border-gray-500 bg-slate-800 text-slate-300 p-2 rounded w-full max-w-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={clickHandler}
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Gallery */}
      {loading && (
        <div className="flex justify-center items-center my-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((curVal, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
            onClick={() => openImage(curVal)}
          >
            <img
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={curVal.urls.small}
              alt={curVal.alt_description || "Image"}
            />
          </div>
        ))}
      </div>

      {/* Load More*/}
      {data.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 disabled:opacity-50 transition"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {/* Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700"
            >
              &times;
            </button>

            {/* Full Image */}
            <a href={selectedImage.links.html} target="_blank" rel="noopener noreferrer">
              <img
                className="max-w-full max-h-screen object-contain"
                src={selectedImage.urls.full}
                alt={selectedImage.alt_description || "Image"}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
