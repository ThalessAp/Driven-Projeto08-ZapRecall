import LogoImg from "./assets/img/logo.png";
import LogoPeq from "./assets/img/logo-pequeno.png";


export default function Init(init, setInit, ToogleInit) {

	if (init) {
		return (
			<>
				<div className="init">
					<div className="init-logo">
						<img src={LogoImg} alt="logo" />
					</div>

					<div className="init-title">
						<h1>ZapRecall</h1>
					</div>

					<button className="button" onClick={() => ToogleInit(setInit)}>
						<h3>Iniciar Recall!</h3>
					</button>
				</div>
			</>
		);
	} else {
    return <>
			{console.log("Foi")}
			<span>
			<img src={LogoPeq} alt="logopeq" />
				<h1>
					ZapRecall
				</h1>
			</span>
    </>;
	}
}
