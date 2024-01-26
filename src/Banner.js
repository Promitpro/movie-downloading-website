import React from 'react';
import img1 from './assets/1.png'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'

const Banner = () => {
    return (
        <section className='container mx-auto relative z-1'>
            <div className="carousel w-full relative">
                <div id="item1" className="carousel-item w-full relative">
                    <img src={img5} className="w-full max-h-96" alt="Banner 1" />
                    <div className="absolute bottom-0 right-0 text-red-500 italic text-center">
                        <button className="bg-red-700 p-1 font-medium text-white">BEST OF 2023</button>
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full relative">
                    <img src={img2} className="w-full max-h-96" alt="Banner 2" />
                    <div className="absolute bottom-0 right-0 text-red-500 italic text-center">
                        <button className="bg-red-700 p-1 font-medium text-white">BEST OF 2023</button>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <img src={img3} className="w-full max-h-96" alt="Banner 3" />
                    <div className="absolute bottom-0 right-0 text-red-500 italic text-center">
                        <button className="bg-red-700 p-1 font-medium text-white">BEST OF 2023</button>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <img src={img4} className="w-full max-h-96" alt="Banner 4" />
                    <div className="absolute bottom-0 right-0 text-red-500 italic text-center">
                        <button className="bg-red-700 p-1 font-medium text-white">BEST OF 2023</button>
                    </div>
                </div>
                <div id="item5" className="carousel-item w-full relative">
                    <img src={img1} className="w-full max-h-96" alt="Banner 5" />
                    <div className="absolute bottom-0 right-0 text-red-500 italic text-center">
                        <button className="bg-red-700 p-1 font-medium text-white">BEST OF 2023</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </section>
    );
};

export default Banner;

