
// Variável responsável por armazenar os dados dos heróis
let heroi = [];

// Variável para classificar o nível do herói
let heroiEscolhido = [];

// Cadastrando os heróis
for(let i = 0; i < 10; i++){

    switch(i){

        case 0:
            heroi.push(["Lelouch", 5040]);
            break;

        case 1:
            heroi.push(["Greymon", 7255]);
            break;

        case 2:
            heroi.push(["Motoko Kusanagi", 328]);
            break;

        case 3:
            heroi.push(["Haku", 1150]);
            break;

        case 4:
            heroi.push(["Aang", 9200]);
            break;

        case 5:
            heroi.push(["Edward Elric", 3684]);
            break;

        case 6:
            heroi.push(["Natsu Dragneel", 2451]);
            break;

        case 7:
            heroi.push(["Zoro", 6952]);
            break;

        case 8:
            heroi.push(["Izuku Midoriya", 8224]);
            break;

        case 9:
            heroi.push(["Light Yagami", 14206]);
            break;
    }
}


// Defina o herói que deseja classificar
heroiEscolhido = heroi[9];

//Classificando herói
if (heroiEscolhido[1] <= 1000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Ferro`);
} else if (heroiEscolhido[1] >= 1001 && heroiEscolhido[1] <= 2000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Bronze`);
} else if (heroiEscolhido[1] >= 2001 && heroiEscolhido[1] <= 5000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Prata`);
} else if (heroiEscolhido[1] >= 5001 && heroiEscolhido[1] <= 7000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Ouro`);
} else if (heroiEscolhido[1] >= 7001 && heroiEscolhido[1] <= 8000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Platina`);
} else if (heroiEscolhido[1] >= 8001 && heroiEscolhido[1] <= 9000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Ascendente`);
} else if (heroiEscolhido[1] >= 9001 && heroiEscolhido[1] <= 10000) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Imortal`);
} else if (heroiEscolhido[1] >= 10001) {
    console.log(`O Herói de nome ${heroiEscolhido[0]} está no nível de Radiante`);
}