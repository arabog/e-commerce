import './App.css';
import Home from "./pages/home/Home"
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"

import User from "./pages/user/User"
import UserList from "./pages/userList/UserList"
import NewUser from "./pages/newUser/NewUser"
// import Product from "./pages/newList/NewList"
import Movie from "./pages/movie/Movie"
import MovieList from "./pages/movieList/MovieList"
import NewMovie from "./pages/newMovie/NewMovie"
import ListList from "./pages/listList/ListList"
import List from "./pages/list/List"
import NewList from "./pages/newList/NewList"

import Login from './pages/login/Login';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom"

import { useContext } from 'react';
import { AuthContext } from './context/authContext/AuthContext';


function App() {
	const { user } = useContext(AuthContext)


	return (
		<Router>
			<Switch>
				<Route path="/login" >
					{ user ? <Redirect to= "/" /> : <Login /> }
				</Route>


				{
					user && (

						<>
							<Topbar />

							<div className= "container">

								<Sidebar />

								<Route exact path="/" >
									<Home />
								</Route>

								<Route path="/lists" >
									<ListList />
								</Route>

								<Route path="/list/:listId" >
									<List />
								</Route>

								<Route path="/newlist" >
									<NewList />
								</Route>

								<Route path="/users" >
									<UserList />
								</Route>

								<Route path="/user/:userId" >
									<User />
								</Route>

								<Route path="/newuser" >
									<NewUser />
								</Route>

								<Route path="/movies" >
									<MovieList />
								</Route>

								<Route path="/movie/:movieId" >
									<Movie />
								</Route>

								<Route path="/newmovie" >
									<NewMovie/>
								</Route>
							</div>
						</>
					)
				}
			</Switch>
		</Router>
	);
}

export default App;
