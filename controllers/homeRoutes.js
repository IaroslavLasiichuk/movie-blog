const router = require('express').Router();

router.get('/movie', async (req, res) => {
  try {
    res.render('movie', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET home page with login form
router.get('/login', async (req, res) => {
    try {
     res.render('home');
    } catch (err) {
   res.status(500).json(err);
    }
});
// GET home page with login form
router.get('/blog', async (req, res) => {
    try {
     res.render('blog');
    } catch (err) {
   res.status(500).json(err);
    }
});

// GET sign up page
router.get('/signup', async (req, res) => {
    try {
     res.render('signup');
    } catch (err) {
   res.status(500).json(err);
    }
  });

module.exports = router;