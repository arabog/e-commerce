import "./movie.css"

import { Publish } from "@material-ui/icons"

import { Link, useLocation } from "react-router-dom"


export default function Movie() {
          const location = useLocation()
          const movie = location.movie


          return (
                    <div className="products">
                              <div className="productTitleContainer">
                                        <h1 className="productTitle">Movie</h1>

                                        <Link to="/newmovie">
                                                  <button className="productAddBtn">Create</button>
                                        </Link>
                              </div>

                              <div className="productTop">

                                        <div className="productTopRight">
                                                  <div className="productTInfoTop">
                                                            <img src={movie.img} alt="" className="productInfoImg" />
                                                            <span className="productName"> { movie.title } </span>
                                                  </div>

                                                  <div className="productInfoBottom">
                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey">id: </span>
                                                                      <span className="productInfoValue"> {movie._id}</span>
                                                            </div>

                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey"> Genre: </span>
                                                                      <span className="productInfoValue">{movie.genre}</span>
                                                            </div>

                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey">Year: </span>
                                                                      <span className="productInfoValue">{movie.year}</span>
                                                            </div>

                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey">Limit: </span>
                                                                      <span className="productInfoValue">{movie.limit}</span>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              <div className="productBottom">
                                        <form  className="productForm">
                                                  <div className="productFormLeft">
                                                            <label htmlFor="movie">Movie Title</label>
                                                            <input id="movie" type="text" placeholder={movie.title} />

                                                            <label htmlFor="year">Year</label>
                                                            <input id="year" type="text" placeholder={movie.year} />

                                                            <label htmlFor="genre">Genre</label>
                                                            <input id="genre" type="text" placeholder={movie.genre} />

                                                            <label htmlFor="limit">Limit</label>
                                                            <input id="limit" type="text" placeholder={movie.limit} />

                                                            <label htmlFor="trailer">Trailer</label>
                                                            <input id="trailer" type="file" placeholder={movie.trailer} />

                                                            <label htmlFor="video">Video</label>
                                                            <input id="video" type="file" placeholder={movie.video} />
                                                  </div>

                                                  <div className="productFormRight">
                                                            <div className="productUpload">
                                                                      <img src={movie.img} alt="" className="productUploadImg" />

                                                                      <label for="file"> <Publish /></label>

                                                                      <input type="file" id="file" style={{display: "none"}} />
                                                            </div>

                                                            <button className="productButton"> Update </button>
                                                  </div>
                                        </form>
                              </div>
                    </div>
          )
}
