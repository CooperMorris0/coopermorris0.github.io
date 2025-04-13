export default [
	{
		name: "Portfolio Website",
		media: ["./portfolio_website_homepage.png"],
		description:
			"This portfolio website was created entirely by myself, no template :) . It uses React and Vite and was my first learning experience of React. I had a lot of fun making it, especially the circular button in the corner, my first ever React component.",
		links: [],
	},
	{
		name: "Pathfinding Bots",
		media: [
			"./path_finding_image.png",
			"path_finding_demo.mp4",
			"nextbot_demo.mp4",
		],
		description:
			"In this project I implemented a pathfinding algorithm in Rust and used it with Valence.rs to create bots that chase you in Minecraft for me and my friends to play with. This project taught me a lot about memory management in Rust as the original algorithm didn't take into account Rust's strict Borrow Checker, requiring me to learn about Reference Counting pointers, threads, etc.",
		links: [],
	},
	{
		name: "Particle Life",
		description:
			"In this project I implemented Particle Life in Rust first with Bevy and then with Valence in Minecraft. Particle Life is a particle system where you control how much each particle is attracted or repelled from each other, and it's a great example of emergence, a topic I find very interesting from both a scientific and philosophical point of view. I based my implementation off of the math provided in the reference video.",
		media: [
			"particle_life_image.png",
			"particle_life_demo.mp4",
			"particle_life_mc_demo_1.mp4",
			"particle_life_mc_demo_2.mp4",
		],
		links: [
			{
				name: "Minecraft Version Github",
				link: "https://github.com/NotThatRqd/valence_particle_life",
			},
			{
				name: "Reference Youtube Video",
				link: "https://www.youtube.com/watch?v=p4YirERTVF0",
			},
		],
	},
	{
		name: "BTNify",
		description:
			"Btnify is a small library that lets you host a website with some buttons that will run code on the server when clicked. This library is pretty simple, but it works, and it's open source! I created this project originally because I wished there was a simple way for me to set up a website with a button that, when clicked, would start running a Minecraft server on my computer for my friends to join, so that they would not have to ask me to start it. This project was a massive learning process for me, and by the end I had learnt async rust, how to upload your own crate to crates.io, how to write documentation for your rust library, and so much more.",
		media: [
			"btnify_image.png",
			"btnify_demo.mp4",
			"btnify_readme_snip.png",
			"btnify_docs_snip.png",
		],
		links: [
			{
				name: "Github",
				link: "https://github.com/NotThatRqd/btnify",
			},
			{
				name: "crates.io",
				link: "https://crates.io/crates/btnify",
			},
			{
				name: "Documentation",
				link: "https://docs.rs/btnify/latest/btnify/",
			},
		],
	},
	{
		name: "mayo_vm",
		description:
			"MayoVM (mayo_vm) is a 16 bit fantasy virtual machine written in Rust. It's a toy project that is based on a Youtube series by Low Byte Productions that goes over the same topics in Javascript. This project was incredibly fascinating to work on and taught me all about low level parts of computers and memory, such as big vs little endian, cpu instructions, etc.",
		media: ["mayo_vm_image.png", "mayo_vm_demo.mp4"],
		links: [
			{
				name: "Github",
				link: "https://github.com/NotThatRqd/mayo_vm",
			},
			{
				name: "Reference videos",
				link: "https://www.youtube.com/playlist?list=PLP29wDx6QmW5DdwpdwHCRJsEubS5NrQ9b",
			},
		],
	},
	{
		name: "Ascii Sierpinski Triangle",
		description:
			"Haskell program that lets you generate ascii art of arbitrarily large Sierpinski triangles. One of the first Haskell programs that I feel I was able to truly switch mindsets from imperative to functional programming, finding a clean functional approach to the problem when writing.",
		media: ["ascii_triangle.png"],
		links: [
			{
				name: "Github",
				link: "https://github.com/NotThatRqd/ascii_sierpinski_triangle",
			},
		],
	},
];
