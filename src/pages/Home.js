import React from "react";
import "./Home.css";

import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import TitleAndDescription from "../components/TitleAndDescription";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
	return (
		<div className="home-page">
			<Hero />
			<Carousel />
			<TitleAndDescription />
			<Features />
			<Footer />

		</div>
	);
}

export default Home;
