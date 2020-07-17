module.exports = (sequelize, Sequelize) => {
  const Program = sequelize.define("specializations", {
    spec_name: {
      type: Sequelize.STRING
    }
  });

  return Program;
};
