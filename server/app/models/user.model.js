module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
    },
    school_id: {
      type: Sequelize.INTEGER
    },
    university_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    email_verified_at: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING
    },
    remember_token: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.TEXT('long')
    },
    phone: {
      type: Sequelize.STRING
    },
    ext: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    },
    programs: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    destination: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    boothReady: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return User;
};
