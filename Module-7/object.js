const products = [
  {
    brand: "Nike",
    color: "Black",
    name: "Air Max Sneakers",
    price: 120
  },
  {
    brand: "Adidas",
    color: "White",
    name: "Ultraboost Running Shoes",
    price: 150
  },
  {
    brand: "Puma",
    color: "Blue",
    name: "Casual Sports Jacket",
    price: 85
  },
  {
    brand: "Zara",
    color: "Red",
    name: "Women's Summer Dress",
    price: 60
  },
  {
    brand: "H&M",
    color: "Green",
    name: "Cotton Hoodie",
    price: 45
  },
  {
    brand: "Apple",
    color: "Silver",
    name: "iPhone 15 Pro",
    price: 999
  },
  {
    brand: "Samsung",
    color: "Gray",
    name: "Galaxy S24 Ultra",
    price: 1100
  },
  {
    brand: "Sony",
    color: "Black",
    name: "Wireless Headphones",
    price: 200
  },
  {
    brand: "Dell",
    color: "Black",
    name: "Gaming Laptop",
    price: 1300
  },
  {
    brand: "Rolex",
    color: "Gold",
    name: "Luxury Watch",
    price: 15000
  }
];


const result = products.filter(product=>product.color=="Black")
.map(p=>p.name)
console.log(result)