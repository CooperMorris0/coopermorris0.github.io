function About() {
	return (
		<>
			<h1 className="page_title">About Me</h1>
			<h3>
				<span style={{ display: "inline-block", maxWidth: "850px" }}>
					Hello! I'm Cooper Morris. I'm a programmer from California. I love
					problem solving, and always enjoy learning something new about math or
					science. You can view some projects I'm proud of or contact me by via
					the links in the nav bar, or check out some of my skills below.
				</span>
			</h3>
			<ul className="text_holder">
				<li>
					JavaScript (and TypeScript)
					<ul>
						<li>React - used to make this website!</li>
						<li>ExpressJS</li>
						<li>SocketIO</li>
						<li>DiscordJS</li>
					</ul>
				</li>
				<li>
					Rust
					<ul>
						<li>Tokio (Async)</li>
						<li>Bevy</li>
						<li>
							<a
								href="https://valence.rs/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Valence
							</a>
						</li>
					</ul>
				</li>
				<li>Java</li>
				<li>Kotlin</li>
				<li>C</li>
				<li>C# (Unity Game Engine)</li>
				<li>Haskell</li>
				<li>HTML, CSS, JS</li>
				<li>GDScript (Godot Game Engine)</li>
				<li>
					Math
					<ul>
						<li>Algebra</li>
						<li>Basics of Trigonometry, Linear Algebra and Calculus</li>
					</ul>
				</li>
			</ul>
		</>
	);
}

export default About;
