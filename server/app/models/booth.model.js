module.exports = (sequelize, Sequelize) => {
  const Booth = sequelize.define("booths", {
    fairId: {
      type: Sequelize.INTEGER
    },
    universityId: {
      type: Sequelize.INTEGER
    },
    layout: {
      type: Sequelize.STRING,
      defaultValue: '0'
    },
    color: {
      type: Sequelize.STRING,
      defaultValue: '1'
    },
    visits: {
      type: Sequelize.INTEGER
    },
    chats: {
      type: Sequelize.INTEGER
    },
    calls: {
      type: Sequelize.INTEGER
    },
    video_calls: {
      type: Sequelize.INTEGER
    },
    ready: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    position: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return Booth;
};
