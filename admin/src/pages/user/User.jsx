import "./user.css"
import { Link } from "react-router-dom"
import {
          CalendarToday,
          LocationSearching,
          MailOutline,
          PermIdentity,
          PhoneAndroid,
          Publish
} from "@material-ui/icons"


export default function User() {


          return (
                    <div className="user">
                              <div className="userTitleContainer">
                                        <h1 className="userTitle">Edit User</h1>

                                        <Link to ="/newUser" >
                                                  <button className="userAddButton">Create</button>
                                        </Link>
                              </div>

                              <div className="userContainer">
                                        <div className="userShow">
                                                  <div className="userShowTop">
                                                            <img 
                                                                      src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                                                      alt="" 
                                                                      className="userShowImg" 
                                                            />

                                                            <div className="userShowTopTitle">
                                                                      <span className="userShowUsername">Anna Becker</span>
                                                                      <span className="userShowUserTitle">Software Engineer</span>
                                                            </div>
                                                  </div>

                                                  <div className="userShowBottom">
                                                            <span className="userShowTitle">Account Details</span>

                                                            <div className="userShowInfo">
                                                                      <PermIdentity className="userShowIcon" />
                                                                      <span className="userShowInfoTitle">annabeck99</span>
                                                            </div>

                                                            <div className="userShowInfo">
                                                                      <CalendarToday className="userShowIcon" />
                                                                      <span className="userShowInfoTitle">1.10.2021</span>
                                                            </div>

                                                            <span className="userShowTitle">Contact Details</span>
                                                            <div className="userShowInfo">
                                                                      <PhoneAndroid className="userShowIcon" />
                                                                      <span className="userShowInfoTitle">+234 8067 4488 47</span>
                                                            </div>

                                                            <div className="userShowInfo">
                                                                      <MailOutline className="userShowIcon" />
                                                                      <span className="userShowInfoTitle">annabeck99</span>
                                                            </div>

                                                            <div className="userShowInfo">
                                                                      <LocationSearching className="userShowIcon" />
                                                                      <span className="userShowInfoTitle">World Address | Remote</span>
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className="userUpdate">
                                                  <span className="userUpdateTitle">Edit</span>

                                                  <form className="userUpdateForm">
                                                            <div className="userUpdateLeft">
                                                                      <div className="userUpdateItem">
                                                                                <label htmlFor="username">Username</label>

                                                                                <input 
                                                                                          type="text" 
                                                                                          placeholder="annabeck99"
                                                                                          className="userUpdateInput"
                                                                                          id="username"
                                                                                />
                                                                      </div>

                                                                      <div className="userUpdateItem">
                                                                                <label htmlFor="fullname">Full Name</label>

                                                                                <input 
                                                                                          type="text" 
                                                                                          placeholder="Anna Becker"
                                                                                          className="userUpdateInput"
                                                                                          id="fullname"
                                                                                />
                                                                      </div>

                                                                      <div className="userUpdateItem">
                                                                                <label htmlFor="email">Email</label>

                                                                                <input 
                                                                                          type="email" 
                                                                                          placeholder="annabeck99@gmail.com"
                                                                                          className="userUpdateInput"
                                                                                          id="email"
                                                                                />
                                                                      </div>

                                                                      <div className="userUpdateItem">
                                                                                <label htmlFor="phone">Phone</label>

                                                                                <input 
                                                                                          type="text" 
                                                                                          placeholder="+234 8067 4488 47"
                                                                                          className="userUpdateInput"
                                                                                          id="phone"
                                                                                />
                                                                      </div>

                                                                      <div className="userUpdateItem">
                                                                                <label htmlFor="address">Address</label>

                                                                                <input 
                                                                                          type="text" 
                                                                                          placeholder="World Address | Remote"
                                                                                          className="userUpdateInput"
                                                                                          id="address"
                                                                                />
                                                                      </div>                                                                             
                                                            </div>

                                                            <div className="userUpdateRight">
                                                                      <div className="userUpdateUpload">
                                                                                <img 
                                                                                          src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                                                                          alt="" 
                                                                                          className="userUpdateImg" 
                                                                                />

                                                                                <label htmlFor="file"> 
                                                                                          <Publish className="userUpdateIcon" />
                                                                                </label>

                                                                                <input type="file" id="file" style={{display: "none"}} />
                                                                      </div>

                                                                      <button className="userUpdateButton">Update</button>
                                                            </div>
                                                  </form>
                                        </div>
                              </div>
                    </div>
          )
}
