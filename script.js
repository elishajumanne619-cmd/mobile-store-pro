let products = [];
let cart = [];

window.onload = function(){
loadProducts();
renderProducts();
renderCart();
};

/* PRODUCTS */
function loadProducts(){

products = [
{id:1,name:"iPhone 15 Pro Max",price:3200000,img:"iphone 15pro.jpg"},
{id:2,name:"Samsung S24 Ultra",price:2900000,img:"s24.jpg"},
{id:3,name:"Google Pixel 8",price:1900000,img:"pixel8.jpg"},
{id:4,name:"Redmi Note 13",price:650000,img:"redmi note13.jpg"},
{id:5,name:"Infinix Hot 50",price:450000,img:"hot 50.jpg"},

{id:6,name:"HP Laptop",price:1600000,img:"hp.jpg"},
{id:7,name:"Dell Laptop",price:1700000,img:"dell pc.jpg"},
{id:11,name:"Makeup Kit",price:80000,img:"make up.jpg"},

{id:12,name:"Power Bank",price:60000,img:"powerbank.jpg"},
{id:13,name:"Bluetooth Speaker",price:90000,img:"bluetoth.webp"},

{id:14,name:"iPhone Charger",price:30000,img:"iphone charger.jpg"},
{id:15,name:"Type-C Cable",price:10000,img:"cable.webp"}
];

}

/* RENDER PRODUCTS */
function renderProducts(){

let search = document.getElementById("search").value.toLowerCase();
let box = document.getElementById("products");

box.innerHTML = "";

products
.filter(p => p.name.toLowerCase().includes(search))
.forEach(p=>{

box.innerHTML += `
<div class="product">
<img src="${p.img}">
<div>
<b>${p.name}</b><br>
Tsh ${p.price}<br>

<button class="add" onclick="add(${p.id})">Add to Cart</button>
<button class="buy" onclick="buyNow(${p.id})">Buy Now</button>

</div>
</div>
`;

});

}

/* ADD CART */
function add(id){

let p = products.find(x=>x.id===id);
let item = cart.find(c=>c.product.id===id);

if(item) item.qty++;
else cart.push({product:p,qty:1});

renderCart();
}

/* CART */
function renderCart(){

let box = document.getElementById("cart");
let total = 0;

box.innerHTML = "";

cart.forEach(i=>{
total += i.product.price * i.qty;
box.innerHTML += `<div>${i.product.name} x ${i.qty}</div>`;
});

document.getElementById("total").innerText = "Total: Tsh " + total;
}

/* BUY NOW */
function buyNow(id){

let p = products.find(x=>x.id===id);
let phone = "255763993337";

let msg = `I want to buy:
${p.name}
Price: Tsh ${p.price}`;

window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
}

/* CHECKOUT */
function checkout(){

if(cart.length === 0){
alert("Cart is empty");
return;
}

let phone = "255763993337";
let msg = "Order:%0A";
let total = 0;

cart.forEach(i=>{
msg += `- ${i.product.name} x ${i.qty}%0A`;
total += i.product.price * i.qty;
});

msg += `%0ATotal: ${total}`;

window.open(`https://wa.me/${phone}?text=${msg}`,"_blank");
}