
function findPrime(...number){
for (let i = 0; i < number[i]; i++) {
    var total =0
    for (let y = 1; y <= number[i]; y++) {
            if ( number[i]%y ==0) {
                 total= total +1
            }
    }
    
    if (total >2) {
        console.log(number[i] +" asal sayı değildir");
    } else if(total<2){
        console.lof(number[i] +" asal sayı değildir ");
    }
    else{
        console.log(number[i] +" asal sayıdır ")
    }
}
}
findPrime(2,12,5,8,21,13)

////////////////////////////////////////////////7

function isFriendNUmber(num1,num2){
let sum1=0
let sum2 =0
for (let i = 1; i <num1; i++) {
    if (num1%i==0) {
        sum1 +=i
    }    
}
for (let i = 0; i < num2; i++) {
    if (num2%i==0) {
        sum2 +=i
    }
}
if (sum1==num2 && sum2==num1) {
    console.log(num1 + " ve " + num2 +" Arkadaş Sayı")
}
else{
    console.log(num1 + " ve " + num2 +" Arkadaş Sayı Değil")
}
}
isFriendNUmber(220,284)

/////////////////////////////////////////////////////////////

function isGreatNumber(num1){
    let sum=0
for (let i = 1; i < num1; i++) {
    if (num1%i==0) {
        sum +=i
    }
}

if (sum ==num1) {
    console.log(num1 +" Mükemmel Sayıdır")
}else{
    console.log(num1 +" Mükemmel Sayı Değildir")
}
}

isGreatNumber(496)

//////////////////////////////////////////////////////

function listOfPrimeNumber(number){
for (let i = 2; i <= number; i++) {
    let sum=0
    for (let y = 1; y <= i; y++) {
        if (i%y==0) {
            sum +=1
        }
    }
    
    if (sum ==2) {
        console.log(i)
    }
}
}
listOfPrimeNumber(1000)