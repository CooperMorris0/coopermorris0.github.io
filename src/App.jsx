import "./App.css";
import { HashRouter, Route, Routes, useLocation } from "react-router";
import Home from "./Home";
import Special from "./Special";
import About from "./About";
import Contact from "./Contact";
import Trailer from "./Trailer";
import NameBadge from "./NameBadge";
import NavBar from "./NavBar";
import ProjectsListPage from "./ProjectsListPage";
import ProjectPage from "./ProjectPage";
import { useEffect } from "react";

function ScrollToTop() {
	const location = useLocation();

	useEffect(
		function () {
			window.scrollTo(0, 0);
		},
		[location]
	);

	return null;
}

function App() {
	return (
		<HashRouter>
			<ScrollToTop />
			<Trailer />
			<NameBadge />
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<ProjectsListPage />} />
				<Route path="/projects/:slug" element={<ProjectPage />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/special" element={<Special />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
