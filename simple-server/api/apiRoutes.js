const express = require('express');
const router = express.Router();

const authRoute = require('../routes/authentication')
const postsRoute = require('../routes/posts')

router.use('/auth', authRoute)
router.use('/posts', postsRoute)

module.exports = router;