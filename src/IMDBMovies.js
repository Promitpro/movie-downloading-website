import React from 'react';
import { useQuery } from 'react-query';
import IMDBMovie from './IMDBMovie';
import Search from './Search';
import RightSideNav from './RightSideNav';

const IMDBMovies = () => {
    const customMaxWidth = '1200px';
    const { data: { results: imdbTopMovies } = {}, refetch, isLoading } = useQuery({
        queryKey: ['imdbTopMovie'],
        queryFn: async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=29c7e473c0921537f77133fd18ffaea8&language=en-US&page=1`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    return (

        <section>
            <Search></Search>
            <div style={{ maxWidth: customMaxWidth, margin: '0 auto' }} className='bg-primary'>
                <div className='flex flex-col lg:flex lg:flex-row mt-10'>
                    <div style={{ width: '840px' }} className='w-full lg:w-1/3'>
                        <h2 className='text-lg font-medium ml-4 mt-4 text-red-500'>IMDB Top Movies</h2>
                        <div className='grid grid-cols-5'>
                            {
                                imdbTopMovies && imdbTopMovies.map(imdbTopMovie => <IMDBMovie key={imdbTopMovie.id} imdbTopMovie={imdbTopMovie}></IMDBMovie>)
                            }
                        </div>
                    </div>
                    <div style={{ width: '360px' }} className='w-full lg:w-2/3'>
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IMDBMovies;