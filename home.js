// script.js

const products = [
  {
        name: 'gold cretian',
        desc: 'energy and orignal.',
        img: 'gold creatine.jpg' 
      },
      {
        name: 'whey brotein.',
        desc: '100 grams of portein orignal.',
        img: 'whey protine.jpg'
      },
      {
        name: 'serious mass',
        desc: '100 grams of portein orignal.',
        img: 'seriose mass.jpg'
      },
      {
        name: 'pre wrok out',
        desc: 'more energy .',
        img: 'pre wrok out.jpg'
      },
      {
        name: 'slimming belt',
        desc: '1pc Men Sports Sauna Thermal Compression Vest, Workout Waist Trainer Tummy Trimmer, .',
        img: 'slimming belt.jpg'
      },
      {
        name: 't.shirt',
        desc: 'cool and style .',
        img: 't.shirt.jpg'
      },
      {
        name: 'lino shrits',
        desc: 'cool and style.',
        img: 'lino shrits.jpg'
      },
      {
        name: 'lino pants',
        desc: 'cool and style.',
        img: 'lino pants.jpg'
      },
      {
       name: 'adidas samba',
        desc: 'sports and fit.',
        img: 'adidas samba.jpg'
      },
      {
        name: 'adidas campus',
        desc: 'fit  and style.',
        img: 'adidas campus.jpg'
      },
      {
         name: 'LEATHER JAKET',
        desc: 'beutifull and style.',
        img: 'LEATHER JAKET.jpg'
      },
      {
        name: 'blue shrit',
        desc: ' confertble and fitt.',
        img: 'blue shrit.jpg'

      },
      {
         name: 'white shirt',
        desc: ' confertble and fitt.',
        img: 'white shirt.jpg'
      },
      {
         name: 'black shirt',
        desc: ' confertble and fitt.',
        img: 'black shirt.jpg'
      },
        {
         name: 'jeans jaket',
        desc: ' confertble and fitt.',
        img: 'jeans jaket.jpg'
      },
        {
         name: 'jeans',
        desc: ' confertble and fitt.',
        img: 'jeans.jpg'
      },
        {
         name: 'casio',
        desc: ' confertble and fitt.',
        img: 'casio.jpg'
      },
        {
         name: 'patrick philip',
        desc: 'confertble and fitt .',
        img: 'patrick philip.jpg'
      },
        {
         name: 'devonsi',
        desc: ' confertble and fitt.',
        img: 'devonsi.jpg'
      },
        {
         name: 'patrick philip leather',
        desc: ' confertble and fitt.',
        img: 'patrick philip leather.jpg'
      },
        {
         name: 'peodegar',
        desc: ' confertble and fitt.',
        img: 'peodegar.jpg'
      },
        {
         name: 'peodegar leather',
        desc: ' confertble and fitt.',
        img: 'peodegar leather.jpg'
      },
      {
         name: 'balck arbian',
        desc: ' confertble and fitt.',
        img: 'balck arbian.jpg'
      },
      {
         name: 'small fan',
        desc: ' cool and samll .',
        img: 'small fan.jpg'
      },
      {
         name: 'tomi',
        desc: 'confertble and fitt .',
        img: 'tomi (2).jpg'
      },
      {
         name: 'tomi',
        desc: 'confertble and fitt .',
        img: 'tomi.jpg'
      },
      {
         name: 'tomi leather',
        desc: 'confertble and fitt.',
        img: 'tomi leather.jpg'
      },
      {
         name: 'rolex',
        desc: 'confertble and fitt.',
        img: 'rolex.jpg'
      }
];

const productList = document.getElementById('product-list');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartDashboard = document.getElementById('cart-dashboard');
const cart = [];

// Render products
products.forEach((product, index) => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(index) {
  cart.push(products[index]);
  cartCount.innerText = cart.length;
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
      <button onclick="removeFromCart(${i})">Remove</button>
    `;
    cartItems.appendChild(div);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  cartCount.innerText = cart.length;
  renderCart();
}

function toggleCart() {
  cartDashboard.style.display = cartDashboard.style.display === 'none' ? 'block' : 'none';
}
