const {Router} = require('express');
const { IndexView } = require('../Controllers/IndexController');
const { stk_push } = require('../Controllers/mpesaControllers');
const { generateToken } = require('../middleware/DarajaOauthToken');

const router = Router();

router.get('/', IndexView);
router.post('/stk-push', generateToken, stk_push);

module.exports = router;