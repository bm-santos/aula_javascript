/*AULA 1 - INTRODUÇÃO AO JAVASCRIPT

var nome = "Bruno Santos";
var n1 = 27;
var n2 = 2;
var frase = "Japão é o melhor time do mundo."

//alert(nome + " tem "+idade+" anos");
alert(idade+idade2);

console.log(nome);
console.log(n1*n2);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());

AULA 2 - ARRAY E DICIONÁRIO
var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
lista.push("uva");
//lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" | "))
//alert(lista[1]);

var fruta =  {nome:"maçã", cor:"vermelha"}
console.log("Fruta: "+fruta.nome);
console.log("Cor: "+fruta.cor);

var frutas =  [{nome:"maçã", cor:"vermelha"},{nome:"banana",cor:"amarela"},{nome:"tangerina",cor:"laranja"}]

console.log(frutas);
alert(frutas[1].nome);

//AULA 3 - CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

//var idade = 8;
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Idade é "+idade+" anos. Logo, é maior de idade.")
}else{
    alert("Idade é "+idade+" anos. Logo, é menor de idade.")
}

var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count++;
}

var count;

for (count=0; count <5; count++){
    alert(count);
}

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay()+1);
alert(d.getUTCDay())

AULA 4 - DESENVOLVA PÁGINAS WEB COM JAVASCRIPT

function soma(n1, n2){
    return n1+n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade){
    if (idade < 18){
        return false;
    }else{
        return true;
    }
}

var idade = prompt("Qual a sua idade?");

if ((validaIdade(idade))==true){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

AULA 5 - MANIPULANDO ELEMENTOS DA PÁGINA
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b> <i>por<i> <u>clicar</u>";
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://google.com"); //nova janela
    //window.location.href = "https://google.com"; //mesma janela
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}