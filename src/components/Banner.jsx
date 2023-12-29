import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance'

function Banner({fetchurl}) {

const [movie , setmovie] = useState()
const base_url = "https://image.tmdb.org/t/p/original/"

const fetchdata = async ()=>{
    const {data}  = await instance.get(fetchurl)
    setmovie(data.results[Math.floor(Math.random()*data.results.length)]);
}

console.log(movie);

useEffect(()=>{
    fetchdata()
},[])

  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed',backgroundPosition:'center'}}>
       <div className="movie-content">
        <h1>{movie?.name}</h1>
        <h2>{movie?.overview.slice(0,200)}...</h2>
        <button className='btn btn-danger '>Play <i class="fa-solid fa-play bg-transparent"></i></button>
        <button className='btn border-white more ms-3'>More info <i class="fa-solid fa-caret-down bg-transparent"></i></button>
       </div>

    </div>
  )
}

export default Banner