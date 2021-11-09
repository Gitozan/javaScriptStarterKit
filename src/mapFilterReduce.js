let cart = [
       { id:1,productName:"Telefon",quantity:3,unitPrice:4000},
       { id:2,productName:"Bardak",quantity:2,unitPrice:30},
       { id:3,productName:"Kalem",quantity:1,unitPrice:20},
       { id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
       { id:5,productName:"Kitap",quantity:3,unitPrice:30},
       { id:6,productName:"Pot",quantity:2,unitPrice:150}
]

//map arrayi tek tek dolaşmamı sağlar
//birden fazla satırlık işlem yapacaksak süslü parantezi kullanırız
console.log("<ul>")
cart.map(product => {
    console.log("<li>"+product.productName +" "
    +product.unitPrice*product.quantity+"</li>")
})
console.log("</ul>")

//filter data da birşeyler araken veya filtreleme yaparken
//filter dan bir değer dönerde,cevabı yeni bir arraye atar.
let quantityOver2=cart.filter(product=> product.quantity>2)
console.log(quantityOver2)

//reduce toplama yaparken kullanılır
//ilk deger 0 alır
let total=cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(total)















// referans ve değer tip farkı
function addToCart(sepet){
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi=10
function sumNumber(number){
number +=1
}

sumNumber(sayi)
console.log(sayi)
