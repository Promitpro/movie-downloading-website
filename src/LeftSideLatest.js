import React, { useState } from 'react';
import { useQuery } from 'react-query';
import LeftSideLatestMovie from './LeftSideLatestMovie';

const LeftSideLatest = () => {
    
    const { data: {results: latestMovies} = {}, refetch, isLoading } = useQuery({
        queryKey: ['latestMovie'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=29c7e473c0921537f77133fd18ffaea8`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <section>
            <h2 className='text-lg font-medium ml-4'>Latest Movies</h2>
            <div className='grid grid-cols-5'>
            
            {
               latestMovies && latestMovies.map(latestMovie=> <LeftSideLatestMovie key={latestMovie.id} latestMovie={latestMovie}></LeftSideLatestMovie>)
            }

        </div>
        </section>
    );
};

export default LeftSideLatest;
