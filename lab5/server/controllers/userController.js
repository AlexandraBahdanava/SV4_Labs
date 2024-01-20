const { User } = require("../models/models");
const bcrypt = require("bcrypt");

class UserController {

  async create(req, res) {

    const { email, password } = req.body;

    try {
  
      const existingUser = await User.findOne({ where: { email: email } });

      if (existingUser) {
        return res.status(400).json({ error: "Email is taken" });
      }
      else {
      const bcryptPassword = await bcrypt.hash(password, 10);
  
      const createdUser = await User.create({ 
        email, 
        password: bcryptPassword
      });
  
      return res.status(201).json(createdUser);
      }
  
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }  
  
  async readAll(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async idRead(req, res) {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async update(req, res) {
    const userId = req.params.id;
    try {
      const [updatedRowsCount] = await User.update(req.body, {
        where: { id: userId },
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      const updatedUser = await User.findByPk(userId);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async delete(req, res) {
    const userId = req.params.id;
    try {
      const deletedRowCount = await User.destroy({
        where: { id: userId },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
}

module.exports = new UserController();