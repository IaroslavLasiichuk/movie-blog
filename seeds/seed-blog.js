const { Blog } = require('../models');

const blogData = [
    {
        blog_title: "The Astoria Studio: From Paramount to KAS",
        blog_content: "The Astoria Studio has been at the heart of filmmaking in New York City since 1920, with a fascinating history integral to the origin of Museum of the Moving Image. A New York City landmark, the Astoria Studio, which celebrated its 100th anniversary in 2020, is the countrys first motion picture studio to be listed on the National Register of Historic Places, cited for its architectural significance and its extensive role in the history of American cinema.",
        blog_created: "Sat Apr 01 2021 11:10:08 AM"
    } 
];
const seedBlogData = () => Blog.bulkCreate(blogData);

module.exports = seedBlogData;
