const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export const ordersForCalendar = [
  {
    id: 1,
    customer: "Alice",
    product: "Book",
    deliveryDate: new Date(currentYear, currentMonth, 15),
  },
  {
    id: 2,
    customer: "Bob",
    product: "Laptop",
    deliveryDate: new Date(currentYear, currentMonth, 18),
  },
  {
    id: 3,
    customer: "Charlie",
    product: "Shoes",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 4,
    customer: "David",
    product: "Headphones",
    deliveryDate: new Date(currentYear, currentMonth, 22),
  },
  {
    id: 5,
    customer: "Eva",
    product: "Watch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 6,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 7,
    customer: "Frank",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 8,
    customer: "Grace",
    product: "Phone",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 9,
    customer: "Henry",
    product: "Tablet",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 10,
    customer: "Isabel",
    product: "Earphones",
    deliveryDate: new Date(currentYear, currentMonth, 20),
  },
  {
    id: 11,
    customer: "Jack",
    product: "Smartwatch",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 12,
    customer: "Katherine",
    product: "Backpack",
    deliveryDate: new Date(currentYear, currentMonth, 25),
  },
  {
    id: 13,
    customer: "Leo",
    product: "Camera",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
  {
    id: 14,
    customer: "Mia",
    product: "Printer",
    deliveryDate: new Date(currentYear, currentMonth, 28),
  },
];

export const orders = [
  {
    id: 1,
    orderId: "ORD001",
    customerName: "John Doe",
    orderDate: "2024-03-10",
    status: "Pending",
  },
  {
    id: 2,
    orderId: "ORD002",
    customerName: "Jane Smith",
    orderDate: "2024-03-09",
    status: "Delivered",
  },
  {
    id: 3,
    orderId: "ORD003",
    customerName: "Alice Johnson",
    orderDate: "2024-03-08",
    status: "Processing",
  },
  {
    id: 4,
    orderId: "ORD004",
    customerName: "Bob Brown",
    orderDate: "2024-03-07",
    status: "Pending",
  },
  {
    id: 5,
    orderId: "ORD005",
    customerName: "Charlie Davis",
    orderDate: "2024-03-06",
    status: "Delivered",
  },
  {
    id: 6,
    orderId: "ORD006",
    customerName: "Emma Wilson",
    orderDate: "2024-03-05",
    status: "Cancelled",
  },
  {
    id: 7,
    orderId: "ORD007",
    customerName: "James Taylor",
    orderDate: "2024-03-04",
    status: "Processing",
  },
  {
    id: 8,
    orderId: "ORD008",
    customerName: "Sophia Martinez",
    orderDate: "2024-03-03",
    status: "Pending",
  },
  {
    id: 9,
    orderId: "ORD009",
    customerName: "Michael Brown",
    orderDate: "2024-03-02",
    status: "Processing",
  },
  {
    id: 10,
    orderId: "ORD010",
    customerName: "Olivia Wilson",
    orderDate: "2024-03-01",
    status: "Delivered",
  },
  {
    id: 11,
    orderId: "ORD011",
    customerName: "William Johnson",
    orderDate: "2024-02-29",
    status: "Pending",
  },
  {
    id: 12,
    orderId: "ORD012",
    customerName: "Ava Taylor",
    orderDate: "2024-02-28",
    status: "Delivered",
  },
  {
    id: 13,
    orderId: "ORD013",
    customerName: "Alexander Davis",
    orderDate: "2024-02-27",
    status: "Processing",
  },
  {
    id: 14,
    orderId: "ORD014",
    customerName: "Mia Wilson",
    orderDate: "2024-02-26",
    status: "Pending",
  },
  {
    id: 15,
    orderId: "ORD015",
    customerName: "Ethan Brown",
    orderDate: "2024-02-25",
    status: "Processing",
  },
  {
    id: 16,
    orderId: "ORD016",
    customerName: "Isabella Martinez",
    orderDate: "2024-02-24",
    status: "Delivered",
  },
  {
    id: 17,
    orderId: "ORD017",
    customerName: "James Smith",
    orderDate: "2024-02-23",
    status: "Pending",
  },
  {
    id: 18,
    orderId: "ORD018",
    customerName: "Sophia Johnson",
    orderDate: "2024-02-22",
    status: "Processing",
  },
  {
    id: 19,
    orderId: "ORD019",
    customerName: "Logan Taylor",
    orderDate: "2024-02-21",
    status: "Cancelled",
  },
  {
    id: 20,
    orderId: "ORD020",
    customerName: "Charlotte Brown",
    orderDate: "2024-02-20",
    status: "Delivered",
  },
];

export const totalOrders = orders.length;

export const products = [
  { id: 1, name: "Apple", category: "Fruits", price: 2.99, stock: 10 },
  { id: 2, name: "Banana", category: "Fruits", price: 1.99, stock: 20 },
  { id: 3, name: "Carrot", category: "Vegetables", price: 0.99, stock: 30 },
  { id: 4, name: "Donut", category: "Snacks", price: 3.99, stock: 15 },
  { id: 5, name: "Egg", category: "Dairy", price: 4.99, stock: 12 },
  { id: 6, name: "Grapes", category: "Fruits", price: 3.49, stock: 25 },
  { id: 7, name: "Lemon", category: "Fruits", price: 0.79, stock: 18 },
  { id: 8, name: "Potato", category: "Vegetables", price: 1.49, stock: 35 },
  { id: 9, name: "Chips", category: "Snacks", price: 2.49, stock: 22 },
  { id: 10, name: "Milk", category: "Dairy", price: 2.99, stock: 8 },
  { id: 11, name: "Orange", category: "Fruits", price: 2.29, stock: 14 },
  { id: 12, name: "Cucumber", category: "Vegetables", price: 1.19, stock: 28 },
  { id: 13, name: "Popcorn", category: "Snacks", price: 1.99, stock: 17 },
  { id: 14, name: "Cheese", category: "Dairy", price: 5.49, stock: 10 },
  { id: 15, name: "Strawberry", category: "Fruits", price: 4.99, stock: 20 },
];

export const totalProducts = products.length;

