module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("students", {
    school_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    nationality_id: {
      type: Sequelize.INTEGER
    },
    gender_id: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    grade_id: {
      type: Sequelize.INTEGER
    },
    sm_1_id: {
      type: Sequelize.INTEGER
    },
    sm_2_id: {
      type: Sequelize.INTEGER
    },
    sm_id_1: {
      type: Sequelize.STRING
    },
    sm_id_2: {
      type: Sequelize.STRING
    },
    specializations_1_id: {
      type: Sequelize.INTEGER
    },
    specializations_2_id: {
      type: Sequelize.INTEGER
    },
    study_destination_1_id: {
      type: Sequelize.INTEGER
    },
    study_destination_2_id: {
      type: Sequelize.INTEGER
    }
  });

  return Student;
};
