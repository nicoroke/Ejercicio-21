const { faker } = require("@faker-js/faker");
const { Article, User, Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];
  const comments = [];
  const users = [];

  for (let i = 0; i < 3; i++) {
    users.push({
      firstname: faker.lorem.sentence(1),
      lastname: faker.lorem.sentence(1),
    });
  }
  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: 1,
    });
  }
  for (let i = 0; i < 5; i++) {
    comments.push({
      content: faker.lorem.sentence(15),
      articleId: 1,
      username: faker.lorem.sentence(1),
    });
  }

  await User.bulkCreate(users);
  await Article.bulkCreate(articles);
  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Articles.");
};
