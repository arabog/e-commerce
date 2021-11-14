import "./list.css"

import { Link, useLocation } from "react-router-dom"


export default function List() {
          const location = useLocation()
          const list = location.list


          return (
                    <div className="products">
                              <div className="productTitleContainer">
                                        <h1 className="productTitle">List</h1>

                                        <Link to="/newList">
                                                  <button className="productAddBtn">Create</button>
                                        </Link>
                              </div>

                              <div className="productTop">

                                        <div className="productTopRight">
                                                  <div className="productTInfoTop">
                                                            <span className="productName"> { list.title } </span>
                                                  </div>

                                                  <div className="productInfoBottom">
                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey">id: </span>
                                                                      <span className="productInfoValue"> {list._id}</span>
                                                            </div>

                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey"> Genre: </span>
                                                                      <span className="productInfoValue">{list.genre}</span>
                                                            </div>

                                                            <div className="productInfoItem">
                                                                      <span className="productInfoKey">Year: </span>
                                                                      <span className="productInfoValue">{list.type}</span>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              <div className="productBottom">
                                        <form  className="productForm">
                                                  <div className="productFormLeft">
                                                            <label htmlFor="list">List Title</label>
                                                            <input id="list" type="text" placeholder={list.title} />

                                                            <label htmlFor="year">Year</label>
                                                            <input id="year" type="text" placeholder={list.year} />

                                                            <label htmlFor="genre">Genre</label>
                                                            <input id="genre" type="text" placeholder={list.genre} />

                                                  </div>

                                                  <div className="productFormRight">
                                                            <button className="productButton"> Update </button>
                                                  </div>
                                        </form>
                              </div>
                    </div>
          )
}
