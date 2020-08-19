// challenge-1 : Your Age in Days


function ageInDays(){
var birthYear = prompt("What Year You Bron....");
var ageInDayss = (2020-birthYear)*365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are' + ageInDayss + 'Days');
h1.setAttribute('id','ageinDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

