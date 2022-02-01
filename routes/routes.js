const router = require("express").Router();
const {signIn, createUser, getAllUsers} = require('../controllers/auth');

router.post('/signin', signIn);
router.post('/create', createUser);
router.get('/users', getAllUsers);

module.exports = router;