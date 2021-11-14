import "./newMovie.css"
import { useContext, useState } from "react"

import { MovieContext } from "../../context/movieContext/MovieContext"
import { createMovie } from "../../context/movieContext/apiCalls"

import storage from "../../firebase"


export default function NewMovie() {
          const [movie, setMovie ] = useState(null)

          const [img, setImg] = useState(null)
          const [imgTitle, setImgTitle ] = useState(null)
          const [imgSm, setImgSm ] = useState(null)
          const [trailer, setTrailer ] = useState(null)
          const [video, setVideo ] = useState(null)
          
          const [uploaded, setUploaded ] = useState(0)

          const { dispatch } = useContext(MovieContext )

          const handleChange = (e) => {
                    const value = e.target.value;

                    setMovie(
                              {
                                        ...movie,
                                        [e.target.name]:value
                              }
                    )
          }

          // https://firebase.google.com/docs/storage/web/upload-files
          const upload = (items) => {

                    items.forEach(item => {
                              const fileName = new Date().getTime() + item.label + item.file.name

                              const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)

                              // upload progress in %
                              uploadTask.on(
                                        "state_changed",
                                        (snapshot) => {
                                                  const progress = 
                                                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

                                                            console.log("Upload is " + progress + "% done");
                                        },

                                        (error) => {
                                                  console.log(error);
                                        },

                                        () => {
                                                  uploadTask.snapshot.ref.getDownloadURL().then(
                                                            url => {
                                                                      setMovie(prev => {
                                                                                return {
                                                                                          ...prev,
                                                                                          [item.label]: url
                                                                                }
                                                                      })

                                                                      setUploaded(prev => prev + 1)
                                                            }
                                                  )
                                        }
                              )
                    })
          }

          const handleUpload = (e) => {
                    e.preventDefault()

                    upload(
                              [
                                        {file: img, label: "img"},
                                        {file: imgTitle, label: "imgTitle"},
                                        {file: imgSm, label: "imgSm"},
                                        {file: trailer, label: "trailer"},
                                        {file: video, label: "video"},
                              ]
                    )
          }

          const handleSubmit = (e) => {
                    e.preventDefault()

                    createMovie(movie, dispatch)
          }
          
          return (
                    <div className="newProduct">
                              <h1 className="addProductTitle">New Movie</h1>

                              <form className="addProductForm">
                                        <div className="addProductItem">
                                                  <label htmlFor="img">Image</label>
                                                  <input type="file" onChange={e => setImg(e.target.files[0])}  id="img"  name="img" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor=" imgTitle">Title Image</label>
                                                  <input type="file" onChange={e => setImgTitle(e.target.files[0])}  id="imgTitle" name="imgTitle" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="imgSm">Thumbnail Image</label>
                                                  <input type="file" onChange={e => setImgSm(e.target.files[0])}  id="imgSm"  name="imgSm" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="title">Title</label>
                                                  <input type="text" onChange={handleChange}  id="title"  name="title" placeholder="John Wick" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="desc">Description</label>
                                                  <input type="text" onChange={handleChange}  id="desc" name="desc" placeholder="Description" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="year">Year</label>
                                                  <input type="text" onChange={handleChange}  id="year" name="year" placeholder="Year" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="genre">Genre</label>
                                                  <input type="text" onChange={handleChange}  id="genre" name="genre" placeholder="Genre" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="duration">Duration</label>
                                                  <input type="text" onChange={handleChange}  id="duration" name="duration" placeholder="Duration" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="limit">Limit</label>
                                                  <input type="text" onChange={handleChange}  id="limit" name="limit" placeholder="Limit" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="isSeries">Is Series</label>
                                                  <select id="isSeries" name="isSeries" >
                                                            <option value="false"> No </option>
                                                            <option value="true"> Yes </option>
                                                  </select>
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="trailer">Trailer</label>
                                                  <input type="file" onChange={e => setTrailer(e.target.files[0])}  id="trailer" name="trailer" />
                                        </div>

                                        <div className="addProductItem">
                                                  <label htmlFor="video">Video</label>
                                                  <input type="file" onChange={e => setVideo(e.target.files[0])}  id="video" name="video" />
                                        </div>

                                        {
                                                  uploaded === 5 ? (
                                                            <button className="addProductButton" onClick={handleSubmit} >Create</button>
                                                  ) : (
                                                            <button className="addProductButton" onClick={handleUpload}>Upload</button>
                                                  )

                                        }
                              </form>
                    </div>
          )
}
