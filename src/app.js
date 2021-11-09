<<<<<<< HEAD
// Burası başlangıç scripti
//başlangıc componentimiz olur ve digerlerini bunun içerisine yerleştiririz
//servis ve http çağrıları gibi uygulama içerisinde kullanılan servisler, kendi klasör ve scriptlerinde yazılır

//JS type safe değildir
console.log("Merhaba Kodlama i.o")

let dolarBugun= 9.30
let dolarDun = 9.20

{
    let dolarDun=9.10
=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}

console.log(dolarDun)

<<<<<<< HEAD
const euroDun=11.2
//euroDun=11 const read-only dir. değeri değişmez

console.log(euroDun)

let users=[12,"Konut Kredileri","Emlak Konut Kredisi","Kamu Konut Kredisi"] 
for (let i = 0; i < users.length; i++) {
    console.log( users[i])
}
console.log(users)
=======
const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
