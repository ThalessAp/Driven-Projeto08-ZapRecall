import React from "react";
import {
	IoPlayOutline,
	IoCloseCircle,
	IoCheckmarkCircle,
} from "react-icons/io5";
import{ AiFillQuestionCircle } from "react-icons/ai";
import ArrowBack from "./assets/img/setinha.png";

export default function Question(key, Q, R, { hide, setHide, Toogle }, { footer, setFooter, anwser }) {
	const [ShowQuestion, setShowQuestion] = React.useState(false);

	function ToogleShowQuestion(showQuestion) {
		const toggleShowQuestion = !showQuestion;
		setShowQuestion(toggleShowQuestion);
	}

	return (
		<>
			<div className="question" onClick={Toogle}>
				[ShowQuestion ? (
				<>
					<div
						className="question-text"
						onClick={() => ToogleShowQuestion(ShowQuestion)}>
						<h4> Pergunta {key + 1}</h4>
						<IoPlayOutline />
					</div>
				</>
				):(
				<div onClick={() => Toogle(setHide)}>
					<span>
						<h3>{Q}</h3>
						<img src={ArrowBack} alt="setinha" />
					</span>
				</div>
				)] [ hide ? (
				<div className="hidden">
					<p>{R}</p>

					<div className="Options">
						<div className="Op01" onClick={() => anwser(<IoCloseCircle />)}>
							Não Lembrei
						</div>
						<div className="Op02" onClick={() => anwser(<AiFillQuestionCircle />)}>
							Quase não lembrei
						</div>
						<div className="Op03" onClick={() => anwser(<IoCheckmarkCircle />)}>
							Zap!!
						</div>
					</div>
				</div>
				):(
				<></>) ]
			</div>
		</>
	);
}
