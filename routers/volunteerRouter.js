const express = require('express');
const router = express.Router();
const volunteerController = require("../controllers/volunteerController");

router.delete('/:id',volunteerController.delete);
router.get('/',volunteerController.getAll);

module.exports = router;