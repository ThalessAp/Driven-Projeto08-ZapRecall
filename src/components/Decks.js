export default function Decks() {
	const decks = [
		{
			title: "Deck 1",
			questions: [
				{
					Q: "O que é JSX?",
					R: "Uma extensão de linguagem do JavaScript 2.",
				},
				{
					Q: "O React é __",
					R: "uma biblioteca JavaScript para construção de interfaces",
				},
				{
					Q: "Componentes devem iniciar com __",
					R: "letra maiúscula",
				},
				{
					Q: "Podemos colocar __ dentro do JSX",
					R: "expressões",
				},
				{
					Q: "O ReactDOM nos ajuda __",
					R: "interagindo com a DOM para colocar componentes React na mesma",
				},
				{
					Q: "Usamos o npm para __",
					R: "gerenciar os pacotes necessários e suas dependências",
				},
				{
					Q: "Usamos props para __",
					R: "passar diferentes informações para componentes",
				},
				{
					Q: "Usamos estado (state) para __",
					R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
				},
			],
		},
		{
			title: "Deck 2",
			questions: [
				{
					Q: "O que é JSX?",
					R: "Uma extensão de linguagem do JavaScript 2.",
				},
				{
					Q: "O React é __",
					R: "uma biblioteca JavaScript para construção de interfaces",
				},
				{
					Q: "Componentes devem iniciar com __",
					R: "letra maiúscula",
				},
				{
					Q: "Podemos colocar __ dentro do JSX",
					R: "expressões",
				},
				{
					Q: "O ReactDOM nos ajuda __",
					R: "interagindo com a DOM para colocar componentes React na mesma",
				},
				{
					Q: "Usamos o npm para __",
					R: "gerenciar os pacotes necessários e suas dependências",
				},
				{
					Q: "Usamos props para __",
					R: "passar diferentes informações para componentes",
				},
				{
					Q: "Usamos estado (state) para __",
					R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
				},
			],
		},
		{
			title: "Deck 3",
			questions: [
				{
					Q: "O que é JSX?",
					R: "Uma extensão de linguagem do JavaScript 2.",
				},
				{
					Q: "O React é __",
					R: "uma biblioteca JavaScript para construção de interfaces",
				},
				{
					Q: "Componentes devem iniciar com __",
					R: "letra maiúscula",
				},
				{
					Q: "Podemos colocar __ dentro do JSX",
					R: "expressões",
				},
				{
					Q: "O ReactDOM nos ajuda __",
					R: "interagindo com a DOM para colocar componentes React na mesma",
				},
				{
					Q: "Usamos o npm para __",
					R: "gerenciar os pacotes necessários e suas dependências",
				},
				{
					Q: "Usamos props para __",
					R: "passar diferentes informações para componentes",
				},
				{
					Q: "Usamos estado (state) para __",
					R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
				},
			],
		},
	];

	return (
		<>
			<h1>Meus Decks</h1>
			{decks.map((deck) => (
				<h2>{deck.title}</h2>
			))}
		</>
	);
}

function Deck() {
	return (
		<>
			
            
		</>
	);
}
