let products = {
    data: [
        {
            id: 1,
            name: "SAMBA CLASSIC SHOES",
            brand: "Adidas",
            price: "80$ - 90$",
            image: "pics/Samba_Classic_Shoes_White_772109_01_standard.jpg"
        },

        {
            id: 2,
            name: "ULTRABOOST 1.0 SHOES",
            brand: "Adidas",
            price: "175$ - 190$",
            image: "pics/Ultraboost_1.0_Shoes_White_ID5879_01_standard.jpg"
        },

        {
            id: 3,
            name: "HANDBALL SPEZIAL SHOES",
            brand: "Adidas",
            price: "90$ - 110$",
            image: "pics/Handball_Spezial_Shoes_Grey_IE9840_01_standard.jpg"
        },

        {
            id: 4,
            name: "OZWEEGO TR SHOES",
            brand: "Adidas",
            price: "95$ - 120$",
            image: "pics/OZWEEGO_TR_Shoes_Brown_IF8577_01_standard.jpg"
        },

        {
            id: 5,
            name: "SUPERSTAR SHOES",
            brand: "Adidas",
            price: "75$ - 100$",
            image: "pics/Superstar_Shoes_Red_IF3642_01_standard.jpg"
        },

        {
            id: 6,
            name: "FIVE TEN TRAILCROSS CLIP-IN MOUNTAIN BIKE SHOES",
            brand: "Adidas",
            price: "130$ - 165$",
            image: "pics/Five_Ten_Trailcross_Clip-In_Mountain_Bike_Shoes_Black_GZ9848_01_standard.jpg"
        },

        {
            id: 7,
            name: "NMD_R1 SHOES",
            brand: "Adidas",
            price: "100$ - 130$",
            image: "pics/NMD_R1_Shoes_White_IF3496_01_standard.jpg"
        },

        {
            id: 8,
            name: "ORANAGE RAINBOW LOGO DECK",
            brand: "Nike",
            price: "75$ - 90$",
            image: "pics/dunk-low-big-kids-shoes-l6Jxh2.png"
        },

        {
            id: 9,
            name: "Nike G.T. Jump 2 ASW",
            brand: "Nike",
            price: "170$ - 190$",
            image: "pics/gt-jump-2-asw-basketball-shoes-Xjh0vC.jpg"
        },

        {
            id: 10,
            name: "Nike Dunk Low Retro",
            brand: "Nike",
            price: "100$ - 115$",
            image: "pics/dunk-low-retro-mens-shoes-87q0hf.png"
        },

        {
            id: 11,
            name: "Air Jordan 1 Retro High OG ''Yellow Ochre''",
            brand: "Nike",
            price: "170$ - 180$",
            image: "pics/air-jordan-1-retro-high-og-yellow-ochre-mens-shoes-JHpxkn.jpg"
        },

        {
            id: 12,
            name: "Nike Air Force 1 '07 LV8",
            brand: "Nike",
            price: "115$ - 125$",
            image: "pics/air-force-1-07-lv8-mens-shoes-Zj9bVF.jpg"
        },

    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")
    card.style.backgroundColor = "rgba(179, 255, 236, 0.715)"

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let brand = document.createElement("h6");
    brand.innerHTML = "<b>Brand:</b> " + items.brand;
    container.appendChild(brand);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart(" + items.id +")")
    btn.innerHTML = "Add to cart"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//key: cart
//value: {product:{id: 1, name:'s, price:$}, quantity: 1}

var cart =[]
byGetProductId = (id) => {
    for (let items of products.data) {
        if (id == items.id) {
            return items;
        }
    }
}

addToCart = (id) => {
    let storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage)
    }
    let product = byGetProductId(id);
    let itemDetails = cart.find(items => items.product.id == id)
    if (itemDetails) {
        itemDetails.quantity += 1;
    } else{
        cart.push({product, quantity:1})
    }
    //console.log(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function showAll(){
    var list = `<tr><th>Ten san pham</th><th>gia ca</th><th>so luong</th></tr>`;
    JSON.parse(localStorage.getItem('cart')).forEach(element => {
        list += `<tr><td>` + element.product.name + 
        `</td><td>` + element.quantity + 
        `</td><td>` + element.product.price + 
        `</td></tr>`;
    });
    document.getElementById('list1').innerHTML = list;
}