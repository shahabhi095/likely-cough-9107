// import {navbar} from "./navbar.js"

// let nav_div = document.getElementById("navbar")
// nav_div.innerHTML = navbar()

//Read More less button
let readMoreLess_btn = document.getElementById("myBtn");
readMoreLess_btn.onclick = () => {
  ReadMoreLess();
};

const ReadMoreLess = () => {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    btnText.style = "border: 2px solid black; width:100%;  text-align: left;";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    btnText.style = "border: 2px solid black;";
    btnText.style = "border: 2px solid black; width:100%;  text-align: left;";
  }
};

let productsData = [
  {
    id: "1",
    image1:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13516546-2844930071318699.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13516546-1514932677894190.jpg",
    name: "Brightening Treatment 1 fl. oz",
    rating: 4.5,
    price: 105.0,
    brand: "SkinCeuticals",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "2",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/11289627-5464870985854209.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289627-6904866614636649.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals Physical Eye UV Defense SPF 50",
    rating: 4,
    price: 30.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "3",
    image1:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-1174892770940184.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11289609-8744892770898772.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml",
    rating: 3.4,
    price: 169.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "4",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/11294635-1994892768429109.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11294635-6514892768465172.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/skinceuticals.gif",
    name: "SkinCeuticals A.G.E. Interrupter",
    rating: 4.2,
    price: 168.0,
    brand: "SkinCeuticals",
    categories: "SkinCeuticals Cleansers",
  },
  {
    id: "5",
    image1:
      "https://static.thcdn.com/images/small/webp//productimg/130/130/12635425-2054893266456808.jpg",
    image2:
      "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12635425-1514884719372601.jpg",
    brand_imag:
      "https://s1.thcdn.com/design-assets/images/logos/shared-brands/colour/christopherobin.gif",
    name: "Hydrating Leave-in Mist with Aloe Vera 150ml",
    rating: 4.6,
    price: 27.3,
    brand: "Christophe Robin",
    categories: "Hair Cleansers",
  },
];

const DisplayTable = (Array) => {
  let total_items = document.getElementById("total_items");
  total_items.innerText = Array.length + " " + "results";
  let table = document.getElementById("product_grid");
  table.innerHTML = null;

  Array.forEach((el) => {
    // div to append data with all details
    let div = document.createElement("div");

    div.className = "product_details";
    // dive to store both image

    let Image_div = document.createElement("div");
    Image_div.className = "product_img";

    // first image which will show on loading of website
    let Image1 = document.createElement("img");
    Image1.src = el.image1;
    Image1.className = "Image1";

    // second image which will shhow when hover
    let Image2 = document.createElement("img");
    Image2.src = el.image2;
    Image2.className = "Image2";

    // append both image in image div
    Image_div.append(Image1, Image2);
    let Name = document.createElement("p");
    Name.innerHTML = el.name;

    //gift pop-up option
    let Gift = document.createElement("p");
    Gift.innerHTML = "Select your Gift";
    Gift.className = "Gift_option";

    //rating
    let Rating = document.createElement("p");
    Rating.innerHTML = "rating:" + " " + el.rating;
    //price
    let Price = document.createElement("h3");
    Price.className = "Price";
    Price.innerText = "MSRP:" + " " + "$" + el.price;

    //buy button
    let Quick_Buy_btn = document.createElement("button");
    Quick_Buy_btn.innerHTML = "QUICK BUY";
    Quick_Buy_btn.className = "Buy_btn";
    // buy button onclick
    Quick_Buy_btn.onclick = function () {
      BuyProduct(el);
    };
    // appending all data to details div
    div.append(Image_div, Name, Gift, Rating, Price, Quick_Buy_btn);

    table.append(div);
  });
};

DisplayTable(productsData);

//this function will call when buy button will be clicked

const BuyProduct = (el) => {
  localStorage.setItem("addToCart", JSON.stringify(el));
  // window.location.href = "cart.html"
};

// import { footer } from "./footer.js";

// let footer_div = document.getElementById("footer");
// footer_div.innerHTML = footer();