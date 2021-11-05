// Burası başlangıç scripti
//başlangıc componentimiz olur ve digerlerini bunun içerisine yerleştiririz
//servis ve http çağrıları gibi uygulama içerisinde kullanılan servisler, kendi klasör ve scriptlerinde yazılır

//JS type safe değildir
console.log("Merhaba Kodlama i.o")

let dolarBugun= 9.30
let dolarDun = 9.20

{
    let dolarDun=9.10
}

console.log(dolarDun)

const euroDun=11.2
//euroDun=11 const read-only dir. değeri değişmez

console.log(euroDun)

let users=[12,"Konut Kredileri","Emlak Konut Kredisi","Kamu Konut Kredisi"] 
for (let i = 0; i < users.length; i++) {
    console.log( users[i])
}
console.log(users)
