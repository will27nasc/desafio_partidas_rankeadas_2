function calculate(victories, defeats) {
    let result = victories - defeats;
    
    if(result < 0) {
        return 0;
    }

    return result;
}

function verifyMatches(victories, defeats) {
    let balanceWins = calculate(victories, defeats);
    let nivel = null;

    if(balanceWins < 10) {
        nivel = "Ferro";
        return printResult(balanceWins, nivel);
    }
    else if(balanceWins > 10 && balanceWins < 21) {
        nivel = "Bronze";
        return printResult(balanceWins, nivel);  
    }
    else if(balanceWins > 20 && balanceWins < 51) {
        nivel = "Prata";
        return printResult(balanceWins, nivel);  
    }
    else if(balanceWins > 50 && balanceWins < 81) {
        nivel = "Ouro";
        return printResult(balanceWins, nivel);  
    }
    else if(balanceWins > 80 && balanceWins < 91) {
        nivel = "Diamante";
        return printResult(balanceWins, nivel);  
    }
    else if(balanceWins > 90 && balanceWins < 101) {
        nivel = "Lendário";
        return printResult(balanceWins, nivel);  
    }
    else if(balanceWins >= 101) {
        nivel = "Imortal";
        return printResult(balanceWins, nivel);  
    } 

    return printResult(balanceWins, nivel);
}

function printResult(balanceWins, nivel) {
    console.log(`O Herói tem de saldo de ${balanceWins} está no nível de ${nivel}`);
}

verifyMatches(101, 6);

