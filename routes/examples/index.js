var router = require('express').Router();

router.post('/sendTestNotification', require('./sendNotification'));

module.exports = router;
