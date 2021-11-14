import "./newList.css"

import { useEffect, useContext, useState } from "react"

import { getMovies } from "../../context/movieContext/apiCalls"
import { MovieContext } from "../../context/movieContext/MovieContext"

import { ListContext } from "../../context/listContext/ListContext"
import { createLists } from "../../context/listContext/apiCalls"

import { useHistory } from "react-router"


export default function NewList() {
          const [list, setList] = useState(null)
          const history = useHistory()

          const { dispatch } = useContext(ListContext)
          const { movies, dispatch: dispatchMovie} = useContext(MovieContext )

          useEffect(() => {
                    getMovies(dispatchMovie)
          }, [dispatchMovie])

          const handleChange = (e) => {
                    const value = e.target.value

                    setList(
                              {
                                        ...list, 
                                        [e.target.name]: value
                              }
                    )
          }

          const handleSelect =(e) => {
                    let value =  Array.from(e.target.selectedOptions, 
                              (option) => option.value
                    )

                    setList(
                              {
                                        ...list,
                                        [e.target.name]: value
                              }
                    )
          }

          const handleSubmit = (e) => {
                    e.preventDefault()

                    createLists(list, dispatch)

                    history.push("/lists")
          }

 
          return (
                    <div className="newProduct">
                              <h1 className="addProductTitle">New List</h1>

                              <form className="addProductForm">
                                        <div className="formLeft">
                                                  <div className="addProductItem">
                                                            <label htmlFor="title">Title</label>
                                                            <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange} />
                                                  </div>

                                                  <div className="addProductItem">
                                                            <label htmlFor="genre">Genre</label>
                                                            <input type="text" placeholder="Action" name="genre" onChange={handleChange} />
                                                  </div>

                                                  <div className="addProductItem">
                                                            <label htmlFor="type">Type</label>
                                                            <select id="type" name="title" onChange={handleChange}>
                                                                      <option>Type</option>
                                                                      <option value="movie">Movie</option>
                                                                      <option value="series">Series</option>
                                                            </select>
                                                  </div>
                                        </div>


                                        <div className="formRight">
                                                  <div className="addProductItem">
                                                            <label htmlFor="content">Content</label>
                                                            <select  name="content" multiple onChange={handleSelect} style={{height: "280px"}}>
                                                                      {
                                                                                movies.map(movie => (
                                                                                          <option key={movie._id} value={movie._id}>
                                                                                                    {movie.title}
                                                                                          </option>
                                                                                ))
                                                                      }
                                                            </select>
                                                  </div>
                                        </div>

                                        <button className="addProductButton" onClick={handleSubmit}> Create </button>


                              </form>
                    </div>
          )
}
