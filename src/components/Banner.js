import React from 'react';
import './Banner.css';
import { useEffect } from 'react';
import categories, { getMovies } from '../api';



function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async () => {
        try{
            const netflixOriginalsCategory = categories.find(
            (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);

        } catch (error){
            console.log("Banner fetchRandomMovie errror: ", error)
        }
    };

    useEffect(() => {
        fetchRandomMovie()
    }, [])
    
  function truncate(str, n) {
      return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
    
  return (
    <header className="banner-container" 
        style={{
            backgroundeSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            roundPostion: "center-center",
        }}
    >
        <div className="banner-content">
            <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons-container">           
                <button className="banner-button">Minha lista</button>
                <button className="banner-button">Minha lista</button>
            </div>
            <div className="banner-description">
                <h3>{truncate(movie?.overview, 400)}</h3>
            </div>
        </div>
    </header>
  )
}

export default Banner;