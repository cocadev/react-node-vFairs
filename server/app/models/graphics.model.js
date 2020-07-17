module.exports = (sequelize, Sequelize) => {
  const Graphics = sequelize.define("graphics", {
    universityId: {
      type: Sequelize.INTEGER
    },
    tv: {
      type: Sequelize.TEXT('long')
    },
    tvLnk: {
      type: Sequelize.STRING
    }
  });

  return Graphics;
};
