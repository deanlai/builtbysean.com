function flipCoin () {
    if (document.getElementById("button").innerHTML === "<p>Flip!</p>") {
        coin = Math.random()*2;
        coin = coin < 1 ? "Heads" : "Tails";
        document.getElementById("coin").innerHTML = coin;
        document.getElementById("button").innerHTML = "<p>Reset?</p>";
    }
    else {
        document.getElementById("coin").innerHTML = "<p>Decison time.</p>";
        document.getElementById("button").innerHTML = "<p>Flip!</p>";
    }
}
