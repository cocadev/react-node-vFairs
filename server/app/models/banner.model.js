module.exports = (sequelize, Sequelize) => {
  const Banner = sequelize.define("banners", {
    fairId: {
      type: Sequelize.INTEGER
    },
    base64: {
      type: Sequelize.TEXT('long')
    },
    link: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.INTEGER
    }
  });

  return Banner;
};
