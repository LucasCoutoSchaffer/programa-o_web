var remover = document.getElementsByClassName("btn btn-danger");
var i;
for (i = 0; i < remover.length; i++) {
    remover[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function to_do_list() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("tarefas").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("É NESCESSÁRIO DIGITAR ALGO!!!");
    } else {
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("tarefas").value = "";

    var button = document.createElement("button");
    var x = document.createTextNode("\u00D7");
    button.className = "btn btn-danger";
    button.appendChild(x);
    li.appendChild(button);

    for (i = 0; i < remover.length; i++) {
        remover[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}