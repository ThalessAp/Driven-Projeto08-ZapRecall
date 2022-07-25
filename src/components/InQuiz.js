import Question from './Question';
import Decks from './Decks';


export default function InQuiz({hide, setHide, Toogle})  { 
    let deck = Decks;
    let stateParameters = {hide , setHide, Toogle};
    return (
        <>
            {console.log("teste01")}
            <Deck title={deck.title} questions={deck.questions} stateParameters={stateParameters} />
        </>
    )
}

function Deck(title, questions, stateParameters) {
    return <>
        {console.log("teste")}
        <h3>{title}</h3>
        {questions.map((q, index) =>
            <Question 
                key={index} Q={q.Q} R={q.R}
                stateParameters={stateParameters}
            />
        )}
    </>;
}
