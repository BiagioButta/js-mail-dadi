// 1) creare una lista di email a cui è permesso l'accesso
// 2) chiedere all' utente di inserire la sua email
// 3) controllare se è presente nell'archivio email
// 4) stampare un messaggio per avvisare se è presente oppure no



const emailList = ['alpha@gmail.com', 'beta@gmail.com', 'gamma@gmail.com', 'delta@gmail.com'];
const emailUtente = document.getElementById('inputEmail');
const btn = document.getElementById('btn');
const succes = document.getElementById('accesso');
let emailInserita = null




btn.addEventListener('click', function(){
    succes.innerHTML = "";
    emailInserita = emailUtente.value
    
let check = false
    
for(let i = 0; i < emailList.length; i++){
    if(emailInserita == emailList[i]){
        check = true    
    }
}
if(check){
    succes.append('Consentito')
} else{
    succes.append('Negato')
}
    
});

////////////////////////////////////////////////
const tiroPc = [];
const tiroUser = [];
let sommaPc = 0;
let sommaUser = 0;
for (let i = 0; i < 6; i++) {
    tiroPc[i] = Math.round(Math.random() ) + 1
    tiroUser[i] = Math.round(Math.random() ) + 1
    sommaPc = sommaPc + tiroPc[i];
    sommaUser = sommaUser + tiroUser[i];
}
console.log(tiroPc, tiroUser);
console.log(sommaPc, sommaUser);
let dadi = document.getElementById("dadi");
dadi.innerHTML = "<h1>Somma utente = " + sommaUser + " <br> Somma Pc = " + sommaPc + "</h1>"
if (sommaPc > sommaUser) [
    dadi.innerHTML += "<h2>Pc vince</h2>"
]
else if (sommaPc < sommaUser) {
    dadi.innerHTML += "<h2>Utente vince</h2>"
}
else {
    dadi.innerHTML += "<h2>Si ritira!</h2>"
 }