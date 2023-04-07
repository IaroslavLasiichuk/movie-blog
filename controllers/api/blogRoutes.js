const router = require('express').Router();
const { Blog } = require('../../models');
const { User } = require('../../models');
const withAuth = require('../../utilis/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});
  
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Blog.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
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