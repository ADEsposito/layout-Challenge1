for(i = 50; i >= 20; i--) {
  if(i % 3 === 0) {
    console.log(i);
  }
}



for(i = 1; i > 0; i++) {
  console.log(i);
}



var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for(i = 0; i < classmates.length; i += 2) {
  console.log(classmates[i]);
}



var menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

var noGluten = [];

for(i = 0; i < menu.length; i++) {
  if(menu[i].glutenFree === true)
  noGluten.push(menu[i]);
}
console.log(noGluten);


// started working on this... didn't complete
// var league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]

//var trueGoat = [];

//for(i = 0; i < league.length; i++) {
//  for(key in league) {
//    console.log(league[key].name);
//    for(key in name.NFL) {
//      console.log(NFL[name]);
//    }
//  }
//}
