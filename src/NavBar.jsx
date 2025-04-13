import { NavLink } from "react-router";

function MyLink({ to, end, children }) {
	return (
		<NavLink to={to} end={end}>
			{function ({ isActive }) {
				return (
					<>
						{children}
						{isActive && (
							<span style={{ fontStyle: "italic" }}> (you are here)</span>
						)}
					</>
				);
			}}
		</NavLink>
	);
}

function NavBar() {
	return (
		<nav>
			<MyLink to="/" end>
				Home
			</MyLink>
			<MyLink to="/about" end>
				About
			</MyLink>
			<MyLink to="/projects">Featured Projects</MyLink>
			<MyLink to="/contact" end>
				Contact
			</MyLink>
		</nav>
	);
}

export default NavBar;
