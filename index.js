// var income = prompt ('შეიყვანეთ თქვენი მიმდინარე შემოსავალი')
// if (income<=3500){
//     var message='შემოსავალი არ არის დამაკმაყოფილებელი!';
//     alert(message)
// }

// else if(income>=3500 && income<=6000){
//     var message = 'შემოსავალი დამაკმაყოფილებელია!'
//     alert(message)
// }

// else{
//     var message = 'სპეციალურად შენთვის, მიიღე 1 მილიარდიანი სესხი, წლიურლი 89%ით!'
//     alert(message)
// }



// var players = [
//     ['Lebron', 37, 'King'],
//     ['cristiano', 37, 'CR7'],
//     ['messi', 34, 'PESSI' ]
// ] 

// console.log(players[0] [2] + '', + players[1] [1] + '','' + players[2] [2]);




// Homework 11 Task1

// var group = ['John', 'Bob', 'Alex', 'Mary', 'Dexter', 'Colin'];

//     for (var i =0; i < group.length; i++){
//         console.log(group[i]);
//     }


//     for (var i= group.length -1; i>= 0; i--){
//         console.log(group[i]);
//     }


//     Homework11 Task2

//     var numbers = [ 15,53,22,198,10,28,16,70,33,951 ];
//     var result = numbers.filter ((n)=> n%2 ==1);
    
//     document.write(result);


// Homework 11 Task3

function display (x,func){
    var message = func(x);
    document.write(message);
}

function priceAlert(price){
    if(price<=50)
    return 'დაბალი ფასი!';
    else if(price<=100)
    return 'საშუალო ფასი!'
    else(price>100)
    return 'მაღალი ფასი!'
}

display(55,priceAlert);