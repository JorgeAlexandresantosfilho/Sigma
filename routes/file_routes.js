const express = require('express');
const router = express.Router();
const file_controller = require('../controllers/file_controller');
const upload_middleware = require('../middleware/upload_middleware');

router.post('/api', file_controller.CreateFile);
router.get('/api', file_controller.GetFiles);
router.get('/api', file_controller.Searchtitle);
router.put('/api', file_controller.Fileupdt);
router.delete('/api', file_controller.delfile);
router.post('/upload', upload_middleware.single('file'), file_controller.CreateFile);

module.exports = router;