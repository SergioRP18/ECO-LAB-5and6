const supabaseClient = require("../services/supabase.service");

const fetchAllProducts = async () => {
  try {
    const { data, error } = await supabaseClient.from("products").select();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const fetchFirst10Products = async () => {
  try {
    const { data, error } = await supabaseClient.from("products").select().limit(10);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching first 10 products:", error);
    throw error;
  }
};

const fetchAllUsers = async () => {
  try {
    const { data, error } = await supabaseClient.from("users").select();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const fetchAllOrders = async () => {
  try {
    const { data, error } = await supabaseClient
      .from("orders")
      .select()
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

const fetchAllPost = async () => {
  try {
    const { data, error } = await supabaseClient
      .from("posts")
      .select("title")
      .ilike("title", "%tutorial%");
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const fetchProductsByCurrentUser = async (userId) => {
  try {
    const { data, error } = await supabaseClient
      .from("products")
      .select()
      .eq("user_id", userId);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching products by current user:", error);
    throw error;
  }
};

module.exports = {
  fetchAllProducts,
  fetchAllUsers,
  fetchAllOrders,
  fetchAllPost,
  fetchFirst10Products,
  fetchProductsByCurrentUser,
};