import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import img from './assets/star.png'
import Search from "./Search";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const SingleMovie = () => {
  const { id } = useParams();


  const notify = () => toast.success(`${movie.Title} is downloading`)

  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);
  console.log(movie);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <section>
      <Search></Search>
      <div className="container mx-auto mb-12 mt-10 ">
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${movie?.Poster})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4 w-3/4 rounded-none">
            <figure><img className="h-full w-96" src={movie.Poster} alt="Movie" /></figure>
            <div className="card-body flex-grow-0">
              <h2 className="card-title text-4xl pb-4">{movie.Title}</h2>
              <p className='font-semibold text-xl '>Released in {movie.Released}</p>
              
              <p className='font-semibold text-md'>Language - {movie?.Language}</p>
              <p className=" text-sm">{movie.Plot}</p>
              <div className='flex justify-start'>
                <p className='font-bold text-lg m-0 flex-grow-0'>IMDb -</p>
                <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                <p className="font-semibold text-lg ml-1">{movie.imdbRating}/10 ({movie.imdbVotes}votes)</p>
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

export default SingleMovie;