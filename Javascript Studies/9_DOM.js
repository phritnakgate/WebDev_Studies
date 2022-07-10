let bal = 5000;
let itemnum = 1;


function totalBal(){
   document.getElementById('testbal').innerHTML="balance is " + bal;
}
function ldMode(){
   document.getElementById("lightmode").setAttribute('id', 'darkmode');
}
function dlMode(){
    document.getElementById("darkmode").setAttribute('id', 'lightmode');
}
function Ele(){
   const item = document.createElement('li');
   item.innerText = "Item "+(itemnum++);
   document.getElementById('testnode').appendChild(item);
}
function delEle(){
   document.getElementById('testnode').removeChild(document.getElementById('testnode').firstChild);
}