import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from "react"
import axios from "axios"


export default function WidgetSm() {
          const [newUsers, setNewUsers] = useState([])


          useEffect(() => {
                    const getNewUsers = async () => {
                              try {
                                        const res = await axios.get("/users?new=true", 
                                                  {
                                                            headers: {
                                                                      token:
                                                                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjIwN2MxMDM1ZGJlMzdlYjQxNGEzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzkwMzgzNiwiZXhwIjoxNjM0MzM1ODM2fQ.SKgVfHlwmoGaMONNisAhExf0Pj_KHZ-rmipkD5qmcZw"
                                                            }
                                                  }
                                        )

                                        setNewUsers(res.data)

                              } catch (err) {
                                        console.log(err)
                              }
                    }

                    getNewUsers()
          }, [])
          

          return (
                    <div className="widgetSm">
                              <span className="widgetSmTitle">New Join Members</span>

                              <ul className="widgetSmList">
                                        {
                                                  newUsers.map(user => (
                                                            <li className="widgetSmListItem">
                                                                      <img 
                                                                                src={
                                                                                          user.profilePic ||
                                                                                          "https://image.shutterstock.com/image-vector/hand-drawn-modern-man-avatar-260nw-1373616869.jpg"
                                                                                }
                                                                                alt="" 
                                                                                className="widgetSmImg" 
                                                                      />

                                                                      <div className="widgetSmUser">
                                                                                <span className="widgetSmUsername"> {user.username} </span>
                                                                      </div>

                                                                      <button className="widgetSmButton">
                                                                                <Visibility className="widgetSmIcon" />
                                                                                Display
                                                                      </button>
                                                            </li>
                                                  ))
                                        }
                              </ul>
                    </div>
          )
}
