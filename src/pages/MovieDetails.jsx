import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log('Error fetching movie:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Add a loading indicator or message
  }

  return (
    <div className="bg-gray-100 min-h-screen mt-10">
      <header className="bg-gradient-to-r from-orange-600 to-cyan-300 p-4">
        <h1 className="text-white text-3xl">{movie.title}</h1>
      </header>
      <main className="p-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold">{movie.body}</h3>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
