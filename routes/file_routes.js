const express = require('express');
const router = express.Router();
const file_controller = require('../controllers/file_controller');

router.post('/api', file_controller.CreateFile);



module.exports = router;