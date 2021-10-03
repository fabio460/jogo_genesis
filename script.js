let order = [];
let clickOrder = [];
let score = 0;
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

// cria ordem aleatoria de cores
let shiftOrder = ()=>{
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickOrder = [];
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i) + 1); 
    }
}
//acende a proxima cor
let lightColor = (element,number) => {
    number = number * 500;
    setTimeout(()=>{
        element.classList.add('selected');
    },number - 250);
    setTimeout(()=>{
        element.classList.remove('selected');
    });
}
//checa se os botoes são os mesmos da ordem gerado no jogo
let checkOrder = ()=>{
    for(let i in clickOrder){
        if(clickOrder[i]!= order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length ==order.length){
        alert(`pontuação: ${score}\n Voce acertou proximo nível!`);
        nextLevel()
    }
}
// função para clique do usuario
let click = (color)=>{
    clickOrder[clickOrder.length]=color;
    createColorElement(color).classList.add('selected');
    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250)
    
}

//crear  função que retorna cor 
let createColorElement = (color)=>{
    if(color==0){
        return green;
    }else if(color==1){
        return red;
    }else if(color==2){
        return yellow;
    }else if(color==3){
        return blue;
    }
}

//função que para proximo nivel do jogo

let nextLevel = ()=>{
   score++;
   shiftOrder();  
}
//função para game over
let gameOver = ()=>{
   alert(`Pontuação ${score}!\n Voce perdeu o jogo Clique em ok para iniciar`);
   order =[];
   clickOrder=[];
   playGame();
}
// função de inicio do jogo
let playGame = ()=>{
    alert('Bem vindo ao Genesis! Iniciando novo jogo');
    score = 0;
    nextLevel();
}

green.onclick = ()=> click(0);
red.onclick = ()=>click(1);
yellow.onclick = ()=>click(2);
blue.onclick = ()=> click(3);




// inicio do jogo
playGame();





























