const getPostsByTitle = async (searchTerm) => {
  const { data, error } = await supabaseCli.from("posts").select().ilike("title", `%${searchTerm}%`);
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};

module.exports = {
  getPostsByTitle,
};