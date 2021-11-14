const MovieReducer = (state, action) => {
          switch(action.type) {
                    // create
                    case "CREATE_MOVIE_START":
                              return {
                                        ...state,
                                        isFetching: true,
                                        error: false,
                              }

                    case "CREATE_MOVIE_SUCCESS":
                                        return {
                                                  movies: [
                                                            ...state.movies, 
                                                            action.payload
                                                  ],
                                                  isFetching: false,
                                                  error: false,
                                        }

                    case "CREATE_MOVIE_FAILURE":
                              return {
                                        ...state,
                                        isFetching: false,
                                        error: true,
                              }


                    // read
                    case "GET_MOVIE_START":
                              return {
                                        movies: [],
                                        isFetching: true,
                                        error: false
                              }

                    case "GET_MOVIE_SUCCESS":
                              return {
                                        movies: action.payload,
                                        isFetching: false,
                                        error: false
                              }

                    case "GET_MOVIE_FAILURE":
                              return {
                                        movies: [],
                                        isFetching: false,
                                        error: true
                              }


                    // update
                    case "UPLOAD_MOVIE_START":
                              return {
                                        ...state,
                                        isFetching: true,
                                        error: false
                              }

                    case "UPLOAD_MOVIE_SUCCESS":
                              return {
                                        movies: state.movies.map(
                                                  movie => movie._id === action.payload._id && action.payload
                                        ),
                                        isFetching: false,
                                        error: false
                              }

                    case "UPLOAD_MOVIE_FAILURE":
                              return {
                                        ...state,
                                        isFetching: false,
                                        error: true
                              }


                    // delete
                    case "DELETE_MOVIE_START":
                              return {
                                        ...state,
                                        isFetching: true,
                                        error: false
                              }

                    case "DELETE_MOVIE_SUCCESS":
                              return {
                                        movies: state.movies.filter(
                                                  movie => movie._id !== action.payload
                                        ),
                                        isFetching: false,
                                        error: false
                              }

                    case "DELETE_MOVIE_FAILURE":
                              return {
                                        ...state,
                                        isFetching: false,
                                        error: true
                              }


                    default: 
                              return {
                                        ...state
                              }
          }
}


export default MovieReducer