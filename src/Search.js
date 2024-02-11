import React, { useContext } from 'react';
import { AppContext } from './context';
import { Link, useNavigate } from 'react-router-dom';
import img from './assets/icon.png'

const Search = () => {
    const { query, setQuery, isError } = useContext(AppContext);
    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/searchItems');

    };
    return (

        <section className='mb-1 shadow-md shadow-black '>
            <div className="navbar p-0 bg-primary ">
                <div className="flex-1 text-xl  ">
                    <Link to='/'>
                    <div className='bg-neutral flex flex-row py-5 px-6 ml-20'>
                        <img className='w-4 h-4 mt-1 mr-1 ' src={img} alt="" />
                        <p className='text-red-500 '>CINE</p><p className='pr-3'>FLIX</p>
                    </div>
                    </Link>
                    <div className="navbar-start">
                        <div className="dropdown ">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 absolute top-0 left-0 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <details>
                                        <summary>Movies</summary>
                                        <ul className="p-2 z-50">
                                            <li><a>DC</a></li>
                                            <li><a>Marvel</a></li>
                                            <li><a>Tamil</a></li>
                                            <li><a>Telegu</a></li>
                                            <li><a>Turkish</a></li>
                                            <li><a>Kannad</a></li>
                                            <li><a>TV show</a></li>
                                            <li><a>Bollywood</a></li>
                                            <li><a>Spanish</a></li>
                                            <li><a>Korean</a></li>
                                            <li><a>Japanese</a></li>
                                            <li><a>Hollywood</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Genres</summary>
                                        <ul className="p-2 z-50">
                                            <li><a>Anime</a></li>
                                            <li><a>Biography</a></li>
                                            <li><a>Comedy</a></li>
                                            <li><a>Crime</a></li>
                                            <li><a>Drama</a></li>
                                            <li><a>Documentry</a></li>
                                            <li><a>Fantasy</a></li>
                                            <li><a>Horror</a></li>
                                            <li><a>Mystery</a></li>
                                            <li><a>Psychological</a></li>
                                            <li><a>Romance</a></li>
                                            <li><a>Sci-Fi</a></li>
                                            <li><a>Thriller</a></li>
                                            <li><a>Sports</a></li>
                                            <li><a>War</a></li>
                                            <li><a>Western</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details>
                                        <summary>Special Categories</summary>
                                        <ul className="p-2 z-50">
                                            <li><a>IMDb Top Movies</a></li>
                                            <li><a>Satyajit Ray Films</a></li>
                                            <li><a>Oscar Winning Movies</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>B sub Movies</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 ">

                            <li>
                                <details>
                                    <summary>Movies</summary>
                                    <ul className="p-2 z-50">
                                        <li><a>DC</a></li>
                                        <li><a>Marvel</a></li>
                                        <li><a>Tamil</a></li>
                                        <li><a>Telegu</a></li>
                                        <li><a>Turkish</a></li>
                                        <li><a>Kannad</a></li>
                                        <li><a>TV show</a></li>
                                        <li><a>Bollywood</a></li>
                                        <li><a>Spanish</a></li>
                                        <li><a>Korean</a></li>
                                        <li><a>Japanese</a></li>
                                        <li><a>Hollywood</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Genres</summary>
                                    <ul className="p-2 z-50">
                                        <li><a>Anime</a></li>
                                        <li><a>Biography</a></li>
                                        <li><a>Comedy</a></li>
                                        <li><a>Crime</a></li>
                                        <li><a>Drama</a></li>
                                        <li><a>Documentry</a></li>
                                        <li><a>Fantasy</a></li>
                                        <li><a>Horror</a></li>
                                        <li><a>Mystery</a></li>
                                        <li><a>Psychological</a></li>
                                        <li><a>Romance</a></li>
                                        <li><a>Sci-Fi</a></li>
                                        <li><a>Thriller</a></li>
                                        <li><a>Sports</a></li>
                                        <li><a>War</a></li>
                                        <li><a>Western</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Special Categories</summary>
                                    <ul className="p-2 z-50">
                                        <li><a>IMDb Top 250 Movies</a></li>
                                        <li><a>Satyajit Ray Films</a></li>
                                        <li><a>Oscar Winning Movies</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>B sub Movies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className='mr-16'>
                        <form action="#" onSubmit={handleSearch}>
                            <div>
                                <input
                                    style={{ width: '340px', backgroundColor: '#272727' }}
                                    className='input'
                                    type="text"
                                    placeholder="search movie"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="card-error">
                            <p>{isError && isError.msg}</p>
                        </div>
                    </div>


                </div>
            </div>



















        </section>



    );
};

export default Search;