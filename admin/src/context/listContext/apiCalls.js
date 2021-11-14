import axios from "axios"
import {
          createListsStart,
          createListsSuccess,
          createListsFailure,

          getListsStart,
          getListsSuccess,
          getListsFailure,

          deleteListStart,
          deleteListSuccess,
          deleteListFailure
} from "./ListActions"


// create
export const createLists = async (list, dispatch) => {
          dispatch(createListsStart())

          try {
                    const res = await axios.post("/lists", list, 
                    `         {
                                        headers: {
                                                  token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                                        }
                              }`
                    )

                    dispatch(createListsSuccess(res.data))
          } catch (err) {
                    dispatch(createListsFailure())
          }
}


// read
export const getLists = async (dispatch) => {
          dispatch(getListsStart())

          try {
                    const res = await axios.get("/lists", 
                              {
                                        headers: {
                                                            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                                                  }
                              }
                    )

                    dispatch(getListsSuccess(res.data))
          } catch (err) {
                    dispatch(getListsFailure())
          }
}


// delete
export const deleteLists = async (id, dispatch) => {
          dispatch(deleteListStart())

          try {
                    await axios.delete("/lists/" + id, 
                              {
                                        headers: {
                                                  token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                                        }
                              }
                    )

                    dispatch(deleteListSuccess(id))
          } catch (err) {
                    dispatch(deleteListFailure())
          }
}