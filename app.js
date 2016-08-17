function questions() {
let request = new XMLHttpRequest();
request.open('GET', 'http://jservice.io/api/random');
request.addEventListener('load', function () {
    // console.log('got the target');
    let delivery = JSON.parse(request.responseText);
    console.log(delivery[0]);
    let jeopardy = delivery[0].question;
    let frage = document.createElement('quest');
        frage.textContent = jeopardy;
    // let antwort = delivery[0].answer; 
    // let ans = document.createElement('answer');
    //     ans.textContent = antwort;
    
    let parent = document.querySelector('body');
    let submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answer';
    submitBtn.addEventListener('click', function () {
        console.log('DAILY DOUBLE');

    });
    
    parent.appendChild(frage);
    // parent.appendChild(antwort);
    let answercontainer = document.createElement('hidden');
});
request.open('GET', 'http://jservice.io/api/random');
request.addEventListener('load', function () {
    // console.log('got the target');
    let delivery = JSON.parse(request.responseText);
    console.log(delivery[0]);
let antwort = delivery[0].answer; 
    let ans = document.createElement('answer');
        ans.textContent = antwort;
        ans.classList.add('hidden');
        

let parent = document.querySelector('body');
parent.appendChild(ans);
});
request.send();

}

window.addEventListener('load', function () {
questions();
})






