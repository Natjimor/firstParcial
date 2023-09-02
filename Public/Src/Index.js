import Character from "./Components/Character/Character.js"
import Data from "./Data.js";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        const Character = Data.map((character) => `
        <app-character name ="${character.name}" 
        alternativename1 = "${character.alternate_names[0]}"
        alternativename2 = "${character.alternate_names[1]}" 
        species = "${character.species}"
        gender = "${character.gender}" 
        house = "${character.house}"
        yearofbirth = "${character.yearOfBirth}"></app-character>`);

        const charactersJoiners = Character.join("");
        this.shadowRoot.innerHTML = `${charactersJoiners}`
    }
}

customElements.define("app-container",AppContainer)