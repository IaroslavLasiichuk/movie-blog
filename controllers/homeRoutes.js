const router = require('express').Router();
const { Blog, User, Person } = require('../models');
const withAuth = require('../utilis/auth');

// Render the home page.
router.get('/', async (req, res) => {
  try {
    const dbBLogData = await Blog.findAll();
    const blogs = dbBLogData.map((blog) => blog.get({ plain: true }));
    res.render('home', {
      blogs
    });
  } catch (err) {
 res.status(500).json(err);
  }
});

// GET all movie and uses withAuth middleware to prevent access to movie page
router.get('/movie', withAuth, async (req, res) => {
  try {
    res.render('movie',{
      logged_in: req.session.logged_in
   });
  } catch (err) {
 res.status(500).json(err);
  }
});

// GET all posts from blog
router.get('/blog',withAuth, async (req, res) => {
  try {
    const dbBLogData = await Blog.findAll();
    const blogs = dbBLogData.map((blog) => blog.get({ plain: true }));
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    // Serialize data so the template can read it
    return res.render('blog', {
      blogs,
      user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
   return  res.status(500).json(err);
  }
});

//  Use withAuth middleware to prevent access to about page
router.get('/about', withAuth, async (req, res) => {
  try {
    const dbPersonData = await Person.findAll();
    const persons = dbPersonData.map((person) => person.get({ plain: true }));
    res.render('about', {
      persons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
 res.status(500).json(err);
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

module.exports = router;