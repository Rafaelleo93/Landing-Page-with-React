import React from "react";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx"
import Jumbotron from "./Main.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
	<div>
		<header>
			<Navbar/>
		</header>
		<main className="container">
			<Jumbotron/>
			<Cards/>
		</main>
		<footer className="container">
			<Footer/>
		</footer>
	</div>
  )
}

export default Home;


