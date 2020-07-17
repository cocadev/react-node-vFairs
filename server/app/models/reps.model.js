module.exports = (sequelize, Sequelize) => {
  const Rep = sequelize.define("reps", {
    universityId: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    }
  });

  return Rep;
};
