/**
 * Created by Justin on 10/24/2016.
 */
if (document.getElementById('radWin').check == true){
    window.location.href='EndPage.html'
}

function SubmitAnswers() {
    var parent = document.getElementById("element-test");
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
