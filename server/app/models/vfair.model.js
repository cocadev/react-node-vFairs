module.exports = (sequelize, Sequelize) => {
  const VFair = sequelize.define("vfairs", {
    logo: {
      type: Sequelize.TEXT('long')
    },
    start: {
      type: Sequelize.DATE
    },
    end: {
      type: Sequelize.DATE
    },
    g12: {
      type: Sequelize.INTEGER
    },
    g11: {
      type: Sequelize.INTEGER
    },
    max: {
      type: Sequelize.INTEGER
    },
    school: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return VFair;
};
