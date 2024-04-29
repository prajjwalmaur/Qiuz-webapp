var correct = Math.floor(Math.random() * 4);
var ans;
var container = document.getElementById("container");
var flag = 0;
fetch("https://opentdb.com/api.php?amount=50&type=multiple",)
    .then((response) => {
        return response.json();
    }).then((data) => {
        let index = Math.floor(Math.random() * 50);
        let obj = data.results[index];
        console.log(obj);
        let question = document.getElementsByClassName("question")[0];
        question.innerText = obj.question;
        let option = [];
        option[correct] = obj.correct_answer;
        ans = obj.correct_answer;
        let j = 0;
        for (let i = 0; i < 4; i++) {
            if (i != correct) {
                option[i] = obj.incorrect_answers[j++];
            }
        }
        for (let i = 0; i < 4; i++) {
            let button = document.createElement("button");
            button.setAttribute("class", "button");
            button.setAttribute("onclick", `check(${i})`);
            button.innerHTML = `<span class="optionno">` + String.fromCharCode(65 + i) + "</span>" + "&nbsp;&nbsp;" + option[i];
            container.appendChild(button);
        }
        option.forEach(element => {
            console.log(element);
        });
    })

function check(op) {
    if (flag == 0) {
        flag = 1;
        let button = document.getElementsByClassName("button")[op];
        button.style.color = "white";
        if (op == correct) {
            button.style.backgroundColor = "green";
            button.style.borderColor = "green";
        }
        else {
            button.style.backgroundColor = "red";
            button.style.borderColor = "red";
            wrong();
        }
    }
}

function wrong() {
    let answer = document.createElement("h1");
    answer.setAttribute("class", "question");
    answer.innerHTML = `<span style= "color:black; ">Correct Option :- </span> &nbsp;&nbsp;&nbsp` + `<span class="optionno">` + String.fromCharCode(65 + correct) + "</span>" + "&nbsp;&nbsp;" + ans;
    container.appendChild(answer);
}