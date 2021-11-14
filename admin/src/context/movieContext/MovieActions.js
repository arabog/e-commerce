// create
export const createMovieStart = () => (
          {
                    type: "CREATE_MOVIE_START",
          }
)

export const createMovieSuccess = (movie) => (
          {
                    type: "CREATE_MOVIE_SUCCESS",
                    payload: movie
          }
)

export const createMovieFailure = () => (
          {
                    type: "CREATE_MOVIE_FAILURE"
          }
)


// read
export const getMovieStart = () => (
          {
                    type: "GET_MOVIE_START"
          }
)

export const getMovieSuccess = (movie) => (
          {
                    type: "GET_MOVIE_SUCCESS",
                    payload: movie
          }
)

export const getMovieFailure = () => (
          {
                    type: "GET_MOVIE_FAILURE"
          }
)


// update
export const updateMovieStart = () => (
          {
                    type: "UPDATE_MOVIE_START"
          }
)

export const updateMovieSuccess = (movie) => (
          {
                    type: "UPDATE_MOVIE_SUCCESS",
                    payload: movie
          }
)

export const updateMovieFailure = () => (
          {
                    type: "UPDATE_MOVIE_FAILURE"
          }
)


// del
export const deleteMovieStart = () => (
          {
                    type: "DELETE_MOVIE_START"
          }
)

export const deleteMovieSuccess = (id) => (
          {
                    type: "DELETE_MOVIE_SUCCESS",
                    payload: id,
          }
)

export const deleteMovieFailure = () => (
          {
                    type: "DELETE_MOVIE_FAILURE"
          }
)