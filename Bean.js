function Function1() {
    let Peter = Math.floor(Math.random()*11);
    if (Peter == 1) {
        document.getElementById("Print").innerHTML = "L bozo";
    } else if (Peter == 2) {
        document.getElementById("Print").innerHTML = "HAHHAHAAH";
    } else if (Peter == 3) {
        document.getElementById("Print").innerHTML = "Imagine being diead"
    } else if (Peter == 4) {
        document.getElementById("Print").innerHTML = "U are the uncoolest"
    } else if (Peter == 5) {
        document.getElementById("Print") = "Not a book reader"
    } else if (Peter == 6) {
        document.getElementById("Print") = "Uncool"
    } else {
        document.getElementById("Print").innerHTML = "Womp Womp";
    }
}

let Attempt = 0

function Function2() {
    Attempt = Attempt + 1
    document.getElementById("Button2").style.backgroundColor = "#A1DD70";
    if (Attempt == 10) {
        Attempt = 0
    } else if (Attempt == 0|| Attempt == 2 || Attempt == 4 || Attempt == 6 || Attempt == 8) {
            document.getElementById("Button2").style.backgroundColor = "#EE4E4E";
    } else {
            document.getElementById("Button2").style.backgroundColor = "#A1DD70";
    }
}
function Function4() {
    let Attempt = 0
    let Num = Math.floor(Math.random()*101)
    let UserNum = prompt("Guess Number")
    while (UserNum != Num) {
        if (UserNum > Num) {
            Attempt = Attempt + 1
            UserNum = prompt("Num is smaller than "+UserNum)
        } else {
            Attempt = Attempt + 1
            UserNum = prompt("Num is larger than "+UserNum)
        }
    }
    alert("Correct! You got it in "+Attempt+" attempts")
}

let attempt = 0
function CSSFunction1() {
    if (attempt >= 1) {
        pass
    } else {
        document.getElementById("Transition2").innerHTML += " See, it works!";
    }
}
