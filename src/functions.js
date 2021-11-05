//parametre gönderilmeme ihtimaline karşı Pars degerini verdik. Bu durumda
//undefined değilde Pars döner
function addToCard(quantity,productName="Pars"){
    console.log("Sepete eklendi! " + productName + " adet  " + quantity)
}

//ilk fonksiyonun sonucu undefined döner. javascript rahat bir dil oldu
//gu için hata vermiyor. bellekte product name için birsey olusmadı-
//ğı için undefined döner.Java veya C# ta buralarda hata verirdi
//kod derlenmezdi.
// addToCard()
addToCard("Leptop",10)
//şu an type güvenliği olmadıgı için string veya int gönderebiliyoruz
// addToCard(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function(){
    console.log("Hello World 2")
}

sayHello2()

////////////////////////////

function addToCard2(productName,quantity,unitPrice){

}

addToCard2("Elma",5,10)
addToCard2("Armut",2,20)
addToCard2("Limon",3,15)

let product1={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}

function addToCard3(product){
console.log("Ürün : "+ product1.productName )
console.log("Adet : " + product1.quantity)
}

addToCard3(product1)

let product2={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}
let product3={
    productName:"Elma",
    unitPrice:10,
    quantity:5
}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)
//veri primitive tipse deger tiptir.
// obje ve arrayler referans tiptir
let sayi1=10 
let sayi2=20
sayi1=sayi2
sayi2=100
console.log(sayi1)

// bellekte iki tip alan vardır. Stack ve Heap.
//stakte degerler kalıcı olarak tutulur. say1 e say2 degerini verirsek
//artık say1 in degeri say2 nin değeridir

//heap te product1 e bir referans numarası verir.
//Bu durumda paroduct3 product2 ye eşitlenirsei p2 nin adresi p3 ün
//adresi ile aynı olur. aynı yeri referans alırlar. p2 nin degeri
//değiştirildiginde aynı yeri gösdüklerinden ikisininde degerid değişir

function addToCart4(products){
console.log(products)
}

let products=[
    {productName:"Elma",    unitPrice:10,    quantity:5},
    {productName:"Armut",    unitPrice:10,    quantity:5},
    {productName:"Karpuz",    unitPrice:10,    quantity:5}
]

addToCart4(products)


function add(test,...numbers){//rest operatörü
    let total=0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
console.log("test :" +test)
console.log("total :"+total)
}

add(20,30,40,50)

let numbers=[12,23,43,5433,232,12]

console.log(Math.max(...numbers))// spread . ayır demek

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"15M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]
console.log(marmara.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)

let newProductName,newUnitePrice,newQuantity
({productName:newProductName,unitePrice:newUnitePrice,quantity:newQuantity}
={productName:"Elma",unitePrice:10,quantity:5})

console.log(newProductName)

login({title}){
    console.log()
}
