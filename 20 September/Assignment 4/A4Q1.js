let products = [
    {
        name: "Full Sleeves Suit",
        size: "M",
        color: "White",
        price: 1749,
        image: "1.png",
        description: "Trending full sleeves elegant suit"
    },
    {
        name: "Dress",
        size: "S",
        color: "White",
        price: 1249,
        image: "2.png",
        description: "White designer dress"
    },
    {
        name: "Indo Western Dress",
        size: "M",
        color: "White",
        price: 1500,
        image: "3.png",
        description: "White indo western designer dress"
    },
    {
        name: "Dress",
        size: "S",
        color: "White",
        price: 999,
        image: "4.png",
        description: "White designer sleeveless dress"
    },
    {
        name: "Ethnic Wear",
        size: "L",
        color: "Off White",
        price: 1999,
        image: "5.png",
        description: "Long full sleeves ethnic wear"
    },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
    productsData.forEach(function (product, index) {

        let { name, size, color, price, image, description } = product;
        let productString = JSON.stringify(product);

        if (who == "productwrapper") {
            productsString += `<div class="product">
                 <div class="prodimg">
                     <img src="productimages/${image}" width="100%"/>
                 </div>
                 <h3>${name}</h3>
                 <p>Price: ${price}</p>
                 <p>Size: ${size}</p>
                 <p>Color: ${color}</p>
                 <p>${description}</p>
                 <p>
                     <button onclick="addToCart(${index})">Add to Cart</button>
                 </p>
            </div>`;
        }
        else if (who == "cart") {
            productsString += `<div class="product">
                 <div class="prodimg">
                     <img src="productimages/${image}" width="100%"/>
                 </div>
                 <h3>${name}</h3>
                 <p>Price: ${price}</p>
                 <p>Size: ${size}</p>
                 <p>Color: ${color}</p>
                 <p>${description}</p>
                 <p>
                     <button onclick="removeFromCart(${index})">Remove from Cart</button>
                 </p>
            </div>`;
        }

    });
    document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchvalue)
{
    let searchProduct = products.filter(function (product, index) {
        let searchString = product.name + " " + product.price + " " + product.size + " " + product.color + " " + product.description;
        return searchString.toLowerCase().indexOf(searchvalue.toLowerCase()) != -1;
    })
     displayProducts(searchProduct);
}


function addToCart(index) {
    cart.push(products[index]);
    displayProducts(cart, "cart");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayProducts(cart, "cart");
}