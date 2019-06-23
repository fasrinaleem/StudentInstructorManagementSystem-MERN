const express = require('express');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors())

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now() + '.docs')
        cb(null, Date.now() + '-' +file.originalname )
    }
});

var upload = multer({ storage: storage }).single('file');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));



router.post('/', function (req, res) {

    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Assignment uploaded!'
        });

        // Everything went fine
    })
});




module.exports = router;
