import { useParams } from "react-router";
import projects from "./Projects";

function ProjectPage() {
	const { slug } = useParams();
	const project = projects[slug];

	if (!project) {
		return <p>Project not found</p>;
	}

	return (
		<div className="project_page">
			<div style={{ display: "flex", flexDirection: "column" }}>
				{project.media.map((m, i) => {
					if (m.endsWith(".mp4")) {
						return <video key={i} controls src={m} />;
					} else {
						return <img key={i} src={m} />;
					}
				})}
			</div>
			<div style={{ flex: 1, marginLeft: "20px", minWidth: "50%" }}>
				<h3 style={{ marginLeft: "0", marginRight: "0" }}>{project.name}</h3>
				<h3 style={{ marginLeft: "0", marginRight: "0" }}>
					<span style={{ display: "inline-block", maxWidth: "400px" }}>
						{project.description}
					</span>
				</h3>
				<h3 style={{ marginLeft: "0", marginRight: "0" }}>
					{project.links.map((l, i) => (
						<>
							<a
								key={i}
								href={l.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{l.name}
							</a>
							<br />
						</>
					))}
				</h3>
			</div>
		</div>
	);
}

export default ProjectPage;
