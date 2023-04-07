const router = require('express').Router();
const { Blog } = require('../models/Blog');
const withAuth = require('../utilis/auth');

router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
 res.status(500).json(err);
  }
});

//  Use withAuth middleware to prevent access to route
router.get('/movie', withAuth, async (req, res) => {
  try {
    res.render('movie',{
      logged_in: req.session.logged_in
   });
  } catch (err) {
 res.status(500).json(err);
  }
});

//  Use withAuth middleware to prevent access to route
router.get('/blog', withAuth, async (req, res) => {
  try {
    res.render('blog',{
      logged_in: req.session.logged_in
   });
  } catch (err) {
   return  res.status(500).json(err);
  }
});

// GET home page with login form
router.get('/login', async (req, res) => {
    try {
      res.render('login');
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

router.get('/',withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('blog', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;