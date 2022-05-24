var income = prompt ('შეიყვანეთ თქვენი მიმდინარე შემოსავალი')
if (income<=3500){
    var message='შემოსავალი არ არის დამაკმაყოფილებელი!';
    alert(message)
}

else if(income>=3500 && income<=6000){
    alert('შემოსავალი დამაკმაყოფილებელია!')
}

else{
    alert('სპეციალურად შენთვის, მიიღე 1 მილიარდიანი სესხი, წლიურლი 89%ით!')
}



var players = [
    ['Lebron', 37, 'King'],
    ['cristiano', 37, 'CR7'],
    ['messi', 34, 'PESSI' ]
] 

console.log(players[0] [2]);
console.log(players[1] [1]);
console.log(players[2] [2]);