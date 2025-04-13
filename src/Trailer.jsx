import { useEffect, useRef } from "react";

function Trailer() {
	const trailerRef = useRef(null);

	useEffect(function () {
		const trailer = trailerRef.current;

		function handleMouseMove(e) {
			const x = e.clientX - trailer.offsetHeight / 2;
			const y = e.clientY - trailer.offsetHeight / 2;

			const keyframes = {
				transform: `translate(${x}px, ${y}px)`,
			};

			trailer.animate(keyframes, {
				duration: 800,
				fill: "forwards",
				easing: "ease-out",
			});
		}

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return <div ref={trailerRef} id="trailer"></div>;
}

export default Trailer;
