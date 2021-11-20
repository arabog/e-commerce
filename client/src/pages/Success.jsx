// import { useLocation } from "react-router"


const Success = () => {
          // const location = useLocation()


          
          return (
                    <div
                              style={
                                        {
                                                  height: "100vh",
                                                  display: "flex",
                                                  flexDirection: "column",
                                                  alignItem: "center",
                                                  justifyContent: "center"
                                        }
                              }
                    >
                              Successful. Your order is being prepared....

                              <button
                                        style={
                                                  {
                                                            padding: 10,
                                                            marginTop: 20
                                                  }
                                        }
                              >
                                        Go to Homepage
                              </button>
                    </div>
          )
}

export default Success
