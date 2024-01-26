import React from 'react';
import img1 from './assets/latest/1.jpeg';
import img2 from './assets/latest/2.jpeg';
import img3 from './assets/latest/3.jpeg';
import img4 from './assets/latest/4.jpeg';
import img5 from './assets/latest/5.jpeg';
import LatestMovie from './LatestMovie';

const Latest = () => {
    const latestMovies = [
        {
            id: 1,
            image: img1,
            name: 'Tiger 3 (Hindi)',
            year: 2023,
            rating: 5.8
        },
        {
            id: 2,
            image: img2,
            name: 'Justice League (English)',
            year: 2024,
            rating: 6.7
        },
        {
            id: 3,
            image: img3,
            name: 'Napoleon (English)',
            year: 2023,
            rating: 5.8
        },
        {
            id: 4,
            image: img4,
            name: 'Tamilarasan (Tamil)',
            year: 2023,
            rating: 8.0
        },
        {
            id: 5,
            image: img5,
            name: 'Rebel Moon (English)',
            year: 2023,
            rating: 5.9
        },
    ]
    return (
        <div className='grid grid-cols-1 mt-5  text-sm text-slate-300'>
            <h2 className='text-lg font-medium ml-8'>Latest Movies</h2>
            {
                latestMovies.map(latestMovie => <LatestMovie key={latestMovie.id} latestMovie={latestMovie}></LatestMovie>)
            }
        </div>
    );
};

export default Latest;