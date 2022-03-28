//1a
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];

//1b
function seeDinos(i, ...j){
    console.log(i);
    console.log(j);
};
seeDinos(`Velociraptors`,`Tyrannosaurus Rex`,`Dilophosaurus`);

//2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler:"Laura Dern",
    ianMalcolm:"Jeff Goldblum"
};

//2b
seeCharacters = ({ellieSattler})=>{
    console.log(ellieSattler);
}

seeCharacters(jPCharacters);
console.log(`=`.repeat(25));