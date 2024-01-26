import React from 'react';
import star from './assets/star.png';
import { NavLink,  useHistory, useNavigate } from 'react-router-dom';

const LeftSideLatestMovie = ({ latestMovie }) => {
    console.log(latestMovie);
    const {title, vote_average, poster_path, id} = latestMovie;
    const base_url = "https://image.tmdb.org/t/p/w500/";
    const navigate = useNavigate();
    const truncateTitle = (title) => title?.length > 18 ? `${title.substring(0, 18)}...` : title;

    const handleMovieClick = async () => {
        
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=29c7e473c0921537f77133fd18ffaea8`);
        const data = await res.json();
        console.log("Additional movie details:", data);
        navigate(`/movie/${id}`, { state: { movieData: data } });
        
    };

    return (
        <NavLink to={`/movie/${id}`} key={id}>
            <div className=' w-36 h-56 m-4 hover:cursor-pointer hover:opacity-80'  onClick={handleMovieClick}>
            <div className='w-full relative'>
                <img className='w-36 h-52' src={base_url + poster_path} alt="Movie" />
                <div className='flex absolute bottom-0 right-0 bg-black  opacity-80'>
                    <img className='w-4 h-4 mt-3 ' src={star} alt="" />
                    <p className='pt-2 pl-1'>{vote_average.toFixed(1)}</p>
                </div>
            </div>
            <div className=" ">
                <h2 className="text-sm">{truncateTitle(title)}</h2>
            </div>
        </div>
        </NavLink>
    );
};

export default LeftSideLatestMovie;

