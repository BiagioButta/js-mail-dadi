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


