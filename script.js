function pageLoad() {
	
	/*
	// 1. Szintaxisok pontos alkalmazása

	// 2. Változók hatóköre

	// 3. Ha SCSS-t használok, akkor mindig indítsam el a Watch SASS-t.

	 HTML:
	1.	<label for="name"></label>
			<input type="text" id="name">
	2. Rengeteg féle elem (tag name) miatt lehet, hogy nem a legjobbat használom.
	3. 

	CSS:
	1.	positions
	2.	CSS combinator-ok használata
	3.	font-size: ...rem
	*/

	let notes = [];

	notes = [{
		tag: "div",
		content: "Függvények használata paraméterekkel.",
		code: `function myFunction(a, b, c, ...) {
						A függvénybe érkező paramétereket a függvényben a, b, c, ... nevű változóként tudom felhasználni.
					}
					`
		},
		
		{
			tag: "div",
			content: "Függvények használata.",
			code: `function myFunction(sg) {
							let myDiv = document.createElement("div");
							myDiv.innerHTML = sg;
							document.root.appendChild(myDiv);
						}
						`
		},

		{
			tag: "div",
			content: "A for ciklus.",
			code: `for (let index = 0; index < array.length; index++) {
							const element = array[index];
							...
						`
		}
	];
	
	for (note of notes) {
		let icode = note.code;
		for (let i = 0; i < icode.length; i++) {
			icode = icode.replace("	", " ");
			icode = icode.replace("  ", " ");
		}
		root.insertAdjacentHTML("beforeend", `<${note.tag}>${note.content}<br><pre><code>${icode}</code></pre><br></${note.tag}>`);
	}

	document.querySelectorAll("pre code").forEach((block) => {
		hljs.highlightBlock(block);
	});

}

window.addEventListener("load", pageLoad);