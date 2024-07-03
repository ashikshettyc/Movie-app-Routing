import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const responsephotos = await axios.get("https://jsonplaceholder.typicode.com/photos")
        const cominedData = response.data.map((item, index )=> (
          {...item,
            imageUrl: responsephotos.data[index].url
          }
        ))
        setMovies(cominedData);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <h2 className="text-3xl mb-4 text-blue-600 font-bold">Welcome to Movie App</h2>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} className="flex flex-col gap-6">
            <div className="bg-white border-2 border-black p-4 rounded-lg shadow-md h-96 transition transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={movie.imageUrl}
                  alt="Movie Poster"
                  loading='lazy'
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{movie.title.substr(0, 20)}</h3>
              <p className="text-gray-600 line-clamp-3">{movie.body.substr(0, 40) + "..."}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
