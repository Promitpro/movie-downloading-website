import React from 'react';
import { useQuery } from 'react-query';
import LeftSideTvSeries from './LeftSideTvSeries';

const LeftSideTvSerieses = () => {
    const { data: {results: latestTvSerieses} = {}, refetch, isLoading } = useQuery({
        queryKey: ['latestTvSeries'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=29c7e473c0921537f77133fd18ffaea8`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='mt-12 mb-12'>
            <h2 className='text-lg font-medium ml-4'>Latest TV Series</h2>
            <div className='grid grid-cols-5'>
            
            {
               latestTvSerieses && latestTvSerieses.map(latestTvSeries=> <LeftSideTvSeries key={latestTvSeries.id} latestTvSeries={latestTvSeries}></LeftSideTvSeries>)
            }

        </div>
        </section>
    );
};

export default LeftSideTvSerieses;




