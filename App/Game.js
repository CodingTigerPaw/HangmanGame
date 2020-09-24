class Game {
    constructor({
        letterWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper
    }){
        this.letterWrapper = letterWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper

        const {text , category} = this.quotes[Math.floor(Math.random() * this.quotes.length)]
        this.categoryWrapper.innerHTML = category
    }

    quotes = [{
        text: 'tygrys',
        category: "duży kot"
    },
    {
        text: 'koczilla',
        category: 'zwierzę domowę'
    },
    {
        text: "rekin",
        category: 'żyje w wodzie'
    }]
    showLabel(letter){
        console.log(letter)
       }
    drawLetters(){
        for(let i=0; i<26; i++){
            const label = (i+10).toString(36)  // crate alfabet labels from asci codes
            const button = document.createElement('button')
            button.classList.add('btn')
            button.addEventListener('click', () => this.showLabel(label))  //
            button.innerHTML = label
            this.letterWrapper.appendChild(button)
        }
    }
    selectQoute(){

    }   

    init(){
       this.drawLetters()
    }

}

