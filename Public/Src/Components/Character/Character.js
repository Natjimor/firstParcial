class Character extends HTMLElement {
    Name = "${this.characterName}"

    static get observedAttributes(){
        return ["name", "alternativename1", "alternativename2", "species", "gender", "house", "yearofbirth"]
    }

    attributeChangedCallback(propName,_,newValue){
        switch (propName) {
            case "name":
                this.characterName = newValue
                break;

            case "alternativename1":
                this.characterAlternative1 = newValue
                break;

            case "alternativename2":
                this.characterAlternative2 = newValue
                break;

            case "species":
                this.characterSpecies = newValue
                break;

            case "gender":
                this.characterGender = newValue
                break;

            case "house":
                this.characterHouse = newValue
                break;

            case "yearofbirth":
                this.characterYearBrith = newValue
                break;

            default:
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.mount();
    }

    mount(){
        this.render();
        const button = this.shadowRoot.querySelector("button");
        button.addEventListener("click",() => {
            console.log("mjgmjgmjgmj");
            if (this.Name === "${this.characterName}") {
                this.Name = "${this.characterAlternative1}"
            } 
            if (this.Name === "${this.characterAlternative1}") {
                this.Name = "${this.characterAlternative2}"
            }
            if (this.Name === "${this.characterAlternative2}") {
                this.Name = "${this.characterName}"
            }
            this.mount()
        })
    }

    render(){
        this.shadowRoot.innerHTML = `
        <section>
        <h1> Name: ${this.characterName}</h1>
        <p> Specie: ${this.characterSpecies}</p>
        <p> Gender: ${this.characterGender}</p>
        <p> House: ${this.characterHouse}</p>
        <p> Year of Birth: ${this.characterYearBrith}</p>
        <p> Alternative name: ${this.Name}</p>
        <button> Change </button>
        </section>
        `
    }
}

customElements.define("app-character",Character);
export default Character;