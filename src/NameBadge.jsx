import { useRef, useState } from "react";

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // 0 ≤ j ≤ i
		[array[i], array[j]] = [array[j], array[i]]; // swap
	}
	return array;
}

function NameBadge() {
	const [specialText, setSpecialText] = useState("Hover me...");
	const hasHovered = useRef(false);

	const specialTexts = useRef(
		shuffle([
			"Hello, World!",
			"Hey, mom!",
			"Mimosa & Espresso",
			"fn main() {}",
			"λx.x",
			"map :: (a->b) -> [a] -> [b]",
			"map f [] = []",
			"map f (x:xs) = f x : map f xs",
			"A monad is a monoid in the category of endofunctions.",
			"Java is cool",
			"Hyper-text markup language!",
			"Now in 4k resolution",
			"Click me..?",
		])
	);
	const specialTextsIndex = useRef(0);

	function HandleMouseEnter() {
		if (!hasHovered.current) {
			setSpecialText("Wow!!\nAgain!");
			hasHovered.current = true;
		} else {
			setSpecialText(specialTexts.current[specialTextsIndex.current]);
			specialTextsIndex.current += 1;
			if (specialTextsIndex.current >= specialTexts.current.length) {
				specialTextsIndex.current = 0;
				specialTexts.current = shuffle(specialTexts.current);
			}
		}
	}

	const sounds = [
		new Audio("click1.mp3"),
		new Audio("click2.mp3"),
		new Audio("click3.mp3"),
	];

	function Click() {
		// I am aware this is janky and I don't care
		document.body.style.backgroundPositionX =
			Math.floor(Math.random() * 800) + "px";
		document.body.style.backgroundPositionY =
			Math.floor(Math.random() * 533) + "px";

		sounds[Math.floor(Math.random() * sounds.length)].play();
	}

	return (
		<>
			<button
				className="name_badge"
				onMouseEnter={HandleMouseEnter}
				onClick={Click}
			>
				<img
					className="badge_text_wheel no_drag"
					src="/badge_text.svg"
					alt="<dev> Cooper A. Morris </dev>"
				/>
				<h6 className="badge_text" style={{ color: "white" }}>
					{specialText}
				</h6>
			</button>
		</>
	);
}

export default NameBadge;
