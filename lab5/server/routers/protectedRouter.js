const { Router } = require("express");
const userController = require("../controllers/userController");
const recordController = require("../controllers/recordController");
const adminController = require("../controllers/adminController");

const router = new Router();

router.get("/user", userController.idRead);
router.get("/admin", adminController.idRead);

router.post("/record/create", recordController.create);
router.put("/user/update/", userController.update);
router.put("/admin/update/", adminController.update);
router.delete("/record/delete/", recordController.delete);

module.exports = router;