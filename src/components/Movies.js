import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from "../assests/banner.jpg";
import Pagination from './Pagination';
import { Oval } from 'react-loader-spinner'

const Movies = () => {

    const[page,setPage] = useState(1)
    const[movies,setMovies] = useState([])
    const[hover,setHover] = useState('')
    const[favourites, setFavourites] = useState([]);

    useEffect(function () {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=eac281ee93a70e102524b25c7b14b815&page=${page}`).then((res) => {
        setMovies(res.data.results)
        let oldfav = localStorage.getItem("imdb",)
        oldfav = JSON.parse(oldfav) || []
        setFavourites([...oldfav])
    })
    },[page]) 

    function goAhead() {
      setPage(page + 1);
    }
  
    const goBack = () => {
      if (page > 1) {
        setPage(page - 1 );
      }
    }
  
    function add (movie) {
        let newArray = [...favourites, movie]
        setFavourites([...newArray])
        localStorage.setItem("imdb", JSON.stringify(newArray))

    }

    function del (movie){
        let newArray = favourites.filter((m) => m.id != movie.id)
        setFavourites([...newArray])
        localStorage.setItem("imdb", JSON.stringify(newArray))
    }


  return (
    <>
        <div className='text-center mt-4 '>
            <div className='font-bold text-3xl'>Trending Movies</div>
        </div>
        {
            movies.length === 0 ? 
            <div className='px-3 mt-3 flex justify-center'>
                <Oval
                height="80"
                width="80"
                radius="9"
                color="gray"
                secondaryColor='gray'
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                />
            </div>
            :
            <div className='px-3 mt-2 flex-wrap flex justify-center'>
                {
                    movies.map((movie)=>(
                        <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] h-[32vh] w-[150px] bg-cover bg-center rounded-xl m-4 flex items-end hover:scale-110 ease-out duration-300 relative`} onMouseEnter={()=> {
                            setHover(movie.id)
                        }}
                        onMouseLeave={()=>{
                            setHover("")
                        }}>
                            {
                                hover == movie.id && <>
                                {
                                    !favourites.find((m) => m.id == movie.id) ?
                                    <div className='absolute top-1 right-1 bg-gray-900 p-1 rounded-xl cursor-pointer' 
                                    onClick={()=> 
                                        add(movie)}
                                    >😍</div>
                                    :
                                    <div className='absolute top-1 right-1 bg-gray-900 p-1 rounded-xl cursor-pointer '
                                    onClick={()=> del(movie)}
                                    >❌</div>
                                }
                                </>
                            }
                            
                             <div className='bg-gray-900 w-full text-white font-bold p-1 text-center rounded-b-xl'>{movie.title}</div>
                         </div>
                    ))
                }
                
            </div>
        }
        
        <Pagination page={page} goAhead={goAhead} goBack={goBack}/>
    </>
  )
}

export default Movies