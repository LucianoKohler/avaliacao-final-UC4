console.log('Hello, world!')

//Fazer com que as minhas escolaridades comecem em tempos diferentes
for(let i = 0; i < 3; i++){
    setTimeout(() => { 
        document.getElementsByClassName('escola')[i].classList.add('floating')
    }, 500*i);
}

let habInfos = [
  //[nome, desc]
    ["HTML",""],
    ["JavaScript",""], 
    ["TypeScript",""], 
    ["C++","Conhecimentos básicos adquiridos por diversos exercícios de lógica e interpretação de enunciados."], 
    ["Canva",""], 
    ["Figma",""]
];
