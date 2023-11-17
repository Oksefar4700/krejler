let hold1Balance = 20000;
let hold2Balance = 20000;

function opdaterBalance() {
    // Hent værdier fra indtastningsfelter
    let varePris = parseFloat(document.getElementById('varePris').value);
    let betaltAf = document.getElementById('betaltAf').value;
    let betaltBelob = parseFloat(document.getElementById('betaltBelob').value);
    
    let difference = betaltBelob - varePris;

    // Opdater balance baseret på hvilket hold der har betalt og forskellen mellem varens pris og det betalte beløb
    if (betaltAf === 'hold1') {
        hold1Balance += difference;
    } else {
        hold2Balance += difference;
    }

    // Vis de opdaterede balancer
    document.getElementById('hold1Balance').innerText = hold1Balance;
    document.getElementById('hold2Balance').innerText = hold2Balance;
}
