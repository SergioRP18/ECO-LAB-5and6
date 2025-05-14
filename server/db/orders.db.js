const getOrdersSorted = async () => {
  const { data, error } = await supabaseCli.from("orders").select().order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

module.exports = {
  getOrdersSorted,
};