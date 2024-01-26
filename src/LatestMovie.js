import React from 'react';
import star from './assets/star.png';
const LatestMovie = ({latestMovie}) => {
    const { image, name, year, rating} = latestMovie;
    return (
        
            <div style={{backgroundColor: '#0A0B0B'}} className='flex w-72 h-24 ml-9 mt-6'>
            <div>
            <img className='w-20 h-24' src={image} alt="Movie" />
            </div>
            <div className="pl-4 pt-4">
                <h2 className="">{name}</h2>
                <h2 className=" text-slate-400">{year}</h2>
                <div className='flex'>
                <img className='w-4 h-4 mt-2 ' src={star} alt="" />
                <p className='pt-2 pl-1'>  {rating}</p>
                </div>
                
            </div>
        </div>
        
    );
};

export default LatestMovie;


// const InfoCard = ({infocard}) => {
//     const {icon, info, details, bgClass} = infocard;
//     return (
//         <div className={`card card-side px-6 bg-base-100 shadow-xl border border-zinc-100 ${bgClass}`}>
//             <figure><img src={icon} alt="Movie" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">{info}</h2>
//                 <p>{details}</p>
                
//             </div>
//         </div>
//     );