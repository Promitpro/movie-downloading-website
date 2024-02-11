import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import Search from './Search';
import { useParams } from 'react-router-dom';
import img from './assets/star.png'

const IMDBMovieid = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=29c7e473c0921537f77133fd18ffaea8`);
            const data = await res.json();
            console.log(data);
            setMovieData(data);
        };

        fetchMovieDetails();
    }, [id]);

    if (!movieData) {
        // Handle loading state if needed
        return null;
    }
    const notify = () => toast.success(`${movieData.title} is downloading`)
    const base_url = "https://image.tmdb.org/t/p/w500/";
    

    return (
        <section>
            <Search></Search>
            <div className="container mx-auto mb-12 mt-10  ">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${base_url + movieData?.poster_path}` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4 w-3/4 rounded-none h-96">
                        <figure><img className="" src={base_url+movieData.poster_path} alt="Movie" /></figure>
                        <div className="card-body flex-grow-0">
                            <h2 className="card-title text-4xl pb-4">{movieData.title}</h2>
                            <p className='font-semibold text-xl '>Released in {movieData.release_date}</p>

                            <p className='font-semibold text-md'>Language - {movieData?.genres.map(genre=> genre.name).join(', ')}</p>
                            <p className=" text-sm">{movieData.overview}</p>
                            <div className='flex justify-start'>
                                <p className='font-bold text-lg m-0 flex-grow-0'>IMDb -</p>
                                <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                                <p className="font-semibold text-lg ml-1">{movieData.vote_average}/10 ({movieData.vote_count}votes)</p>
                            </div>
                            <div className="card-actions justify-start mt-4" >
                                <button onClick={notify} className="btn bg-red-600 rounded-none">Download</button>
                                <Toaster />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>

    );
};

export default IMDBMovieid;

