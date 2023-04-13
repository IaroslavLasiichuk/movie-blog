const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utilis/auth');

// Create a new review.
router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Blog.create({include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      ...req.body,
      user_id: req.session.user_id,
    });
      
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;