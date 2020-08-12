//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(5288);
console.log(result);



//woodCalculator, chair= 1 cf, table = 3 cf, bed = 5 cf; cf = cubic feet,
function woodCalculator(chair, table, bed){
    var woodForChair = chair * 1;
    var woodFortable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodFortable + woodForBed;
    return totalWood;
}
var result = woodCalculator(12, 2, 2);
console.log(result);





//brickCalculator
function brickCalculator(tala){
    var bricksPerFeet = 1000;
    for(var i =1; i <= n; i++){
        var eachTala = bricksPerFeet*15
        if(totalTala <= 10){
            totalBricks = eachTala*i;
            return totalbricks;
        }
        else if (totalTala> 10 && toatalTala<=20);{
            totalBricks = totalBricks + bricksPerFeet*12* (i-10);
            return totalBricks;

        }else if(totalTala > 20){
            totalaBricks = totalBricks + bricksPerFeet*10* (i-20);
            return totalBricks;
        }
    }
}
var bricksAmount = brickCalculator(45);
console.log(brickAmount);





//tinyFriend

function tinyFriend(names){
    var tiniest = names[0];
    for(var i = 0;  i < names.length; i++){
        var currentName = names[i];
        if(currentName < tiniest){
            tiniest = currentName;
        }
    }
    return tiniest;

}
var tiniest = tinyFriend(["Tuntun", "Tuni","Tu", "Tun"]);
console.log(tiniest);