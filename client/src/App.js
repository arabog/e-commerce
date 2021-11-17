import Home from './pages/Home';

import Cart from "./pages/Cart";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Success from "./pages/Success";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom"


function App() {
	const user = true;


	return (
		<Router>

			<Switch>
				<Route exact path="/" >
					<Home />
				</Route>

				<Route path="/products/:category">
					<ProductList />
				</Route>

				<Route path="/product/:id">
					<Product /> 
				</Route>

				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>

				<Route path="/login">
					{user ? <Redirect to="/" /> : <Login />}
				</Route>

				<Route path="/success">
					<Success />
				</Route>

				<Route path="/cart">
					<Cart />
				</Route>


			</Switch>
		</Router>
	);
}


export default App;
