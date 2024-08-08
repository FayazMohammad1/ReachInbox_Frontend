const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/save', authController.saveEmail);
router.get('/emails/:fromEmail', authController.getEmailsByFromEmail);
// In server/routes/authRoute.js
router.get('/thread/:threadId', authController.getEmailsByThreadId);
// In server/routes/authRoute.js
router.post('/send-reply', authController.sendReply);
router.delete('/thread/:threadId', authController.deleteEmailsByThreadId);


module.exports = router;
