const { getAllProducts, getAllUsers, getAllOrders, getAllPost, getFirst10Products, getProductsByCurrentUser} = require("../db/users.db");

const fetchAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const fetchProductsByPrice = async (req, res) => {
  try {
    const products = await getAllProducts();
    const filteredProducts = products.filter((product) => product.price < 50);
    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products by price" });
  }
};

const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.send(users);
};

const getUserEmail = async (req, res) => {
  let newArray = [];
  const users = await getAllUsers();

  console.log("esto llega de users", users);

  users.forEach((element) => {
    newArray.push({ username: element.username, email: element.email });
  });

  res.send(newArray);
};

const getOrderCreateAt = async (req, res) => {
  const orders = await getAllOrders();
  console.log("esto llega de orders", orders);
  res.send(orders); 
};

const getProductsMulti = async (req, res) => {
  let newArray = [];
  const productsPrice = await getAllProducts();
  console.log("esto llega de productsPrice", productsPrice);

  productsPrice.forEach((element) => {
    if (element.price > 30 && element.category === "Electronics") {
      newArray.push(element);
    }
  });

  res.send(newArray); 
};

const getPostWord = async (req, res) => {
  const posts = await getAllPost(); 
  console.log("esto llega de posts", posts);
  res.send(posts); 
};

const getFirstProducts = async (req, res) => {
  const productsLimit = await getFirst10Products(); 
  console.log("esto llega de productsLimit", productsLimit);
  res.send(productsLimit); 
};

const getProductsUser = async (req, res) => {
  const userId = req.query.user_id;

  if (!userId) {
    return res.status(400).json({ error: "Falta el user_id" });
  }

  const data = await getProductsByCurrentUser(userId);
  res.json(data);
};


module.exports = {
  fetchAllProducts,
  getUsers,
  fetchProductsByPrice,
  getUserEmail,
  getOrderCreateAt,
  getProductsMulti,
  getPostWord,
  getFirstProducts,
  getProductsUser,
};