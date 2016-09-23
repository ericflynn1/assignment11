let points = 0;
let dieAntwort = null;
let score = 0;

function questions() {
    

    

    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function () {
        let delivery = JSON.parse(request.responseText);
        let jeopardy = delivery[0].question;
        let frages = document.getElementById('frage');
        frage.textContent = jeopardy;
        console.log(delivery[0]);
    });

    request.addEventListener('load', function () {
        let delivery = JSON.parse(request.responseText);
        points = delivery[0].value;
        dieAntwort = delivery[0].answer;
    });

    request.send();
}

window.addEventListener('load', function () {
    questions();
    document.getElementById('btn').addEventListener('click', function compare() {
        let correct = dieAntwort;
        let input = document.getElementById('inputBox').value;

        if (input === correct) {
            score = points + score;
        } else {
            score = score - points;
        }
        let overallScore = document.getElementById('scoreBoard');
        overallScore.textContent = score;
        questions();
    });

});






