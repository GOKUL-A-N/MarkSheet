

function handleChange() {
    let in11 = document.getElementById("in11").value;
    let in12 = document.getElementById("in12").value;
    let in21 = document.getElementById("in21").value;
    let in22 = document.getElementById("in22").value;
    let in31 = document.getElementById("in31").value;
    let in32 = document.getElementById("in32").value;
    let in41 = document.getElementById("in41").value;
    let in42 = document.getElementById("in42").value;
    let in51 = document.getElementById("in51").value;
    let in52 = document.getElementById("in52").value;

    let ans0 = document.getElementById("ans0");
    let ans1 = document.getElementById("ans1");
    let ans2 = document.getElementById("ans2");
    let ans3 = document.getElementById("ans3");
    let ans4 = document.getElementById("ans4");

    if(Number(in11) > 60 || Number(in21) > 60 || Number(in31) > 60 || Number(in41) > 60 || Number(in51) > 60 || Number(in12) > 40 || Number(in22) > 40 || Number(in32) > 40 || Number(in42) > 40 || Number(in52) > 40 || Number(in11) <= 0 || Number(in21) <= 0 || Number(in31) <= 0 || Number(in41) <=0 || Number(in51) <=  0 || Number(in12) <=  0 || Number(in22) <= 0 || Number(in32) <= 0 || Number(in42) <= 0 || Number(in52) <= 0){
        window.alert("enter details propery")
    }else{
    let total = document.getElementById("total")
    let percentage = document.querySelector("#avg");
    ans0.innerText = Number(in11) + Number(in12);
    ans1.innerText = Number(in21) + Number(in22);
    ans2.innerText = Number(in31) + Number(in32);
    ans3.innerText = Number(in41) + Number(in42);
    ans4.innerText = Number(in51) + Number(in52);

    total.innerText = Number(in11) + Number(in12) + Number(in31) + Number(in32) + Number(in41) + Number(in42) + Number(in51) + Number(in52) + Number(in21) + Number(in22) ; 
    percentage.innerText = (Number(in11) + Number(in12) + Number(in31) + Number(in32) + Number(in41) + Number(in42) + Number(in51) + Number(in52)) / 5;
    }
}

