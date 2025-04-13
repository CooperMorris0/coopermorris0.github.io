import { Link } from "react-router";
import projects from "./Projects";

function ProjectCard({ name, img, i }) {
	return (
		<Link to={"/projects/" + i}>
			<div className="project_card">
				<img src={img} />
				<h2>{name}</h2>
			</div>
		</Link>
	);
}

function ProjectsListPage() {
	return (
		<>
			<h1 className="page_title">Featured Projects</h1>
			<div className="projects_container">
				{projects.map((p, i) => (
					<ProjectCard key={i} name={p.name} img={p.media[0]} i={i} />
				))}
			</div>
		</>
	);
}

export default ProjectsListPage;
