const axios = require("axios");

const users = [
  { name: "Tom Taylor", email: "tom.taylor@example.com" },
  { name: "Lisa White", email: "lisa.white@example.com" },
  { name: "George Brown", email: "george.brown@example.com" },
  { name: "Hannah Black", email: "hannah.black@example.com" },
  { name: "Jack Green", email: "jack.green@example.com" },
  { name: "Mia Young", email: "mia.young@example.com" },
  { name: "Noah Scott", email: "noah.scott@example.com" },
  { name: "Lily Harris", email: "lily.harris@example.com" },
  { name: "Ethan Lewis", email: "ethan.lewis@example.com" },
  { name: "Sophia Lee", email: "sophia.lee@example.com" },
];

const products = [
  { name: "Desktop", description: "High performance desktop", price: 1500.0 },
  {
    name: "Smart Glasses",
    description: "AR enabled smart glasses",
    price: 900.0,
  },
  {
    name: "Smart Speaker",
    description: "Voice-controlled smart speaker",
    price: 250.0,
  },
  { name: "E-Reader", description: "Lightweight e-reader", price: 180.0 },
  {
    name: "Gaming Console",
    description: "Next-gen gaming console",
    price: 500.0,
  },
  { name: "Drone", description: "High-end drone with camera", price: 1000.0 },
  {
    name: "Smart Doorbell",
    description: "Wi-Fi enabled doorbell",
    price: 150.0,
  },
  {
    name: "Wireless Charger",
    description: "Fast wireless charger",
    price: 70.0,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker",
    price: 120.0,
  },
  {
    name: "Fitness Tracker",
    description: "Wearable fitness tracker",
    price: 100.0,
  },
];

const orders = [
  { user_id: 1, product_id: 1, quantity: 1 },
  { user_id: 2, product_id: 2, quantity: 2 },
  { user_id: 3, product_id: 3, quantity: 1 },
  { user_id: 4, product_id: 4, quantity: 3 },
  { user_id: 5, product_id: 5, quantity: 1 },
  { user_id: 6, product_id: 6, quantity: 2 },
  { user_id: 7, product_id: 7, quantity: 1 },
  { user_id: 8, product_id: 8, quantity: 1 },
  { user_id: 9, product_id: 9, quantity: 2 },
  { user_id: 10, product_id: 10, quantity: 1 },
];

const apiBase = "http://localhost:3000/api";

const createData = async () => {
  console.log("STARTING");
  for (const user of users) {
    await axios.post(`${apiBase}/users`, user);
    console.log(`User ${user.name} created`);
  }

  for (const product of products) {
    await axios.post(`${apiBase}/products`, product);
    console.log(`Product ${product.name} created`);
  }

  for (const order of orders) {
    await axios.post(`${apiBase}/orders`, order);
    console.log(
      `Order for user ${order.user_id} and product ${order.product_id} created`
    );
  }
};

createData();
