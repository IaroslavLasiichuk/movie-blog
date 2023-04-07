const seedBlogData = require('./seed-blog');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true});
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogData();
  console.log('\n----- BLOG CONTENT SEEDED -----\n');
  process.exit(0);
};

seedAll();