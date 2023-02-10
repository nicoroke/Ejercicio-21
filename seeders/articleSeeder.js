const { faker } = require("@faker-js/faker");
const { Article, User } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [
    {
      type: "admin",
      firstname: "Marty",
      lastname: "McFly",
      email: "mmcfly@gmail.com",
    },
  ];
  await User.bulkCreate(users);

  const articles = [];
  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.paragraphs(),
      userId: 1,
    });
  }
  await Article.bulkCreate(articles);

  console.log("[Database] Se corrió el seeder de Articles.");
};
