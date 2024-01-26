import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import Search from "./Search";
import Footer from "./Footer";
import RightSideNav from "./RightSideNav";
import star from './assets/star.png';

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  console.log(movie);
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <div>
      <Search></Search>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }} className='bg-primary'>



        <div className='flex flex-col lg:flex lg:flex-row mt-10'>
          <div style={{ width: '840px' }} className='w-full lg:w-1/3'>
            <section className='container mx-auto bg-primary'>
              <h2 className='text-lg font-medium ml-6 mt-8'>Search Results</h2>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-6">

                {movie
                  ?
                  movie.map((curMovieElem) => {
                    const { imdbID, Title, Poster } = curMovieElem;
                    const movieName = Title;

                    return (
                      <NavLink to={`/movie/searchItems/${imdbID}`} key={imdbID}>
                        <div className="mb-10">
                          <div className="relative w-96 h-64 rounded-none  shadow-xl z-0 hover:bg-secondary   hover:opacity-80 hover:cursor-pointer ">
                            <figure ><img className="w-full h-64" src={Poster === "N/A" ? imgUrl : Poster} alt="#" /></figure>
                            <div className="absolute bottom-0 bg-red-600 text-white px-1 text-center">
                            <h2 className=" text-center">
                              {/* {movieName.length > 13
                                ? `${movieName.substring(0, 25)}...`
                                : movieName} */}
                                {movieName}
                            </h2>
                            </div>
                            

                            <div className="card-body">


                            </div>
                          </div>

                        </div>

                      </NavLink>
                    );
                  })
                  : ""}
              </div>
            </section>
          </div>
          <div style={{ width: '360px' }} className='w-full lg:w-2/3'>
            <RightSideNav></RightSideNav>
          </div>

        </div>
      </div>






      <Footer></Footer>
    </div>
  );
};

export default Movie;