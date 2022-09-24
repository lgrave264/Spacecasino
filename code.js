function welcome(){
    document.write("<h2>Welcome to the space casino</h2>");
}

function Instructions(){
    document.write("<br/><p>To win you must roll the same number on two D6 dice while also getting a number higher than 4</p>")
}

function roll(){
    // this will roll our dice while also keeping track of how much we rolled together
    var dice1 = Math.ceil(Math.random() * 6);
    var dice2 = Math.ceil(Math.random() * 6);
    var sum = dice1 + dice2;

    // this will write on the page what we rolled and what the sum is
    document.getElementById("d1").innerHTML ="Your first die was an " + dice1;
    document.getElementById("d2").innerHTML ="Your second die was an " + dice2;
    document.getElementById("sum").innerHTML ="Your sum is " + sum;

    // This will decide whether or not the player has won
    if(sum > 4 && dice1 == dice2){
        document.getElementById("LW").innerHTML = "You won space gambler";
    }else{
        document.getElementById("LW").innerHTML = "You lost space gambler, try again";
    }
}

welcome();
Instructions();

