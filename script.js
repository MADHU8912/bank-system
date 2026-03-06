function generateAccount(){

let account = Math.floor(1000000000 + Math.random() * 9000000000);

document.getElementById("account").value = account;

}