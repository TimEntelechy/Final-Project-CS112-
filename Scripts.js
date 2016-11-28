/**
 * Created by Justin on 10/24/2016.
 */
if (document.getElementById('radWin').check == true){
    window.location.href='EndPage.html'
}

function SubmitAnswers() {
    var parent = document.getElementById("choice");
    var newElement = document.createElement('input');
    newElement.setAttribute('type', 'radio');
    parent.appendChild(newElement);
}

function replaceViaElements() {
    var parent = document.getElementById("element-test");

    while (parent.hasChildNodes()) {
        parent.removeChild(parent.lastChild);
    }

}

localStorage.setItem("Choice #1 (Win Case)", "win");
document.getElementById("radWin").innerHTML = localStorage.getItem("Choice #1 (Win Case)");

localStorage.setItem("Choice #2 (Lose Case)", "lose");
document.getElementById("radLose").innerHTML = localStorage.getItem("Choice #2 (Lose Case)");

localStorage.setItem("Choice #3 (Lose Case)", "lose2");
document.getElementById("radLose2").innerHTML = localStorage.getItem("Choice #3 (Lose Case)");