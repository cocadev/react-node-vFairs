module.exports = (sequelize, Sequelize) => {
  const Link = sequelize.define("menus", {
    universityId: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    }
  });

  return Link;
};
