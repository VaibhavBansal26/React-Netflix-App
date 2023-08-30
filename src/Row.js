import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer'

const Row = ({title,fetchURL,isLargeRow=false}) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("")
    
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovie(request.data.results)
            return request;
        }
        fetchData();
    },[fetchURL]);

    const opts = {
        maxHeight:"390px",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };

    const handleClick = (movie) =>{
        console.log(movie.name)
        if(trailerUrl){
            setTrailerUrl('')
        }else{
            movieTrailer(movie?.name || "",{apiKey:'9c3efd30dea1340dde61b924f7267062',multi:false})
            .then((url) =>{
                console.log(url)
                const urlParams = new URLSearchParams((new URL(url)).search)
                setTrailerUrl(urlParams.get("v"))
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) =>(
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) &&
                    (
                        <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_largeposter"}`} 
                        src={`${base_url}${isLargeRow ? movie?.poster_path:movie?.backdrop_path}`} alt={movie.name}/>
                    )
                    
                ))}   
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}     
        </div>
    )
}

export default Row
