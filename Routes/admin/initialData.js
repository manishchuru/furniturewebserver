const express = require('express');
const { requireSignin, adminMiddleware } = require('../../common-middleware/index');
const { initialData } = require('../../controllers/admin/initialData');
const router = express.Router();


router.get('/initialdata',
//  requireSignin, adminMiddleware, 
 initialData);


module.exports = router;