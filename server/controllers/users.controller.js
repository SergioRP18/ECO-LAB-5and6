const {
    getAllUsers,
    createUserInDB,
    updateUserInDb,
    deleteUserInDb,
    createUser,
  } = require("../db/users.db");
  
  const getUsers = async (req, res) => {
    const users = await getAllUsers();
    res.send(users);
  };
  
  const createUserInDBController = async (req, res) => {
    const { name } = req.body;
    const response = await createUserInDB({ name });
    res.send(response);
  };
  
  const updateUser = async (req, res) => {
    const { name } = req.body;
    const { id: userId } = req.params;
    const response = await updateUserInDb({ name }, userId);
    res.send(response);
  };
  
  const deleteUser = async (req, res) => {
    const { id: userId } = req.params;
    const response = await deleteUserInDb(userId);
    res.send(response);
  };

  const createUserController = async (req, res) => {
    const { username, email } = req.body;
  
    // Validaciones
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required" });
    }
  
    const user = await createUserInDB({ username, email });
    if (user.error) {
      return res.status(500).json({ error: user.error.message });
    }
  
    res.status(201).json(user);
  };
  
  module.exports = {
    getUsers,
    createUserInDBController,
    updateUser,
    deleteUser,
    createUserController,
  };