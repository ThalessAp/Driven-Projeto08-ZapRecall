import React from "react";
import Init from "./Init";
import Decks from "./Decks";
import InQuiz from "./InQuiz";
import Footer from "./Footer";

export default function Splash() {
	const [init, setInit] = React.useState(false);
	function ToogleInit(initialState) {
		const toggleInit = !initialState;
		setInit(toggleInit);
	}
	const InitVars = {
		init: { init },
		setInit: { setInit },
		Toogle: { ToogleInit },
	};

	const [hidden, setHidden] = React.useState(true);
	function ToogleHidden(hiddenState) {
		const toggleHidden = !hiddenState;
		setHidden(toggleHidden);
	}
	const InQuizVars = {
		hide: { hidden },
		setHide: { setHidden },
		Toogle: { ToogleHidden },
	};

	const { footer, setFooter } = React.useState([]);
	function anwser(anw) {
		const newAnw = [...footer, anw];
		setFooter(newAnw);
	}
	const footerVars = {
		footer: { footer },
		setFooter: { setFooter },
		anwser: { anwser },
	};

	return (
		<>
			<Init Init={InitVars} />
			{/* <Decks /> */}
			<InQuiz InQuiz={InQuizVars} Footer={footerVars} />
			<Footer Footer={footerVars} />
		</>
	);
}
