const diceBtn = document.querySelector(".dice-bg");
const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const adviceJSON = await response.json();
    console.log(adviceJSON);
    document.querySelector(".id").innerHTML = adviceJSON.slip.id
    document.querySelector(".quote").innerHTML= ' " '+ adviceJSON.slip.advice + ' "'
}
diceBtn.addEventListener( 'click', getAdvice);


