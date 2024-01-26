import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Search from './Search';
import Footer from './Footer';
import toast, { Toaster } from "react-hot-toast";
import img from './assets/star.png';

const SingleLatestTvSeries = () => {

    const { id } = useParams();
    const [tvSeriesData, setTvSeriesData] = useState(null);
    const truncateOverview = (overview) => overview?.length > 108 ? `${overview.substring(0, 100)}...` : overview;

    useEffect(() => {
        const fetchtvSeriesDetails = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=29c7e473c0921537f77133fd18ffaea8`);
            const data = await res.json();
            console.log(data);
            setTvSeriesData(data);
        };

        fetchtvSeriesDetails();
    }, [id]);

    if (!tvSeriesData) {
        
        return null;
    }
    const notify = () => toast.success(`${tvSeriesData.name} is downloading`)
    const base_url = "https://image.tmdb.org/t/p/w500/";
    
    return (
        <section>
            <Search></Search>
            <div className="container mx-auto mb-12 mt-10 ">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${base_url + tvSeriesData?.poster_path})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4 w-3/4 rounded-none h-2/3">
                        <figure><img className="" src={base_url+tvSeriesData.poster_path} alt="Movie" /></figure>
                        <div className="card-body flex-grow-0">
                            <h2 className="card-title text-4xl pb-4">{tvSeriesData.name}</h2>
                            <p className='font-semibold text-xl '>First Aired on TV in {tvSeriesData.first_air_date}</p>

                            <p className='font-semibold text-md'>Language - {tvSeriesData?.spoken_languages.slice(0,2).map(lang=> lang.english_name)}</p>
                            <p className=" text-sm">{truncateOverview(tvSeriesData.overview)}</p>
                            <p className="text-lg font-semibold ">Seasons - {tvSeriesData.seasons.length}</p>
                            <p className="text-lg font-semibold ">Episoads - {tvSeriesData.number_of_episodes}</p>
                            <div className='flex justify-start'>
                                <p className='font-bold text-lg m-0 flex-grow-0'>IMDb -</p>
                                <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                                <p className="font-semibold text-lg ml-1">{tvSeriesData.vote_average.toFixed(1)}/10 ({tvSeriesData.vote_count}votes)</p>
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

export default SingleLatestTvSeries;
