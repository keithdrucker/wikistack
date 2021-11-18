const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = Sequelize.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.STRING,
  status: Sequelize.INTEGER
})

const User = Sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})




module.exports = {
  db
}
