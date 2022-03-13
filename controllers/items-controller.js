const Plants = require("../models/plants-model");

exports.getItems = (req, res, next) => {
  Items.find()
    .then((items) => {
      res.json({
        success: true,
        data: items,
      });
    })
    .catch(next);
};

exports.getItemsById = (req, res) => {
  const { id } = req.params;
  Items.findById(id)
    .then((plant) => {
      if (plant) {
        res.json(plant);
      } else {
        res.status(404).json({ message: "Could not find item by id given" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Failed to get item" });
    });
};
