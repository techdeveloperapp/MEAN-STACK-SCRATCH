var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../app/controllers/usersController');

/* GET users listing. */
router.get('/', user_controller.add_user);
router.get('/add', user_controller.add_user);
router.get('/edit', user_controller.edit_user);
router.get('/delete', user_controller.delete_user);

module.exports = router;
