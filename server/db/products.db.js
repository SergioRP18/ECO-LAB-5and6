const supabaseCli = require("../services/supabase.service");

const getAllProducts = async () => {
  try {
    const { data, error } = await supabaseCli.from("products").select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error("Error al obtener productos:", err.message);
    return { error: err };
  }
};

const getProductsByPrice = async (price) => {
  const { data, error } = await supabaseCli.from("products").select().lt("price", price);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getFilteredProducts = async () => {
  const { data, error } = await supabaseCli
    .from("products")
    .select()
    .gt("price", 30)
    .eq("category", "Electronics");
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getPaginatedProducts = async (offset = 0, limit = 10) => {
  const { data, error } = await supabaseCli.from("products").select().range(offset, offset + limit - 1);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

const getUserProducts = async (userId) => {
  const { data, error } = await supabaseCli.from("products").select().eq("user_id", userId);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getFilteredProducts,
  getPaginatedProducts,
  getUserProducts,
};