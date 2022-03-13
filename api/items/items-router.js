const router = require("express").Router();

const {
  getItems,
  getItemsById,
} = require("../../controllers/items-controller");

router.route("/").get(getItems);
router.route("/:id").get(getItemsById);

module.exports = router;
