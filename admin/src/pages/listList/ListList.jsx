import "./listList.css"
import { Link } from "react-router-dom"

import { useEffect, useContext } from "react"

import { DeleteOutline } from "@material-ui/icons"
import { DataGrid } from "@material-ui/data-grid"

import { ListContext } from "../../context/listContext/ListContext"
import { deleteLists, getLists } from "../../context/listContext/apiCalls"


export default function ListList() {
          const { lists, dispatch } = useContext(ListContext )

          useEffect(() => {
                    getLists(dispatch)
          }, [dispatch])



          const handleDelete = (id) => {
                    // setData(data.filter(item => item.id !== id))
                    deleteLists(id, dispatch)
          }

          const columns = [
                    {
                              field: "_id",
                              headerName: "ID",
                              width: 250
                    },

                    { field: "title", headerName: "Title", width: 250 },

                    { field: "genre", headerName: "Genre", width: 150 },

                    { field: "type", headerName: "type", width: 150, },

                    {
                              field: "action",
                              headerName: "Action",
                              width: 150,

                              renderCell: (params) => {
                                        return (
                                                  <>
                                                            <Link to={
                                                                      { pathname: "/list/" + params.row._id, 
                                                                      list: params.row
                                                                      } 
                                                            }>
                                                                      <button className="productListEdit">Edit</button>
                                                            </Link>

                                                            <DeleteOutline
                                                                      className="productListDelete"
                                                                      onClick = {
                                                                                () => handleDelete(params.row._id)
                                                                      }
                                                            />
                                                  </>
                                        )
                              }
                    }

          ]


          return (
                    <div className="productList">
                              <DataGrid 
                                        rows = {lists}
                                        disableSelectionOnClick
                                        columns={columns}
                                        pageSize={5}
                                        checkboxSelection
                                        getRowId= {(r) => r._id}
                              />
                    </div>
          )
}
