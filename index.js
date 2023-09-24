var adviceId = document.getElementById("advice_id");
var advice = document.getElementById("advice");
var refresh = document.querySelector(".generate");

const adviceApi = ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
    adviceId.innerHTML = "Advice ID: " + data['slip']['id'];
    advice.innerText = '"' + data['slip']['advice'] + '"';
});
}

adviceApi();

refresh.addEventListener("click",()=>{
    adviceApi();
})

