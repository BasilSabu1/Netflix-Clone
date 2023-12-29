import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Row.css'

function Row({title,fetchurl,isPresent}) {
  // console.log(props);
  // console.log(title);
  const[allmovies,setallmovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original"


  const fetchdata = async()=>{
 const {data} = await instance.get(fetchurl)
 setallmovies(data.results)

  }
  console.log(allmovies);


  useEffect(()=>{
    fetchdata()
  },[])


  return (
    <div className='row' >
      <h1>{title}</h1>
      <div className='movie-row'>
        {

      allmovies?.map(item=>
<img className='movie' src={`${base_url}/${isPresent?item.poster_path:item.backdrop_path}`} alt="image" />
      )
    }
      </div>
    </div>
  )
}

export default Row