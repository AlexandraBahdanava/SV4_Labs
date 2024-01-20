const { Admin } = require("../models/models");
const bcrypt = require("bcrypt");

class AdminController {

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
  

  async create(req, res) {
    try {
      const admin = await Admin.create(req.body);
      return res.status(201).json(admin);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Read All Admins
  async readAll(req, res) {
    try {
      const admins = await Admin.findAll();
      return res.status(200).json(admins);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Read Admin by ID
async idRead (req, res) {
    const adminId = req.params.id;
    try {
      const admin = await Admin.findByPk(adminId);
      if (!admin) {
        return res.status(404).json({ error: "Admin not found" });
      }
      return res.status(200).json(admin);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Update Admin
  async update(req, res) {
    const adminId = req.params.id;
    try {
      const [updatedRowsCount] = await Admin.update(req.body, {
        where: { id: adminId },
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "Admin not found" });
      }
      const updatedAdmin = await Admin.findByPk(adminId);
      return res.status(200).json(updatedAdmin);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Delete Admin
async delete (req, res) {
    const adminId = req.params.id;
    try {
      const deletedRowCount = await Admin.destroy({
        where: { id: adminId },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: "Admin not found" });
      }
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = new AdminController();