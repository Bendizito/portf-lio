const x = Math.floor(Math.random() * 100);

console.log(x);

let list = [];

function adivinhar() {

    list.toString();
    console.log(list.toString());

    let num = document.getElementById('num').value;
    list.push(num);

    document.getElementById("numDigit").innerHTML= list.toString();
    document.getElementById("numDigit").style.setProperty("background-color", "black");
    document.getElementById("numDigit").style.setProperty("color", "white");


    if (num < x) {
        document.getElementById("revResp").innerHTML = "Esse número é maior do que vc está procurando"
        document.getElementById("revResp").style.setProperty("background-color", "red");
        return

    }

    if (num > x) {
        document.getElementById("revResp").innerHTML = "Esse número é menor do que vc está procurando"
        document.getElementById("revResp").style.setProperty("background-color", "red");
        return
    }

    if (num == x) {
        document.getElementById("revResp").innerHTML = "Parabéns!!! Vc achou o número escondido"
        document.getElementById("revResp").style.setProperty("background-color", "green");
        return
    }

    
};


