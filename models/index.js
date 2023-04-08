const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');
const Person= require('./Person');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Comment, Blog, Person };